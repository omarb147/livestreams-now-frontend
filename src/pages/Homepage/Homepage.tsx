import React, { useEffect } from 'react';
import LivestreamDispatchClass from '@/module/livestream/dispatch';
import LivestreamSelectorClass from '@/module/livestream/selectors';
// import Iframe from 'react-iframe';
import { Section, SearchInput, LineBreak } from '@/components/atoms';
import { CardGrid, ListView, CollapseView } from '@/components/molecules';
import { ISortedLiveStreams } from '@/type/types';

const onSearchChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  actionDispatch: LivestreamDispatchClass,
): void => {
  const { value } = event.currentTarget;
  actionDispatch.searchlivestreams(value);
};

const generateLivestreamsList = (data: ISortedLiveStreams) => Object.keys(data)
// @ts-ignore
  .sort((firstDate, secondDate) => new Date(firstDate) - new Date(secondDate))
  .map((key) => ({
    component: <ListView title={key} data={data[key]} />,
    title: key,
    count:data[key].length
  }));

const Homepage = () => {
  const LivestreamsDispatch = new LivestreamDispatchClass();
  const LivestreamSelector = new LivestreamSelectorClass();
  const { searchQuery } = LivestreamSelector.useLivestreamState();
  // const filteredLiveStreams = LivestreamSelector.useFilteredLivestreams(
  //   searchQuery,
  // );
  const sortedLivestreams = LivestreamSelector.useFilteredLivestreamsByDate(
    searchQuery,
  );

  useEffect(() => {
    LivestreamsDispatch.fetchLivestreams();
  }, []);

  return (
    <div>
      <Section backgroundColor="lightgray">
        <h1>FIND OUT ABOUT THE FRESHEST LIVESTREAMS ON DEMAND!</h1>
      </Section>
      <Section backgroundColor="lightgray">
        <h2>WHAT&apos;S ON TODAY?</h2>
      </Section>
      <Section>
        <SearchInput
          placeholder="search livestreams"
          onChange={(e) => {
            onSearchChangeHandler(e, LivestreamsDispatch);
          }}
        />
      </Section>
      <Section>
        <LineBreak color="lightgray" />
      </Section>
      {searchQuery && (
        <Section>
          <h1>
            SEARCH RESULTS FOR :
            {searchQuery.toUpperCase()}
          </h1>
        </Section>
      )}
      <Section>
        {/* <CardGrid data={filteredLiveStreams} /> */}
        <CollapseView data={generateLivestreamsList(sortedLivestreams)} />
        {/* {generateLivestreamsList(sortedLivestreams)} */}
      </Section>
    </div>
  );
};

export default Homepage;
