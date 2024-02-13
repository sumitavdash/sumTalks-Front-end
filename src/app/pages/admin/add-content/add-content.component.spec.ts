import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentComponent } from './add-content.component';

describe('AddContentComponent', () => {
  let component: AddContentComponent;
  let fixture: ComponentFixture<AddContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContentComponent]
    });
    fixture = TestBed.createComponent(AddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
