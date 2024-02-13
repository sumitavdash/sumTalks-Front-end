import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewDetailedconComponent } from './user-view-detailedcon.component';

describe('UserViewDetailedconComponent', () => {
  let component: UserViewDetailedconComponent;
  let fixture: ComponentFixture<UserViewDetailedconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewDetailedconComponent]
    });
    fixture = TestBed.createComponent(UserViewDetailedconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
