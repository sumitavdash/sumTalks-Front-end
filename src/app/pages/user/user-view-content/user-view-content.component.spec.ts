import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewContentComponent } from './user-view-content.component';

describe('UserViewContentComponent', () => {
  let component: UserViewContentComponent;
  let fixture: ComponentFixture<UserViewContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewContentComponent]
    });
    fixture = TestBed.createComponent(UserViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
