import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State, Timer, TimerState } from '../state';
import * as timerSelectors from '../selectors/timer-selectors';
import * as timerActions from '../actions/timer-actions';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { initialTimer } from '../reducers/timer-reducers';

@Component({
  selector: 'app-current-timer',
  templateUrl: 'current-timer.component.html',
  styles: [
  ]
})
export class CurrentTimerComponent implements OnInit {
  name: string | null | undefined;
  timerStatus$: Observable<{ hour: number | undefined; minute: number | undefined; second: number | undefined; name: string; state: TimerState | undefined; }>;
  statusDescription$: Observable<string>;
  timer: Timer = initialTimer;
  
  constructor(private store: Store<State>) {
    this.timerStatus$ = this.store.pipe(select(timerSelectors.selectRunningTimer));
    this.statusDescription$ = this.store.pipe(select(timerSelectors.selectRunningTimer), map(x=> TimerState[x.state ?? 0]));
    this.store.pipe(select(timerSelectors.selectCreatedTimer))
      .subscribe(x=> this.timer = x);
  }

  ngOnInit(): void {

  }

  pause(){
    this.store.dispatch(timerActions.timerStopped());
  }

  resume(){
    this.store.dispatch(timerActions.timerResumed());
  }

  reset(){
    this.store.dispatch(timerActions.timerReset(this.timer ?? {hours:0, minutes:0, seconds:0,name:''}));
  }

}
