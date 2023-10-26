import { useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { extractFeeds } from '../Helpers/Utils';
import FeedGroupView from '../Custom/FeedGroupView';
import FeedCompareGroupView from '../Custom/FeedCompareGroupView';
import Title from '../Custom/Title';

const CompareEndpoints = ({ oldOis, newOis }) => {
  const [comparison, setComparison] = useState(null);

  useEffect(() => {
    setComparison(null);

    if (oldOis.length === 0) return;
    if (newOis.length === 0) return;

    const comparison = extractFeeds(oldOis, newOis);

    setComparison(comparison);
  }, [newOis, oldOis]);

  return oldOis == null || newOis === null ? null : comparison === null ? null : (
    <VStack alignItems={'left'}>
      {newOis.map((oi, j) => (
        <VStack key={j} alignItems={'left'}>
          <Title header={oi.title} buttonVisibility={false} isLoading={false} />

          {comparison.compareFeeds.added.map((feed, index) =>
            index !== j ? null : (
              <FeedGroupView
                key={index}
                endpoint={comparison.endpointsNew[j]}
                index={index}
                feed={feed}
                apiSpecifications={newOis[j].apiSpecifications}
                title={'Added'}
                status={1}
              />
            )
          )}
          {comparison.compareFeeds.removed.map((feed, index) =>
            index !== j ? null : (
              <FeedGroupView
                key={index}
                endpoint={comparison.endpointsOld[j]}
                index={index}
                feed={feed}
                apiSpecifications={oldOis[j].apiSpecifications}
                title={'Removed'}
                status={2}
              />
            )
          )}
          {comparison.compareFeeds.updated.map((feed, index) =>
            index !== j ? null : (
              <FeedCompareGroupView
                key={index}
                index={index}
                feed={feed}
                newEndpoint={comparison.endpointsNew[j]}
                oldEndpoint={comparison.endpointsOld[j]}
                oldServers={oldOis[j].apiSpecifications}
                newServers={newOis[j].apiSpecifications}
                title={'Updated'}
                status={3}
              />
            )
          )}
          {comparison.compareFeeds.unchanged.map((feed, index) =>
            index !== j ? null : (
              <FeedGroupView
                key={index}
                endpoint={comparison.endpointsNew[j]}
                index={index}
                feed={feed}
                apiSpecifications={newOis[j].apiSpecifications}
                title={'Unchanged'}
                status={0}
              />
            )
          )}
        </VStack>
      ))}
    </VStack>
  );
};

export default CompareEndpoints;
