import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersS4Component } from './offers-s4.component';

describe('OffersS4Component', () => {
  let component: OffersS4Component;
  let fixture: ComponentFixture<OffersS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
