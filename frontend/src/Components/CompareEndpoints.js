import { useEffect, useState } from 'react';
import { VStack, Flex } from '@chakra-ui/react';
import { extractFeeds } from '../Helpers/Utils';
import FeedGroupView from '../Custom/FeedGroupView';
import FeedCompareGroupView from '../Custom/FeedCompareGroupView';
import Title from '../Custom/Title';
import { COLORS } from '../data/constants';
import RadioButton from '../Custom/RadioButton';

const FeedGroup = ({ title, group, endpoints, oises, j, status }) => {
  return group.map((feed, index) =>
    index !== j || feed.length === 0 ? null : (
      <VStack key={j} alignItems={'left'}>
        <Title header={title} buttonVisibility={false} isLoading={false} />
        <FeedGroupView
          key={index}
          endpoint={endpoints.endpoints[j]}
          index={index}
          feed={feed}
          apiSpecifications={oises[j].apiSpecifications}
          status={status}
        />
      </VStack>
    )
  );
};

const CompareGroup = ({ title, group, comparison, oldOis, newOis, j, status }) => {
  return group.map((feed, index) =>
    index !== j || feed.length === 0 ? null : (
      <VStack key={j} alignItems={'left'}>
        <Title header={title} buttonVisibility={false} isLoading={false} />
        <FeedCompareGroupView
          key={index}
          index={index}
          feed={feed}
          newEndpoint={comparison.endpointsNew.endpoints[j]}
          oldEndpoint={comparison.endpointsOld.endpoints[j]}
          oldServers={oldOis[j].apiSpecifications}
          newServers={newOis[j].apiSpecifications}
          status={status}
        />
      </VStack>
    )
  );
};

const NavigationView = ({ viewMode, setViewMode }) => {
  const getColor = (mode) => {
    return viewMode === mode ? COLORS.select : COLORS.table;
  };
  return (
    <Flex width={'100%'} gap={3} alignItems={'center'}>
      <RadioButton
        onClick={() => setViewMode('added')}
        bgColor={getColor('added')}
        icon={`./add.svg`}
        description={'Added'}
      />
      <RadioButton
        onClick={() => setViewMode('removed')}
        bgColor={getColor('removed')}
        icon={`./remove.svg`}
        description={'Removed'}
      />
      <RadioButton
        onClick={() => setViewMode('updated')}
        bgColor={getColor('updated')}
        icon={`./update.svg`}
        description={'Updated'}
      />
      <RadioButton
        onClick={() => setViewMode('unchanged')}
        bgColor={getColor('unchanged')}
        icon={`./unchanged.svg`}
        description={'Unchanged'}
      />
    </Flex>
  );
};

const ContentView = ({ viewMode, oldOis, newOis }) => {
  const [comparison, setComparison] = useState(null);

  useEffect(() => {
    setComparison(null);

    if (oldOis.length === 0) return;
    if (newOis.length === 0) return;

    const comparison = extractFeeds(newOis, oldOis);

    setComparison(comparison);
  }, [newOis, oldOis]);

  return oldOis == null || newOis === null
    ? null
    : comparison === null || viewMode === null
    ? null
    : newOis.map((oi, j) => (
        <VStack key={j} alignItems={'left'}>
          {viewMode === 'added' ? (
            <FeedGroup
              title={oi.title}
              group={comparison.compareFeeds.added}
              endpoints={comparison.endpointsNew}
              oises={newOis}
              j={j}
              status={1}
            />
          ) : null}
          {viewMode === 'removed' ? (
            <FeedGroup
              title={oi.title}
              group={comparison.compareFeeds.removed}
              endpoints={comparison.endpointsOld}
              oises={oldOis}
              j={j}
              status={2}
            />
          ) : null}
          {viewMode === 'updated' ? (
            <CompareGroup
              title={oi.title}
              group={comparison.compareFeeds.updated}
              comparison={comparison}
              oldOis={oldOis}
              newOis={newOis}
              j={j}
              status={3}
            />
          ) : null}
          {viewMode === 'unchanged' ? (
            <FeedGroup
              title={oi.title}
              group={comparison.compareFeeds.unchanged}
              endpoints={comparison.endpointsNew}
              oises={newOis}
              j={j}
              status={0}
            />
          ) : null}
        </VStack>
      ));
};

const CompareEndpoints = ({ oldOis, newOis }) => {
  const [viewMode, setViewMode] = useState(null);

  return (
    <VStack width={'100%'} alignItems={'left'}>
      <NavigationView viewMode={viewMode} setViewMode={setViewMode} />
      <ContentView viewMode={viewMode} oldOis={oldOis} newOis={newOis} />
    </VStack>
  );
};

export default CompareEndpoints;
