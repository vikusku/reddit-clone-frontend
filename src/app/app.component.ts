import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import { WindowScrollService } from './shared/window-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private windowScrollService: WindowScrollService) {}

  @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
    this.windowScrollService.updateWindowPosition(e.target['scrollingElement'].scrollTop);
  }
}
