import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailedContentsComponent } from './update-detailed-contents.component';

describe('UpdateDetailedContentsComponent', () => {
  let component: UpdateDetailedContentsComponent;
  let fixture: ComponentFixture<UpdateDetailedContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDetailedContentsComponent]
    });
    fixture = TestBed.createComponent(UpdateDetailedContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
