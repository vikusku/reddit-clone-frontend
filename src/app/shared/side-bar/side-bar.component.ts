import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreatePost(): void {
    console.log("goToCreatePost");
    this.router.navigateByUrl('/create-post');
  }

  goToCreateSubreddit(): void {
    console.log("goToCreateSubreddit");
    this.router.navigateByUrl('/create-subreddit');
  }

}