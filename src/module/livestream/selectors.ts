import SelectorClass from '@/module/util/rootSelector';
import { ILivestream, ILivestreamState } from '@/type/types';

export default class LivestreamSelector extends SelectorClass {
  useAllLivesteams = (): ILivestream[] => this.useSelector((state) => state.livestreamState.livestreams);

  useLivestreamState = (): ILivestreamState => this.useSelector((state) => state.livestreamState);

  useFilteredLivestreams = (filterParam: string): ILivestream[] | [] => this.useSelector((state) => state.livestreamState.livestreams.filter(
    (stream) => stream.description?.includes(filterParam)
          || stream.title.includes(filterParam),
  ));
}
