import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersS2Component } from './offers-s2.component';

describe('OffersS2Component', () => {
  let component: OffersS2Component;
  let fixture: ComponentFixture<OffersS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
