import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, finalize, map, mergeMap, switchMap, takeUntil, takeWhile, tap, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as TimerActions from '../actions/timer-actions'
import { interval } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, TimerState } from '../state';

@Injectable()
export class TimerEffects {

    timerTick$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TimerActions.startedTimer), //When the timer started
            switchMap(() =>
                interval(1000) //Start a periodic observable
                    .pipe(
                        withLatestFrom(this.store$, (_, state) => state.currentTimerStatus), //Get the latest status
                        takeWhile(status => status?.state != TimerState.Finished), //If it finished, destroy this observable
                        filter(status => status?.state == TimerState.Running), //to account for pausing the timer
                        map(() => TimerActions.timerTick({elapsedMS: 1000})), // Emit the tick action
                    )
            ),
        )
    )

    createdTimer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TimerActions.creatingTimer), //When creating a timer
            tap(() => this.router.navigate(['current-timer'])), //Navigate to this route
            map(x => TimerActions.startedTimer({hours: x.hours, seconds: x.seconds, minutes: x.minutes})) //Emit this action
        ));

    constructor(
        private actions$: Actions,
        private router: Router,
        private store$: Store<State>
    ) { }
}