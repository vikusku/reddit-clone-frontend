import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugDuckComponent } from './debug-duck.component';

describe('DebugDuckComponent', () => {
  let component: DebugDuckComponent;
  let fixture: ComponentFixture<DebugDuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugDuckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugDuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
