import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { calculatorReducer, CalculatorState } from './calculator.reducer';

export interface State {
  calculator: CalculatorState;
}

export const reducers: ActionReducerMap<State> = {
  calculator: calculatorReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
