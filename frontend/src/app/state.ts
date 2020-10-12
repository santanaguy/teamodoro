import { RouterReducerState, SerializedRouterStateSnapshot } from '@ngrx/router-store';

export interface Timer {
    hours: number;
    minutes: number;
    seconds: number;
    name: string | null;
    baseTimestamp: number;
}

export interface TimerStatus{
    hours:number;
    minutes: number;
    seconds: number;
    timestampUnix: number;
    state: TimerState;
}

export enum TimerState{
    Stopped, Running, Finished
}

export interface State{
    currentTimer:Timer,
    currentTimerStatus: TimerStatus,
    router: RouterReducerState<SerializedRouterStateSnapshot>
}