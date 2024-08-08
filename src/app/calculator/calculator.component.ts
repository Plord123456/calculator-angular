import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CalculatorActions from '../actions/caculator.action';
import { State } from '../reducers/index';
import { selectCurrentNumber } from '../selector/calculator.selectors';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  standalone: true,
  imports: [
    CommonModule, // Include CommonModule here
    // Other imports as needed
  ],
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  currentNumber$: Observable<string>;

  constructor(private store: Store<State>) {
    this.currentNumber$ = store.select(selectCurrentNumber);
  }

  addNumber(number: string) {
    this.store.dispatch(CalculatorActions.addNumber({ number }));
  }

  clear() {
    this.store.dispatch(CalculatorActions.clear());
  }

  add() {
    this.store.dispatch(CalculatorActions.add());
  }

  subtract() {
    this.store.dispatch(CalculatorActions.subtract());
  }

  multiply() {
    this.store.dispatch(CalculatorActions.multiply());
  }

  divide() {
    this.store.dispatch(CalculatorActions.divide());
  }

  calculate() {
    this.store.dispatch(CalculatorActions.calculate());
  }
}
