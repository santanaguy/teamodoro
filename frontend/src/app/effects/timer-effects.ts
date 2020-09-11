import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as TimerActions from '../actions/timer-actions'

@Injectable()
export class TimerEffects {

    createdTimer$ = createEffect(() => 
        this.actions$.pipe(
            ofType(TimerActions.creatingTimer),
            tap(() => this.router.navigate(['no-timer']))),
        { dispatch: false });

    constructor(
        private actions$: Actions,
        private router: Router,
    ) { }
}