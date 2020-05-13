import SelectorClass from '@/module/util/rootSelector';
import { ILivestream, ILivestreamState } from '@/type/types';

export default class LivestreamSelector extends SelectorClass {
  useAllLivesteams = (): ILivestream[] => this.useSelector((state) => state.livestreamState.livestreams);

  useLivestreamState = (): ILivestreamState => this.useSelector((state) => state.livestreamState);

  useFilteredLivestreams = (query: string): ILivestream[] | [] => this.useSelector((state) => {
    const upperCaseQuery = query.toUpperCase();
    return state.livestreamState.livestreams.filter(
      (stream) => stream.description?.toUpperCase().includes(upperCaseQuery)
          || stream.title.toUpperCase().includes(upperCaseQuery),
    );
  });
}
