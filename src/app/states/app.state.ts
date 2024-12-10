import { PostReducer } from "../components/posts/state/posts.reducer";
import { PostSate } from "../components/posts/state/posts.state";
import { counterReducer, CounterState } from "./counter/counter.reducer";

export interface AppState{
    counter:CounterState,
    posts:PostSate
}
export const appReducer={
    counter:counterReducer,
    posts:PostReducer
}