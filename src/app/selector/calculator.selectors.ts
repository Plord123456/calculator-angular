import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/index';
import { CalculatorState } from '../reducers/calculator.reducer';

// Feature Selector
export const selectCalculatorState = createFeatureSelector<State, CalculatorState>('calculator');

// Selector to get current number
export const selectCurrentNumber = createSelector(
  selectCalculatorState,
  (state: CalculatorState) => state.currentNumber
);
