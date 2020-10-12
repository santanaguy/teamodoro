import { createSelector } from "@ngrx/store";
import {State, Timer, TimerState, TimerStatus} from "../state";
export const projectCurrentTimerStatus = (state: State) => state.currentTimerStatus;
export const projectCurrentTimer = (state: State) => state.currentTimer;
 
export const selectRunningTimer = createSelector(
  projectCurrentTimerStatus,
  projectCurrentTimer,
  (currentTimerStatus, currentTimer) => ({
    hour: currentTimerStatus?.hours,
    minute: currentTimerStatus?.minutes,
    second: currentTimerStatus?.seconds,
    name: currentTimer?.name ?? "<no name>",
    state: currentTimerStatus?.state
  })
);

export const selectCreatedTimer = createSelector(
  projectCurrentTimer,
  (x)=> x);