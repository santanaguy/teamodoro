import { Action, createReducer, on } from '@ngrx/store';
import { State, Timer, TimerState, TimerStatus } from '../state';
import * as TimerActions from '../actions/timer-actions';

export const initialTimer : Timer = { hours: 0, seconds: 0, minutes: 0, name: '', baseTimestamp: 0 };

export const timerReducer = createReducer<Timer>(initialTimer,
  on(TimerActions.creatingTimer, (_, updated) => {
    var timestamp = new Date().setTime(updated.hours * 60 * 60 * 1000 + updated.minutes * 60 * 1000 + updated.seconds * 1000);
    return {
      hours: updated.hours,
      minutes: updated.minutes,
      name: updated.name,
      seconds: updated.seconds,
      baseTimestamp: timestamp
    }
  }
  ));

export const timerStatusReducer = createReducer<TimerStatus>({ hours: 0, minutes: 0, seconds: 0, state: TimerState.Stopped, timestampUnix: 0 },
  on(TimerActions.startedTimer, (_, updated) => {
    var timestamp = new Date().setTime(updated.hours * 60 * 60 * 1000 + updated.minutes * 60 * 1000 + updated.seconds * 1000);
    return {
      ...updated,
      timestampUnix: timestamp,
      state: TimerState.Running
    }
  }),
  on(TimerActions.timerTick, (state, updated) => {
    //Really, what can I do if we have a tick but we don't have a timer initialized? Makes no sense.
    if (state == null)
      return state;
    var newDate = new Date(state.timestampUnix);
    newDate.setTime(newDate.getTime() - updated.elapsedMS);

    return {
      hours: newDate.getUTCHours(),
      minutes: newDate.getMinutes(),
      seconds: newDate.getSeconds(),
      timestampUnix: newDate.getTime(),
      state: newDate.getTime() == 0 ? TimerState.Finished : TimerState.Running
    }
  }),
  on(TimerActions.timerStopped, (state, _) => ({
    state: TimerState.Stopped,
    hours: state?.hours ?? 0,
    minutes: state?.minutes ?? 0,
    seconds: state?.seconds ?? 0,
    timestampUnix: state?.timestampUnix ?? 0
  })),
  on(TimerActions.timerResumed, (state, _) => {
    if (state.state == TimerState.Finished)
      return state;

    return {
      ...state,
      state: TimerState.Running
    }
  }),
  on(TimerActions.timerReset, (state, props) => ({
    hours: props.hours,
    minutes: props.minutes,
    seconds: props.seconds,
    timestampUnix: props.baseTimestamp,
    state: state.state
  }))
);
