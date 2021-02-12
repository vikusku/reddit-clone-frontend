import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugPostTileComponent } from './debug-post-tile.component';

describe('DebugPostTileComponent', () => {
  let component: DebugPostTileComponent;
  let fixture: ComponentFixture<DebugPostTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugPostTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugPostTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
