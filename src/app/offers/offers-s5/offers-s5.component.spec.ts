import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersS5Component } from './offers-s5.component';

describe('OffersS5Component', () => {
  let component: OffersS5Component;
  let fixture: ComponentFixture<OffersS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersS5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
