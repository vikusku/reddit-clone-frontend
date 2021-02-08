import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PostTileComponent } from "./post-tile/post-tile.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { SubredditSideBarComponent } from "./subreddit-side-bar/subreddit-side-bar.component";
import { VoteButtonComponent } from "./vote-button/vote-button.component";

@NgModule({
  declarations: [
    PostTileComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    VoteButtonComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    PostTileComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    VoteButtonComponent,
    CommonModule
  ]
})
export class SharedModule{}
