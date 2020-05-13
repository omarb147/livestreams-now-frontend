import DispatchClass from '@/module/util/rootDispatch';
import { fetchLivestreams, searchlivestreams } from './actions';

export default class LiveStreamispatch extends DispatchClass {
  fetchLivestreams = () => this.dispatch(fetchLivestreams.request());

  searchlivestreams = (query: string) => this.dispatch(searchlivestreams({ query }));
}
