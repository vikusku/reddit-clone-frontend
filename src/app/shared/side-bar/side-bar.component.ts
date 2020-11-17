import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToCreatePost(): void {
    console.log("goToCreatePost")
  }

  goToCreateSubreddit(): void {
    console.log("goToCreateSubreddit")
  }

}