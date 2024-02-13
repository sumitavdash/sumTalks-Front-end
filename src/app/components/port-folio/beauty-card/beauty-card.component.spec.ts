import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyCardComponent } from './beauty-card.component';

describe('BeautyCardComponent', () => {
  let component: BeautyCardComponent;
  let fixture: ComponentFixture<BeautyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyCardComponent]
    });
    fixture = TestBed.createComponent(BeautyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
