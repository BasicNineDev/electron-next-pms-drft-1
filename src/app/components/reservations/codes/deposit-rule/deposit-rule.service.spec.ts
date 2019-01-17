import { TestBed } from '@angular/core/testing';

import { DepositRuleService } from './deposit-rule.service';

describe('DepositRuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositRuleService = TestBed.get(DepositRuleService);
    expect(service).toBeTruthy();
  });
});
