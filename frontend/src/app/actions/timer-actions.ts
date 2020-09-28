import { createAction, props } from '@ngrx/store';

type CreateTimerProps = {
  hours: number;
  minutes: number;
  seconds: number;
  name: string;
};

type TimerTickProps = {
  elapsedMS:number
};

type TimerStartProps = {
  hour:number,
  minute:number,
  second:number
}

export const creatingTimer = createAction(
  '[Timer] Creating',
  props<CreateTimerProps>()
);

export const startedTimer = createAction(
  '[Timer] Started', props<TimerStartProps>()
);

export const timerTick = createAction(
  '[Timer] Tick',
  props<TimerTickProps>()
);

export const timerStopped = createAction(
  '[Timer] Stop'
);