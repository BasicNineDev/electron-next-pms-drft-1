import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomConditionsComponent } from './room-conditions.component';

describe('RoomConditionsComponent', () => {
  let component: RoomConditionsComponent;
  let fixture: ComponentFixture<RoomConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
