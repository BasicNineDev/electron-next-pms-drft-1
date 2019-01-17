import { TestBed } from '@angular/core/testing';

import { DepositRuleSchedulesService } from './deposit-rule-schedules.service';

describe('DepositRuleSchedulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositRuleSchedulesService = TestBed.get(DepositRuleSchedulesService);
    expect(service).toBeTruthy();
  });
});
