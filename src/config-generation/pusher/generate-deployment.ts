import { join } from "path";
import { globSync } from "glob";
import { format } from "date-fns";
import { ethers } from "ethers";
import { deriveEndpointId, deriveTemplateId, readJson, mkdirIfDoesntExists, saveJson, deriveDeploymentId } from "../config-utils";

import * as fs from "fs";

const prompts = require("prompts");


const main = async () => {
  
  const APIS_ROOT = "./data/apis/";

  const configGenerationTimestamp = Math.floor(Date.now() / 1000);

  // get the apiName
  const existingProviders = fs.readdirSync(APIS_ROOT);
  const { apiName } = await prompts({
    type: "select",
    name: "apiName",
    message: "Select an API to create deployment:",
    choices: existingProviders.map((apiName) => {
      return { title: apiName, value: apiName }
    })
  });

  // read required files
  let pusherConfig = readJson("./boilerplates/boilerplate-pusher-config.json");
  const apiData = readJson(`./data/apis/${apiName}/api-data.json`);
  
  // read oises
  const oises = globSync(`./data/apis/${apiName}/oises/*`).map((oisPath) => readJson(oisPath));

  // init "signedApiUpdates" triggers
  pusherConfig.triggers["signedApiUpdates"] = [];

  // generate rateLimiting object & push OIS objects
  if(oises.length > 1) {
    // TODO

  } else {
    oises.map((ois) => {
      pusherConfig.rateLimiting[ois.title] = { "maxConcurrency": 25, "minTime": 10 };
      pusherConfig.ois.push(ois);
    })
  }

  // validate OIS titles in "apiData.supportedFeedsInBatches"
  const originalOisTitlesHash = ethers.utils.solidityKeccak256(oises.map((o) => "string"), oises.map((o) => o.title));
  const oisTitlesHashFromApiData = ethers.utils.solidityKeccak256(Object.keys(apiData.supportedFeedsInBatches).map((ot) => "string"), Object.keys(apiData.supportedFeedsInBatches));
  if(originalOisTitlesHash !== oisTitlesHashFromApiData) {
    console.log("Actual OIS titles and OIS titles in api-data.json are not same!");
    console.log("Exiting...");
    process.exit();
  }

  // generate templates (feedName: XXX/YYY)
  Object.keys(apiData.supportedFeedsInBatches).map((oisTitle) => {
    // add endpoints
    const endpointId = deriveEndpointId(oisTitle);
    pusherConfig.endpoints[endpointId] = {
      endpointName: "feed",
      oisTitle: oisTitle
    }

    // add templates
    apiData.supportedFeedsInBatches[oisTitle].map((batch: string[]) => {
      let templateIds: string[] = batch.map((feedName: string) => {
        const templateId = deriveTemplateId(oisTitle, feedName);
        pusherConfig.templates[templateId] = {
          endpointId: endpointId,
          parameters: [{ type: "string32", name: "name", value: feedName }]
        }
        return templateId;
      })

      // add triggers
      pusherConfig.triggers["signedApiUpdates"].push(
        [
          {
            signedApiName: "Nodary",
            templateIds: templateIds,
            fetchInterval: 5,
            updateDelay: 30
          }
        ]
      )
      
    });
  })
  
  // generate signedApis
  pusherConfig.signedApis = [
    {
      name: "Nodary",
      url: "https://pool.nodary.io"
    }
  ]

  // generate apiCredentials (TODO)
  pusherConfig.apiCredentials = [];
  oises.map((ois) => {
    Object.keys(ois.apiSpecifications.components.securitySchemes).map((schemeName) => {
      pusherConfig.apiCredentials.push(
        {
          oisTitle: ois.title,
          securitySchemeName: schemeName,
          securitySchemeValue: `${schemeName.toUpperCase()}_VALUE`
        }
      );
    });
  });
  
  // derive deployment id
  const deploymentId = deriveDeploymentId(configGenerationTimestamp, apiData.airnodeAddress)
  pusherConfig.deploymentId = deploymentId;

  // save the deployment
  const deploymentPath = `./data/apis/${apiName}/deployments/candidate-deployments`;
  saveJson(join(deploymentPath, `${deploymentId}-pusher.json`), pusherConfig);

}


main();