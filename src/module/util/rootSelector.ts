import {
  TypedUseSelectorHook,
  useSelector as reduxUseSelector,
} from 'react-redux';
import { IState } from '@/type/types';

export default class SelectorClass {
  useSelector: TypedUseSelectorHook<IState>;

  constructor() {
    this.useSelector = reduxUseSelector;
  }
}
