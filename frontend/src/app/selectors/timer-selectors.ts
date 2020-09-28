import { createSelector } from "@ngrx/store";
import {State, Timer, TimerStatus} from "../state";
export const selectCurrentTimer = (state: State) => state.currentTimerStatus;
 
export const selectCurrentTimerStatus = createSelector(
  selectCurrentTimer,
  (state: TimerStatus | undefined) => state
);