import { getType } from 'typesafe-actions';
import { IExampleSubState } from '@/type/types';
import { emptyAction, emptyActionTypes } from './actions';

const initialState: IExampleSubState = {
  id: '',
  otherVar: '',
};

export default (
  state: IExampleSubState = initialState,
  action: emptyActionTypes,
): IExampleSubState => {
  switch (action.type) {
    case getType(emptyAction): {
      return {
        ...state,
        id: action.payload.id,
      };
    }
    default: {
      return state;
    }
  }
};
