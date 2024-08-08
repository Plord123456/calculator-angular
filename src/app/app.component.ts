import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgForOf } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgForOf,
    CalculatorComponent,
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
}




