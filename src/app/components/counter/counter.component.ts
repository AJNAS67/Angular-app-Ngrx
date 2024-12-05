import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCount } from '../../states/counter/counter.selecter';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import {
  decrement,
  increment,
  reset,
} from '../../states/counter/counter.actions';
import { NumberonlyDirective } from '../../directives/numberonly.directive';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe,NumberonlyDirective],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }
  incriment() {
    this.store.dispatch(increment());
  }
  decriment() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  onKeyPress(event:KeyboardEvent){
    console.log(event);
    
  }
}
