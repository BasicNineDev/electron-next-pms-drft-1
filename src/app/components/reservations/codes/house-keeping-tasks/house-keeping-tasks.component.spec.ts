import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseKeepingTasksComponent } from './house-keeping-tasks.component';

describe('HouseKeepingTasksComponent', () => {

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseKeepingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
