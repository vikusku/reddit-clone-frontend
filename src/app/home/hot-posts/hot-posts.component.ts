import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-hot-posts',
  templateUrl: './hot-posts.component.html',
  styleUrls: ['./hot-posts.component.css']
})
export class HotPostsComponent implements OnInit {

  posts: Array<PostModel> = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getHotPosts().subscribe(post => {
      this.posts = post;
    });
  }
}
