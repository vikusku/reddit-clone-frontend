import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private mockDataService: MockDataService) { }

  getAllPosts(): Observable<Array<PostModel>> {
    // return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts');

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getAllPosts());
      subscriber.complete();
    });
  }

  getHotPosts(): Observable<Array<PostModel>> {
    // return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/hot');

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getAllPosts());
      subscriber.complete();
    });
  }

  getNewPosts(): Observable<Array<PostModel>> {
    // return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/new');

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getAllPosts());
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
        subscriber.next(this.mockDataService.getAllPosts());
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
