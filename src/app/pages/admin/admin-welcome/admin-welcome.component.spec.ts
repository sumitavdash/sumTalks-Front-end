import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWelcomeComponent } from './admin-welcome.component';

describe('AdminWelcomeComponent', () => {
  let component: AdminWelcomeComponent;
  let fixture: ComponentFixture<AdminWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWelcomeComponent]
    });
    fixture = TestBed.createComponent(AdminWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
