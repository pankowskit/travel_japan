import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersS1Component } from './offers-s1.component';

describe('OffersS1Component', () => {
  let component: OffersS1Component;
  let fixture: ComponentFixture<OffersS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
