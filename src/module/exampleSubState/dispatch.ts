import DispatchClass from '@/module/util/rootDispatch';
import { emptyAction } from './actions';

export default class NodesDispatch extends DispatchClass {
  emptyAction = (id: string) => this.dispatch(emptyAction({ id }));
}
