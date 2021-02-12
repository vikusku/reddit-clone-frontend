import { Component, HostListener, OnInit } from '@angular/core';
import { WindowScrollService } from '../shared/window-scroll.service';
import { DebugPostModel } from './debug-post.modle';
import { DebugPostsService } from './debug-posts.service';

@Component({
  selector: 'app-debug-duck',
  templateUrl: './debug-duck.component.html',
  styleUrls: ['./debug-duck.component.css']
})
export class DebugDuckComponent implements OnInit {
  pageNo: number = 0;
  pageSize: number = 3;
  posts: DebugPostModel[] = [];

  constructor(private debugDuckService: DebugPostsService, private windowScrollService: WindowScrollService) { }

  @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
    this.windowScrollService.updateWindowPosition(e.target['scrollingElement'].scrollTop);
  }

  ngOnInit(): void {
    this.debugDuckService.getPosts(this.pageNo, this.pageSize).subscribe(posts => {
      this.posts = posts;
      this.pageNo++;
    })

    this.windowScrollService.windowPosition$.subscribe(updatedPosition => {
      let scrollHeight = this.windowScrollService.getScrollHeight();
      if (updatedPosition >= scrollHeight && this.pageNo > 0) {
        console.log('BOTTOM');

        // this.postsService.getPosts(this.pageNo, this.pageSize).subscribe(posts => {
        //   this.posts.push(...posts);
        //   this.pageNo++;
        // })
      }
    })
  }

  loadMore(): void {
    this.debugDuckService.getPosts(this.pageNo, this.pageSize).subscribe(posts => {
      this.posts.push(...posts);
      this.pageNo++;
    })
  }

}
