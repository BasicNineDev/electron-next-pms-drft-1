import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountReasonsComponent } from './discount-reasons.component';

describe('DiscountReasonsComponent', () => {
  let component: DiscountReasonsComponent;
  let fixture: ComponentFixture<DiscountReasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountReasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
