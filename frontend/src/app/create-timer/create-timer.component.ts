import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Store } from '@ngrx/store';
import {State } from '../state';
import {creatingTimer} from '../actions/timer-actions';

@Component({
  selector: 'app-create-timer',
  templateUrl: 'create-timer.component.html',
  styles: [
  ]
})
export class CreateTimerComponent implements OnInit {
  seconds: FormControl;
  minutes: FormControl;
  hours: FormControl;
  formGroup: FormGroup;
  name: FormControl;

  constructor(private store: Store<State>) {
    this.hours = new FormControl('00', [Validators.required, Validators.min(0), Validators.pattern('\\d*')]);
    this.minutes = new FormControl('30' , [Validators.required, Validators.min(0), Validators.pattern('\\d*')]);
    this.seconds = new FormControl('00', [Validators.required, Validators.min(0), Validators.pattern('\\d*')]);
    this.name = new FormControl(null, [Validators.required]);
    this.formGroup = new FormGroup({seconds:this.seconds, minutes:this.minutes, hours:this.hours, name:this.name});
    
  }

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')){
      return "this value is required";
    }
    if (control.hasError('min')){
      return "at least 0";
    }
    if (control.hasError('pattern')){
      console.log(control.errors)
      return "only digits!"
    }

    return null;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.store.dispatch(creatingTimer({hours: this.hours.value, minutes: this.minutes.value, seconds: this.seconds.value, name: this.name.value}));
  }
}
