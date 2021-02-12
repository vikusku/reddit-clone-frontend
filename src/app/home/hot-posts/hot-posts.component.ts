import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';
import { WindowScrollService } from 'src/app/shared/window-scroll.service';

@Component({
  selector: 'app-hot-posts',
  templateUrl: './hot-posts.component.html',
  styleUrls: ['./hot-posts.component.css']
})
export class HotPostsComponent implements OnInit, OnDestroy {

  pageNo: number = 0;
  pageSize: number = 3;
  posts: Array<PostModel> = [];
  scrollSubscription: Subscription;

  constructor(private postService: PostService, private windowScrollService: WindowScrollService) {}

  ngOnInit(): void {
    this.postService.getHotPosts(this.pageNo, this.pageSize)
      .subscribe(posts => {
        this.posts = posts;
        this.pageNo++;
      });

    // this.windowScrollService.windowPosition$.subscribe(updatedPosition => {
    //   let scrollHeight = this.windowScrollService.getScrollHeight();
    //   if (updatedPosition >= scrollHeight && this.pageNo > 0) {
    //     console.log('Loading page ' + this.pageNo);
    //     this.postService.getHotPosts(this.pageNo, this.pageSize)
    //       .subscribe(posts => {
    //         console.log('Loaded page ' + posts);
    //         this.posts.push(...posts);
    //         this.pageNo++;
    //       });
    //   }
    // })
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
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
