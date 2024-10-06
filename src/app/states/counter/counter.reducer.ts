import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { count } from 'rxjs';

export const initialState = 0;
export interface CounterState {
  count: number;
}
export const initialCountState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialCountState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);
