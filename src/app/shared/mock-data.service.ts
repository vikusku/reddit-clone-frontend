import { Injectable } from "@angular/core";
import { LoginResponse } from "../auth/login/login-response.payload";
import { CommentPayload } from "../comment/comment.payload";
import { CreatePostPayload } from "../post/create-post/create-post.payload";

import { SubredditModel } from "../subreddit/subreddit-model";
import { PostModel } from "./post-model";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  subreddits: Array<SubredditModel> = [
    new SubredditModel('First subreddit', 'This is first subreddit', 1, 5),
    new SubredditModel('Second subreddit second subreddit second subreddit', 'This is second subreddit', 2, 15),
    new SubredditModel('Third subreddit', 'This is third subreddit', 3, 10),
    new SubredditModel('Fourth subreddit', 'This is fourth subreddit', 4, 2),
    new SubredditModel('Fifth subreddit', 'This is fifth subreddit', 5, 20),
    new SubredditModel('Sixth subreddit', 'This is sixth subreddit', 6, 6),
    new SubredditModel('Seventh subreddit', 'This is seventh subreddit', 7, 4),
    new SubredditModel('Eighth subreddit', 'This is eighth subreddit', 8, 17),
    new SubredditModel('Nineth subreddit', 'This is nineth subreddit', 9, 10),
  ]

  posts: Array<PostModel> = [
    this.createPostModel(
      11, 'POST 11 ' +  this.getLongPostTitle(), 'http://google.com', this.getLongText(), 1271, 'test1test1test1',
      'First subreddit', 5, 'almost two years ago', false, false),
    this.createPostModel(
      12, 'POST 12 ' +  this.getLongPostTitle(), 'http://google.com', this.getLongText(), 127, 'test1test1test1',
      'First subreddit', 5, '4 days ago', false, false),
    this.createPostModel(
      13, 'POST 13 ' +  this.getLongPostTitle(), 'http://google.com', this.getLongText(), 27, 'test1test1test1',
      'First subreddit', 5, '4 days ago', false, false),

    this.createPostModel(
      14, 'POST 14 ' +  this.getShortPostTitle(), 'http://google.com', this.getShortText(), 2, 'test1test1test1',
      'First subreddit', 5, 'just now', true, false),
    this.createPostModel(
      15, 'POST 15 ' +  this.getShortPostTitle(), 'http://google.com', this.getShortText(), 127, 'test1test1test1',
      'First subreddit', 5, 'just now', true, false),
    this.createPostModel(
      16, 'POST 16 ' +  this.getShortPostTitle(), 'http://google.com', this.getShortText(), 12799, 'test1test1test1',
      'Second subreddit second subreddit second subreddit', 5, '9 minutes ago', true, false),

    this.createPostModel(
      17, 'POST 17 ' + this.getSuperShortPostTitle(), 'http://google.com', this.getSuperShortText(), 127, 'test1test1test1', 'First subreddit', 5, '3 hours ago', false, true),
    this.createPostModel(
      18, 'POST 18 ' + this.getSuperShortPostTitle(), 'http://google.com', this.getSuperShortText(), 127, 'test1test1test1', 'First subreddit', 5, 'over a year ago', false, true),
    this.createPostModel(
      19, 'POST 19 ' + this.getSuperShortPostTitle(), 'http://google.com', this.getSuperShortText(), 127, 'test1test1test1', 'Second subreddit second subreddit second subreddit', 5, 'about a year ago', false, true),
  ];

  comments: Array<CommentPayload> = [
    new CommentPayload(this.getShortText(), 11, 'someusertestuser', 'almost two years ago'),
    new CommentPayload(this.getShortText(), 11, 'someusertestuser', '15 minutes age'),
    new CommentPayload(this.getSuperShortText(), 11, 'someusertestuser', '15 minutes age'),
    new CommentPayload(this.getSuperShortText(), 11, 'someusertestuser', '15 minutes age'),
    new CommentPayload('The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz', 11, 'someusertestuser', '15 minutes age'),
  ]

  getSubreddits(): Array<SubredditModel> {
    return this.subreddits.slice();
  }

  addSubreddit(subredditModel: SubredditModel): void {
    this.subreddits.push(subredditModel);
  }

  getPagedPosts(pageNo: number, pageSize: number): Array<PostModel> {
    const start = pageNo * pageSize;
    return this.posts.slice(start, start + pageSize);
  }

  getAllMockedPosts(): Array<PostModel> {
    return this.posts.slice();
  }

  addPost(postPayload: CreatePostPayload): void {
    const postId = this.posts[this.posts.length-1].id + 1;
    const post: PostModel = this.createPostModel(
      postId,
      postPayload.postName,
      postPayload.url,
      postPayload.description,
      127,
      'test1test1test1',
      postPayload.subredditName,
      5,
      'just now',
      false,
      true
    );

    this.posts.push(post);
  }

  getPost(id: number): PostModel {
    const result: Array<PostModel> = this.posts.filter(p => p.id === id);

    if (result.length === 0) {
      return null;
    }

    return result[0];
  }

  getCommentsForPost(postId: number): Array<CommentPayload> {
    const reponse = this.comments.slice();

    reponse.forEach(comment => {
      comment.postId = postId;
    });

    return reponse;
  }

  addComment(commentPayload: CommentPayload): void {
    this.comments.push(commentPayload);
  }

  login(): LoginResponse {
    return {
      authenticationToken: '1111',
      username: 'test1test1test1',
      refreshToken: 'qwerty',
      expiresAt: new Date(),
    }
  }

  private createPostModel(
    id: number,
    postName: string,
    url: string,
    description: string,
    voteCount: number,
    userName: string,
    subredditName: string,
    commentCount: number,
    duration: string,
    upVote: boolean,
    downVote: boolean): PostModel{
      const postModel: PostModel = new PostModel();
      postModel.id = id;
      postModel.postName = postName;
      postModel.url = url;
      postModel.description = description;
      postModel.voteCount = voteCount;
      postModel.userName = userName;
      postModel.subredditName = subredditName;
      postModel.commentCount = commentCount;
      postModel.duration = duration;
      postModel.upVote = upVote;
      postModel.downVote = downVote;

      return postModel;
  }

  private getLongText(): string {
    return `
      <h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>

      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      A small river named Duden flows by their place and supplies it with the necessary regelialia.
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the <b>Little Blind Text</b> didn’t listen.</p>

      <p>She packed her seven versalia, put her initial into the belt and made herself on the way.
      When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of <i>Alphabet Village</i> and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then</p>`;
  }

  private getShortText(): string {
    return `
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then</p>`;
  }

  private getSuperShortText(): string {
    return `
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>`;
  }

  private getLongPostTitle(): string {
    return `
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right`;
  }

  private getShortPostTitle(): string {
    return `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there`;
  }

  private getSuperShortPostTitle(): string {
    return 'Far far away, behind the word mountains';
  }
}
