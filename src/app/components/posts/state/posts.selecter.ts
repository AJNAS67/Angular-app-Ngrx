import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostSate } from "./posts.state";

const getPostState=createFeatureSelector<PostSate>('posts');
export const getPosts=createSelector(getPostState,(state)=>{
    return state.posts
})