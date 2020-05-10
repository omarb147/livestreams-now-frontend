import SelectorClass from '@/module/util/rootSelector';
import { IExampleSubState } from '@/type/types';

export default class NodeSelector extends SelectorClass {
  useExampleState = (): IExampleSubState => this.useSelector((state) => state.exampleSubState);
}
