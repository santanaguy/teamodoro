import { createAction, props } from '@ngrx/store';

type CreateTimerProps = {
  hours: number;
  minutes: number;
  seconds: number;
  name: string;
};

export const creatingTimer = createAction(
  '[Create Timer] Creating',
  props<CreateTimerProps>()
);