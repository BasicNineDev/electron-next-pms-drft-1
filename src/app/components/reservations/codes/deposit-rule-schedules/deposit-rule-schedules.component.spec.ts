import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositRuleSchedulesComponent } from './deposit-rule-schedules.component';

describe('DepositRuleSchedulesComponent', () => {
  let component: DepositRuleSchedulesComponent;
  let fixture: ComponentFixture<DepositRuleSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositRuleSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositRuleSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
