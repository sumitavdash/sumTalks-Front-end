import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDescriptionComponent } from './full-description.component';

describe('FullDescriptionComponent', () => {
  let component: FullDescriptionComponent;
  let fixture: ComponentFixture<FullDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullDescriptionComponent]
    });
    fixture = TestBed.createComponent(FullDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
