import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { decrement, increment, reset } from '../../states/counter/counter.actions';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
@Output() increment=new EventEmitter<void>();
@Output() decrement=new EventEmitter<void>();
@Output()reset=new EventEmitter<void>()
constructor(private store:Store<AppState>){}
onIncrement(){
  // this.increment.emit()
  this.store.dispatch(increment())
}
onDecrement(){
  // this.decrement.emit()
  this.store.dispatch(decrement())
}
onReset(){
  // this.reset.emit()
  this.store.dispatch(reset())

}
}
