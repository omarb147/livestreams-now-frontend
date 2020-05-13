import { createAsyncAction, createAction, ActionType } from 'typesafe-actions';
import { ILivestream } from '@/type/types';

export const fetchLivestreams = createAsyncAction(
  'livestream/FETCH_LIVESTREAMS_REQUEST',
  'livestream/FETCH_LIVESTREAMS_SUCCESS',
  'livestream/FETCH_LIVESTREAMS_FAILURE',
)<undefined, { livestreams: ILivestream[] }, { error: string }>();

export const searchlivestreams = createAction('livestream/LIVESTREAM_SEARCH')<{
  query: string;
}>();

export type livestreamsActionTypes =
  | ActionType<typeof fetchLivestreams.request>
  | ActionType<typeof fetchLivestreams.success>
  | ActionType<typeof fetchLivestreams.failure>
  | ActionType<typeof searchlivestreams>;
