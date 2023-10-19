import React from "react";
import { VStack } from "@chakra-ui/react";
import FeedRowView from "../Custom/FeedRowView";
import { combine } from "../Helpers/Utils";

import ExpandableView from "../Custom/ExpandableView";

const Endpoint = ({ endpoint, apiSpecifications, apiCredentials }) => {
  return (
    <VStack alignItems={"left"}>
      {combine(endpoint).map((feed, index) => (
        <VStack key={index} alignItems={"left"} width={"100%"}>
          <ExpandableView
            view={
              <FeedRowView endpoint={endpoint} feed={feed} apiSpecifications={apiSpecifications} apiCredentials={apiCredentials} />
            }
            header={feed.feed}
          />
        </VStack>
      ))}
    </VStack>
  );
};

export default Endpoint;
