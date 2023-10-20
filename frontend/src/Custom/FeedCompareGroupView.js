import React from "react";
import { VStack } from "@chakra-ui/react";
import ExpandableView from "./ExpandableView";
import FeedCompareRowView from "./FeedCompareRowView";

const FeedGroupView = ({ index, feed, oldServers, newServers, title, status }) => {
  return (
    <VStack key={index} alignItems={"left"} width={"100%"}>
      <ExpandableView
        status={0}
        view={feed.map((feed, index) => (
          <VStack key={index} alignItems={"left"} width={"100%"}>
            <ExpandableView
              status={status}
              view={<FeedCompareRowView feed={feed} oldServers={oldServers.servers} newServers={newServers.servers} />}
              header={feed.newFeed.feed}
            />
          </VStack>
        ))}
        header={title}
      />
    </VStack>
  );
};

export default FeedGroupView;
