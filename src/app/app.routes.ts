import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/posts/post/post.component';
import { AddpostComponent } from './components/posts/addpost/addpost.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'post', component: PostComponent,
        children: [
            { path: 'add', component: AddpostComponent }
        ]
    }
];
