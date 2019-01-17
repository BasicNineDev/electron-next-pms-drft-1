import { TestBed } from '@angular/core/testing';

import { ReservationTypesService } from './reservation-types.service';

describe('ReservationTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservationTypesService = TestBed.get(ReservationTypesService);
    expect(service).toBeTruthy();
  });
});
