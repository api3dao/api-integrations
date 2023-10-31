import { useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { extractFeeds } from '../Helpers/Utils';
import FeedGroupView from '../Custom/FeedGroupView';
import FeedCompareGroupView from '../Custom/FeedCompareGroupView';
import Title from '../Custom/Title';

const FeedGroup = ({ title, group, endpoints, oises, j, status }) => {
  return group.map((feed, index) =>
    index !== j ? null : (
      <FeedGroupView
        key={index}
        endpoint={endpoints.endpoints[j]}
        index={index}
        feed={feed}
        apiSpecifications={oises[j].apiSpecifications}
        title={title}
        status={status}
      />
    )
  );
};

const CompareGroup = ({ title, group, comparison, oldOis, newOis, j, status }) => {
  return group.map((feed, index) =>
    index !== j ? null : (
      <FeedCompareGroupView
        key={index}
        index={index}
        feed={feed}
        newEndpoint={comparison.endpointsNew[j]}
        oldEndpoint={comparison.endpointsOld[j]}
        oldServers={oldOis[j].apiSpecifications}
        newServers={newOis[j].apiSpecifications}
        title={title}
        status={status}
      />
    )
  );
};

const CompareEndpoints = ({ oldOis, newOis }) => {
  const [comparison, setComparison] = useState(null);

  useEffect(() => {
    setComparison(null);

    if (oldOis.length === 0) return;
    if (newOis.length === 0) return;

    const comparison = extractFeeds(newOis, oldOis);

    setComparison(comparison);
  }, [newOis, oldOis]);

  return oldOis == null || newOis === null ? null : comparison === null ? null : (
    <VStack width={'100%'} alignItems={'left'}>
      {newOis.map((oi, j) => (
        <VStack key={j} alignItems={'left'}>
          <Title header={oi.title} buttonVisibility={false} isLoading={false} />
          <FeedGroup
            title={'Added'}
            group={comparison.compareFeeds.added}
            endpoints={comparison.endpointsNew}
            oises={newOis}
            j={j}
            status={1}
          />
          <FeedGroup
            title={'Removed'}
            group={comparison.compareFeeds.removed}
            endpoints={comparison.endpointsOld}
            oises={oldOis}
            j={j}
            status={2}
          />
          <CompareGroup
            title={'Updated'}
            group={comparison.compareFeeds.updated}
            comparison={comparison}
            oldOis={oldOis}
            newOis={newOis}
            j={j}
            status={3}
          />
          <FeedGroup
            title={'Unchanged'}
            group={comparison.compareFeeds.unchanged}
            endpoints={comparison.endpointsNew}
            oises={newOis}
            j={j}
            status={0}
          />
        </VStack>
      ))}
    </VStack>
  );
};

export default CompareEndpoints;
