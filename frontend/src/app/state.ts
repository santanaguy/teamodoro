import { RouterReducerState, SerializedRouterStateSnapshot } from '@ngrx/router-store';

export interface Timer {
    hours: number;
    minutes: number;
    seconds: number;
    name: string | null;
}

export interface State{
    currentTimer:Timer | undefined,
    router: RouterReducerState<SerializedRouterStateSnapshot>
}