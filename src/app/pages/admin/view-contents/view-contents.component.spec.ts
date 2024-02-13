import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentsComponent } from './view-contents.component';

describe('ViewContentsComponent', () => {
  let component: ViewContentsComponent;
  let fixture: ComponentFixture<ViewContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContentsComponent]
    });
    fixture = TestBed.createComponent(ViewContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
