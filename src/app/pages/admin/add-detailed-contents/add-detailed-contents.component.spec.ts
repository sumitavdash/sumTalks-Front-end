import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailedContentsComponent } from './add-detailed-contents.component';

describe('AddDetailedContentsComponent', () => {
  let component: AddDetailedContentsComponent;
  let fixture: ComponentFixture<AddDetailedContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDetailedContentsComponent]
    });
    fixture = TestBed.createComponent(AddDetailedContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
