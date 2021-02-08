import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {

  posts: Array<PostModel> = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getTopPosts().subscribe(post => {
      this.posts = post;
    });
  }
}
