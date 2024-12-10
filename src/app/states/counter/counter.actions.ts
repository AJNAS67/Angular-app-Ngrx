import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');// name should be unique //reset
// no need like this [Counter Component] Reset need only reset
export const customValue=createAction('customValueAdd',props<{value:number}>())
export const changeName=createAction('changeName',props<{value:string}>())