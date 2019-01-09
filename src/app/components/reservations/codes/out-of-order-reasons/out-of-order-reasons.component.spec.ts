import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfOrderReasonsComponent } from './out-of-order-reasons.component';

describe('OutOfOrderReasonsComponent', () => {
  let component: OutOfOrderReasonsComponent;
  let fixture: ComponentFixture<OutOfOrderReasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfOrderReasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfOrderReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
