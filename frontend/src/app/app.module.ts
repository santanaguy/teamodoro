import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { CreateTimerComponent } from './create-timer/create-timer.component';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomSerializer } from './reducers/ngrx-router/custom-route-serializer'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NoTimerComponent } from './no-timer/no-timer.component';
import { MatCardModule, MatCard } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {reducers} from './index';
import * as Effects from './effects/timer-effects';

@NgModule({
  declarations: [
    AppComponent,
    CreateTimerComponent,
    NoTimerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([Effects.TimerEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,

    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
