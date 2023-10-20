import { join } from "path";
import { globSync } from "glob";
import { format } from "date-fns";
import { deriveEndpointId, deriveTemplateId, readJson, mkdirIfDoesntExists, saveJson } from "../config-utils";

import * as fs from "fs";


const prompts = require("prompts");

const main = async () => {
  
  const APIS_ROOT = "./data/apis/";

  const today = format(new Date(), "yyyy-MM-dd");
  const timestamp = Math.floor(Date.now() / 1000);

  // arg parse
  const existingProviders = fs.readdirSync(APIS_ROOT);
  const { apiName } = await prompts({
    type: "select",
    name: "apiName",
    message: "Select an API to create deployment:",
    choices: existingProviders.map((apiName) => {
      return { title: apiName, value: apiName }
    })
  });

  let pusherConfig = readJson("./boilerplates/boilerplate-pusher-config.json");
  const apiData = readJson(`./data/apis/${apiName}/api-data.json`);
  
  // read oises
  const oises = globSync(`./data/apis/${apiName}/oises/*`).map((oisPath) => readJson(oisPath));

  // create deployment path
  const deploymentPath = join(`./data/apis/${apiName}/deployments`, today);
  mkdirIfDoesntExists(deploymentPath);

  pusherConfig.triggers["signedApiUpdates"] = [];

  if(oises.length > 1) {

  } else {
    oises.map((ois) => {
      // generate rateLimiting
      pusherConfig.rateLimiting[ois.title] = { "maxConcurrency": 25, "minTime": 10 };
  
      // generate endpoints
      const endpointId = deriveEndpointId(ois.title);
      pusherConfig.endpoints[endpointId] = {
        endpointName: "feed",
        oisTitle: ois.title
      }
      
      // generate templates (pairName: XXX/YYY)
      Object.keys(apiData.supportedFeedsInBatches).map((oisTitle) => {
        apiData.supportedFeedsInBatches[oisTitle].map((batch: any) => {
          let templateIds: string[] = [];
          batch.map((pairName: string) => {
            const templateId = deriveTemplateId(ois.title, pairName);
            templateIds.push(templateId);  
            pusherConfig.templates[templateId] = {
              endpointId: endpointId,
              parameters: [{ type: "string32", name: "name", value: pairName }]
            }
          })
  
          // generate triggers
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

      // generate oises
      pusherConfig.ois.push(ois);

    })
  }
  

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
  

  saveJson(join(deploymentPath, "pusher.json"), pusherConfig);

}


main();