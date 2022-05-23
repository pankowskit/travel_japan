import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsS1Component } from './travels-s1.component';

describe('TravelsS1Component', () => {
  let component: TravelsS1Component;
  let fixture: ComponentFixture<TravelsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
