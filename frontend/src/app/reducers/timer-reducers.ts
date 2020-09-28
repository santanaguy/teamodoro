import { Action, createReducer, on } from '@ngrx/store';
import { State, Timer, TimerStatus } from '../state';
import * as TimerActions from '../actions/timer-actions';

export const timerReducer = createReducer<Timer | undefined>(undefined,
  on(TimerActions.creatingTimer, (state, updated) => ({
    hours: updated.hours,
    minutes: updated.minutes,
    name: updated.name,
    seconds: updated.seconds
  })
  ));

export const timerStatusReducer = createReducer<TimerStatus | undefined>(undefined,
  on(TimerActions.startedTimer, (state, updated) => {
    var timestamp = new Date().setTime(updated.hour * 60 * 60 * 1000 + updated.minute * 60 * 1000 + updated.second * 1000);
    return {
      ...updated,
      timestampUnix: timestamp
    }
  }),
  on(TimerActions.timerTick, (state, updated) => {
    //Really, what can I do if we have a tick but we don't have a timer initialized? Makes no sense.
    if (state == null)
      return state;
    var newDate = new Date(state.timestampUnix);
    newDate.setTime(newDate.getTime() - updated.elapsedMS);
    return  {
      hour: newDate.getUTCHours(),
      minute: newDate.getMinutes(),
      second: newDate.getSeconds(),
      timestampUnix: newDate.getTime()
    }
  })

);
