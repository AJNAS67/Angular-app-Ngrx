import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { Observable } from 'rxjs';
import { selectCount } from '../../states/counter/counter.selecter';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent  implements OnInit{
  counter1!:number;
  count$:Observable<number>

  
  constructor(private store:Store<AppState>){
   this.count$= this.store.select(selectCount)

  }
  ngOnInit(): void {
this.store.select('counter').subscribe((data)=>this.counter1=data.count)
  }
@Input() counter!:number
}
