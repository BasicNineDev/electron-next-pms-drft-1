import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseKeepingAttendentsComponent } from './house-keeping-attendents.component';

describe('HouseKeepingAttendentsComponent', () => {
  let component: HouseKeepingAttendentsComponent;
  let fixture: ComponentFixture<HouseKeepingAttendentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseKeepingAttendentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseKeepingAttendentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
