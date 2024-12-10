import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { decrement, increment, reset } from '../../states/counter/counter.actions';
import { CustomCounterComponent } from '../custom-counter/custom-counter.component';
import { ShowNameComponent } from '../show-name/show-name.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CounterOutputComponent, CounterButtonComponent,CustomCounterComponent,ShowNameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {

  }
  counter: number = 0;
  // onIncrement() {
  //   this.counter++
  //   console.log(this.counter,'ouh');

  // }
  // onDecrement() {
  //   this.counter--
  // }
  // onReset() {
  //   this.counter = 0
  // }
  

}
