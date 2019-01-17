import { TestBed } from '@angular/core/testing';

import { HouseKeepingTasksService } from './house-keeping-tasks.service';

describe('HouseKeepingTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseKeepingTasksService = TestBed.get(HouseKeepingTasksService);
    expect(service).toBeTruthy();
  });
});
