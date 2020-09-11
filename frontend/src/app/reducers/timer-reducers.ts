import { Action, createReducer, on } from '@ngrx/store';
import { State, Timer } from '../state';
import * as TimerActions from '../actions/timer-actions';

export const creatingTimerReducer = createReducer<Timer | undefined>(undefined,
  on(TimerActions.creatingTimer, (state, updated) => ({
    hours: updated.hours,
    minutes: updated.minutes,
    name: updated.name,
    seconds: updated.seconds
  }))
);
