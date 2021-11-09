import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EbayCategoryEnum } from '../shared/enums/EbayCategoryEnum';
import { Fees } from '../shared/fees/fees';
import { IFinalValue } from '../shared/interfaces/IFinalValue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'seller-finalvalue-calculator';



  // paypal....
  public payPal = {
    profit: 0,
    fees: 0
  };

  //Form Groups...
  public ebayForm: any;
  public payPalForm: any;
  public tcgPlayerForm: any;
  public mecariForm: any;

  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() { 

    this.createForms();

    
  }

  /**
   * createForms
   * */
  public createForms() {
    this.ebayForm = this.fb.group({
      soldPrice: ['', Validators.pattern("^[0-9]*$")],
      shippingCost: [''],
      shippingCostBuyer: [''],
      salesTax: [''],
      category: [EbayCategoryEnum.mostCategories]
    });

    this.payPalForm = this.fb.group({
      soldPrice: [''],
      shippingCost: [''],
      salesTax: ['']
    });


    this.tcgPlayerForm = this.fb.group({
      soldPrice: [''],
      shippingCost: [''],
      salesTax: ['']
    });

    this.mecariForm = this.fb.group({
      soldPrice: [''],
      shippingCost: [''],
      salesTax: ['']
    });
  }

}
