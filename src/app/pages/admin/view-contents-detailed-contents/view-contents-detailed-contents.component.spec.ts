import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentsDetailedContentsComponent } from './view-contents-detailed-contents.component';

describe('ViewContentsDetailedContentsComponent', () => {
  let component: ViewContentsDetailedContentsComponent;
  let fixture: ComponentFixture<ViewContentsDetailedContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContentsDetailedContentsComponent]
    });
    fixture = TestBed.createComponent(ViewContentsDetailedContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
