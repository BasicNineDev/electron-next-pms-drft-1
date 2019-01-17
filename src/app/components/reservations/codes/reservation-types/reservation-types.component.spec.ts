import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationTypesComponent } from './reservation-types.component';

describe('ReservationTypesComponent', () => {
  let component: ReservationTypesComponent;
  let fixture: ComponentFixture<ReservationTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
