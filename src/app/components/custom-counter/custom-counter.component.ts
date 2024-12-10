import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { customValue } from '../../states/counter/counter.actions';

@Component({
  selector: 'app-custom-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css'
})
export class CustomCounterComponent {
  constructor(private store:Store<AppState>){}
  value!:number;
  onSubmit(){
    this.store.dispatch(customValue({value:+this.value}))
    console.log(this.value,'value');
    
  }

}
