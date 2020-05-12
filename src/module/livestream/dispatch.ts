import DispatchClass from '@/module/util/rootDispatch';
import { fetchLivestreams } from './actions';

export default class LiveStreamispatch extends DispatchClass {
  fetchLivestreams = () => this.dispatch(fetchLivestreams.request());
}
