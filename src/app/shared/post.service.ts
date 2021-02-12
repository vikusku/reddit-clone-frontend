import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { MockDataService } from './mock-data.service';
import { WindowScrollService } from './window-scroll.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private windowScrollService: WindowScrollService,
    private mockDataService: MockDataService) { }

  getHotPosts(pageNo: number, pageSize: number): Observable<Array<PostModel>> {
    // return this.http.get<Array<PostModel>>(
    //   'http://localhost:8080/api/posts/hot',
    //   {
    //     params: new HttpParams()
    //       .append('pageNo', pageNo.toString())
    //       .append('pageSize', pageSize.toString())
    //   });

    return new Observable(subscriber => {
      if (pageNo === 0) {
        subscriber.next(this.mockDataService.getPagedPosts(pageNo, pageSize));
        subscriber.complete();
      } else {
        setTimeout(()=> {
          subscriber.next(this.mockDataService.getPagedPosts(pageNo, pageSize));
          subscriber.complete();
        }, 1000)
      }
    });
  }

  getTopPosts(): Observable<Array<PostModel>> {
    // return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/top');

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getAllMockedPosts());
      subscriber.complete();
    });
  }

  getNewPosts(): Observable<Array<PostModel>> {
    // return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/new');

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getAllMockedPosts());
      subscriber.complete();
    });
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    // return this.http.post('http://localhost:8080/api/posts', postPayload);

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.addPost(postPayload));
      subscriber.complete();
    });
  }

  getPost(id: number): Observable<PostModel> {
    // return this.http.get<PostModel>('http://localhost:8080/api/posts/' + id);

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getPost(id));
      subscriber.complete();
    });
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    // return this.http.get<PostModel[]>('http://localhost:8080/api/posts/by-user/' + name);

    if (name === 'test1test1test1') {
      return new Observable(subscriber => {
        subscriber.next(this.mockDataService.getAllMockedPosts());
        subscriber.complete();
      });
    } else {
      return new Observable(subscriber => {
        subscriber.next([]);
        subscriber.complete();
      });
    }

  }

}
