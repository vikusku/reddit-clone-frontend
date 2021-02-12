import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DebugPostModel } from "./debug-post.modle";

@Injectable({
  providedIn: 'root'
})
export class DebugPostsService {

  posts: Array<DebugPostModel> = [
    new DebugPostModel('one', 'one descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('two', 'two descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('three', 'three descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('four', 'four descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('five', 'five descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('six', 'six descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('seven', 'seven descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('eight', 'eight descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('nine', 'nine descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('ten', 'ten descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
    new DebugPostModel('eleven', 'eleven descr', "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"),
  ]

  getPosts(pageNo: number, pageSize: number): Observable<Array<DebugPostModel>> {
    return new Observable(subscriber => {
      if (pageNo === 0) {
        subscriber.next(this.getPagedPosts(pageNo, pageSize));
        subscriber.complete();
      } else {
        setTimeout(()=> {
          subscriber.next(this.getPagedPosts(pageNo, pageSize));
          subscriber.complete();
        }, 1000)
      }
    });

    // THIS VERSION WORKS
    // return new Observable(subscriber => {
    //   subscriber.next(this.getPagedPosts(pageNo, pageSize));
    //   subscriber.complete();
    // })
  }

  getPagedPosts(pageNo: number, pageSize: number): Array<DebugPostModel> {
    const start = pageNo * pageSize;
    return this.posts.slice(start, start + pageSize);
  }
}
