import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFullDescriptDetailContComponent } from './view-full-descript-detail-cont.component';

describe('ViewFullDescriptDetailContComponent', () => {
  let component: ViewFullDescriptDetailContComponent;
  let fixture: ComponentFixture<ViewFullDescriptDetailContComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFullDescriptDetailContComponent]
    });
    fixture = TestBed.createComponent(ViewFullDescriptDetailContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
