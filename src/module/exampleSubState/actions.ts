import { createAction, ActionType } from 'typesafe-actions';

export const emptyAction = createAction('nodes/ADD_TICKET')<{
  id: string;
}>();

export type emptyActionTypes = ActionType<typeof emptyAction>;
