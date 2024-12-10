import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/app.state';
import { Observable } from 'rxjs';
import { Post } from '../../../models/posts.model';
import { getPosts } from '../state/posts.selecter';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AsyncPipe,RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts$!:Observable<Post[]>
  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
    this.posts$=this.store.select(getPosts)
    
  }

}
