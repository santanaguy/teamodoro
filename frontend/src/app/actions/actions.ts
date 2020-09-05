import { createAction, props } from '@ngrx/store';

export const creatingTimer = createAction(
  '[Create Timer] Creating',
  props<{ hours:number, minutes:number, seconds:number, name:string }>()
);