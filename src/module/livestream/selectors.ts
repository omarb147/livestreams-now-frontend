import SelectorClass from '@/module/util/rootSelector';
import {
  ILivestream,
  ILivestreamState,
  ISortedLiveStreams,
  IState,
} from '@/type/types';

const filterLiveStreams = (query: string, state: IState) => {
  const upperCaseQuery = query.toUpperCase();
  return state.livestreamState.livestreams.filter(
    (stream) => stream.description?.toUpperCase().includes(upperCaseQuery)
      || stream.title.toUpperCase().includes(upperCaseQuery),
  );
};

export default class LivestreamSelector extends SelectorClass {
  useAllLivesteams = (): ILivestream[] => this.useSelector((state) => state.livestreamState.livestreams);

  useLivestreamState = (): ILivestreamState => this.useSelector((state) => state.livestreamState);

  useFilteredLivestreams = (query: string): ILivestream[] | [] => this.useSelector((state) => filterLiveStreams(query, state));

  useFilteredLivestreamsByDate = (query: string): ISortedLiveStreams | {} => this.useSelector((state) => {
    const filteredLivstreams = filterLiveStreams(query, state);
    const sortedLivestreams: ISortedLiveStreams = {};
    filteredLivstreams.forEach((livestream) => {
      const { date } = livestream;
      if (sortedLivestreams[date]) {
        sortedLivestreams[date].push(livestream);
      } else {
        sortedLivestreams[date] = [livestream];
      }
    });
    return sortedLivestreams;
  });
}
