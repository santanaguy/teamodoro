import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CreateTimerComponent } from './create-timer/create-timer.component';
import { CurrentTimerComponent } from './current-timer/current-timer.component';
import { NoTimerComponent } from './no-timer/no-timer.component';

export const routes: Routes = [
  { path: 'no-timer', component: NoTimerComponent },
  { path: 'create-timer', component: CreateTimerComponent },
  { path: 'current-timer', component: CurrentTimerComponent },
  { path: '', redirectTo: '/no-timer', pathMatch: 'full' }
];

@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }
