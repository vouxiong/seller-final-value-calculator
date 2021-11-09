import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayCalculatorComponent } from './ebay-calculator.component';

describe('EbayCalculatorComponent', () => {
  let component: EbayCalculatorComponent;
  let fixture: ComponentFixture<EbayCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbayCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
