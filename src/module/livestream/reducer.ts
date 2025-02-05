import { getType } from 'typesafe-actions';
import { ILivestreamState } from '@/type/types';
import {
  fetchLivestreams,
  searchlivestreams,
  livestreamsActionTypes,
} from './actions';

const initialState: ILivestreamState = {
  livestreams: [],
  loading: false,
  error: false,
  searchQuery: '',
};

export default (
  state: ILivestreamState = initialState,
  action: livestreamsActionTypes,
): ILivestreamState => {
  switch (action.type) {
    case getType(fetchLivestreams.request):
      return {
        ...state,
        loading: true,
        error: false,
      };
    case getType(fetchLivestreams.failure):
      return {
        ...state,
        loading: false,
        error: true,
      };
    case getType(fetchLivestreams.success):
      return {
        ...state,
        livestreams: action.payload.livestreams,
        loading: false,
      };
    case getType(searchlivestreams):
      return {
        ...state,
        searchQuery: action.payload.query,
      };

    default: {
      return state;
    }
  }
};
