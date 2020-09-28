import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { State } from './state';
import * as TimerReducers from './reducers/timer-reducers';

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
    currentTimerStatus: TimerReducers.timerStatusReducer,
    currentTimer: TimerReducers.timerReducer
};