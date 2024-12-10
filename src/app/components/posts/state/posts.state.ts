import { Post } from "../../../models/posts.model"

export const initialState:PostSate={
    posts:[
        {id:'1',title:'sample title',description:'sample dec'},
        {id:'2',title:'sample title',description:'sample dec'}

    ]
}
export interface PostSate{
    posts:Post[]
}