import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalCalculatorComponent } from './paypal-calculator.component';

describe('PaypalCalculatorComponent', () => {
  let component: PaypalCalculatorComponent;
  let fixture: ComponentFixture<PaypalCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
