import { Component, Input, OnInit } from '@angular/core';
import { DebugPostModel } from '../debug-post.modle';

@Component({
  selector: 'app-debug-post-tile',
  templateUrl: './debug-post-tile.component.html',
  styleUrls: ['./debug-post-tile.component.css']
})
export class DebugPostTileComponent implements OnInit {
  @Input() post: DebugPostModel;

  constructor() { }

  ngOnInit(): void {
  }

}
