import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.css']
})
export class NewPostsComponent implements OnInit {

  posts: Array<PostModel> = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getNewPosts().subscribe(post => {
      this.posts = post;
    });
  }
}
