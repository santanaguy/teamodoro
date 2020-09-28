import { RouterReducerState, SerializedRouterStateSnapshot } from '@ngrx/router-store';

export interface Timer {
    hours: number;
    minutes: number;
    seconds: number;
    name: string | null;
}

export interface TimerStatus{
    hour:number;
    minute: number;
    second: number;
    timestampUnix: number;
}

export interface State{
    currentTimer:Timer | undefined,
    currentTimerStatus: TimerStatus | undefined,
    router: RouterReducerState<SerializedRouterStateSnapshot>
}