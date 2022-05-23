import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsSidebarComponent } from './travels-sidebar.component';

describe('TravelsSidebarComponent', () => {
  let component: TravelsSidebarComponent;
  let fixture: ComponentFixture<TravelsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
