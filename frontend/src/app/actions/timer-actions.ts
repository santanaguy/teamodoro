import { createAction, props } from '@ngrx/store';
import { Timer } from '../state';

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
  hours:number,
  minutes:number,
  seconds:number
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

export const timerResumed = createAction(
  '[Timer] Resume'
);

export const timerReset = createAction(
  '[Timer] Reset', props<Timer>()
);
