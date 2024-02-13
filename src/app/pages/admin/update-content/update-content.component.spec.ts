import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContentComponent } from './update-content.component';

describe('UpdateContentComponent', () => {
  let component: UpdateContentComponent;
  let fixture: ComponentFixture<UpdateContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateContentComponent]
    });
    fixture = TestBed.createComponent(UpdateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
