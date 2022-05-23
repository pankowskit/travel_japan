import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersS3Component } from './offers-s3.component';

describe('OffersS3Component', () => {
  let component: OffersS3Component;
  let fixture: ComponentFixture<OffersS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
