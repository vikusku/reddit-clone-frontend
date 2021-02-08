import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubredditModel } from './subreddit-model';
import { MockDataService } from '../shared/mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  constructor(private http: HttpClient, private mockDataService: MockDataService) { }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    // return this.http.get<Array<SubredditModel>>('http://localhost:8080/api/subreddits');

    return new Observable(subscriber => {
      subscriber.next(this.mockDataService.getSubreddits());
      subscriber.complete();
    })
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    // return this.http.post<SubredditModel>('http://localhost:8080/api/subreddits',
    //   subredditModel);

    this.mockDataService.addSubreddit(subredditModel);
    return new Observable(subscriber => {
      subscriber.next(subredditModel);
      subscriber.complete();
    })
  }
}
