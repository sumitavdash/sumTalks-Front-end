import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewFullDescriptionComponent } from './user-view-full-description.component';

describe('UserViewFullDescriptionComponent', () => {
  let component: UserViewFullDescriptionComponent;
  let fixture: ComponentFixture<UserViewFullDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewFullDescriptionComponent]
    });
    fixture = TestBed.createComponent(UserViewFullDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
