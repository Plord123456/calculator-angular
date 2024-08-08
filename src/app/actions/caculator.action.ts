import { createAction, props } from '@ngrx/store';

export const addNumber = createAction('[Calculator] Add Number', props<{ number: string }>());
export const clear = createAction('[Calculator] Clear');
export const add = createAction('[Calculator] Add');
export const subtract = createAction('[Calculator] Subtract');
export const multiply = createAction('[Calculator] Multiply');
export const divide = createAction('[Calculator] Divide');
export const calculate = createAction('[Calculator] Calculate');
export const setOperator = createAction('[Calculator] Set Operator', props<{ operator: string }>());
