import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-hot-posts',
  templateUrl: './hot-posts.component.html',
  styleUrls: ['./hot-posts.component.css']
})
export class HotPostsComponent implements OnInit {

  pageNo: number = 0;
  pageSize: number = 5;
  posts: Array<PostModel> = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    console.log('document.body.offsetHeight ' + document.body.offsetHeight);
    console.log('window.innerHeight ' + window.innerHeight);

    this.postService.getHotPosts(this.pageNo, this.pageSize)
      .subscribe(posts => {
        this.posts = posts;
        this.pageNo++;
      });
  }

  onScroll(): void {
    console.log('hello')
    console.log(window.scrollY);

    if (window.innerHeight + window.scrollY >= this.getScrollHeight()) {
      console.log('bottom');
    }
  }

  getScrollHeight(): number {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  loadMore(): void {
    this.postService.getHotPosts(this.pageNo, this.pageSize)
      .subscribe(posts => {
        this.posts = [...this.posts, ...posts];
        this.pageNo++;

        console.log(this.posts);
      });
  }
}
