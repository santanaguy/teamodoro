import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../state';
import * as timerSelectors from '../selectors/timer-selectors';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-current-timer',
  templateUrl: 'current-timer.component.html',
  styles: [
  ]
})
export class CurrentTimerComponent implements OnInit {
  currentHour: number | undefined = 0;
  timerStatus$: Subscription;
  currentMinute: number | undefined;
  currentSecond: number | undefined;

  constructor(private store: Store<State>) {
    this.timerStatus$ = this.store.pipe(select(timerSelectors.selectCurrentTimerStatus))
      .subscribe(x => {
        this.currentHour = x?.hour;
        this.currentMinute = x?.minute;
        this.currentSecond = x?.second;
      })
  }

  ngOnInit(): void {

  }

}
