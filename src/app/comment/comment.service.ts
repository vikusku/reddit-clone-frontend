import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';
import { MockDataService } from '../shared/mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private mockDataService: MockDataService) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    // return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-post/' + postId);

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getCommentsForPost(postId));
      subscriber.complete();
    })
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    // return this.httpClient.post<any>('http://localhost:8080/api/comments', commentPayload);

    this.mockDataService.addComment(commentPayload);
    return new Observable(subscriber => {
      subscriber.complete();
    })
  }

  getAllCommentsByUser(name: string): Observable<Array<CommentPayload>> {
    // return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-user/' + name);

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getCommentsForPost(11));
      subscriber.complete();
    })
  }
}
