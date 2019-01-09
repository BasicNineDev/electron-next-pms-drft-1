import { TestBed } from '@angular/core/testing';

import { OutOfOrderReasonsService } from './out-of-order-reasons.service';

describe('OutOfOrderReasonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutOfOrderReasonsService = TestBed.get(OutOfOrderReasonsService);
    expect(service).toBeTruthy();
  });
});
