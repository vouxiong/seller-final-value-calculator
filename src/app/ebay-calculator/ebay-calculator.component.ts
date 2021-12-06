import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EbayCategoryEnum } from '../../shared/enums/EbayCategoryEnum';
import { Fees } from '../../shared/fees/fees';
import { IFinalValue } from '../../shared/interfaces/IFinalValue';

@Component({
  selector: 'app-ebay-calculator',
  templateUrl: './ebay-calculator.component.html',
  styleUrls: ['./ebay-calculator.component.scss']
})
export class EbayCalculatorComponent implements OnInit {

  // ebay...
  public ebay: IFinalValue = {
    profit: 0,
    fees: 0,
    orderTotal: 0
  };

  public ebayForm: any;
  public ebayCategories: any[] = [];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.createForms();
    this.ebayCategories = (Object.values(EbayCategoryEnum)).sort((one, two) => (one > two ? 1 : -1));
    this.ebayForm.valueChanges.subscribe((data: any) => {
      this.calculateEbayProfit();
    });

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
  }


  /**
 * caluclateEbayProfit   *
 * */
  public calculateEbayProfit() {

    let soldPrice = Number(this.ebayForm.get('soldPrice').value);
    let ebayFees = Fees.eBayFees.filter(f => f.category == this.ebayForm.get('category').value)[0];
    let shipping = Number(this.ebayForm.get('shippingCost').value);
    let shippingBuyer = Number(this.ebayForm.get('shippingCostBuyer').value);
    let salesTax = Number(this.ebayForm.get('salesTax').value);

    let orderTotal = ((soldPrice + shippingBuyer) + ((soldPrice + shippingBuyer) * salesTax));
    let totalFees = (orderTotal * ebayFees.fee) + ebayFees.finalValueFee;
    let profit = (soldPrice + shippingBuyer) - totalFees;

    this.ebay = {
      profit: Number(((profit - shipping)).toFixed(2)),
      fees: Number(totalFees.toFixed(2)),
      orderTotal: Number(orderTotal.toFixed(2))
    }
  }

  /**
   * calculateFee
   * @param platform
   */
  public calculateFee(platform: string) {
    if (platform == 'ebay') {
      //seller tac
    }
  }

  /**
   * clearForm
   */
  public clearForm() {
    this.ebayForm.reset();
    this.ebayForm.get('category').setValue(EbayCategoryEnum.mostCategories);
  }

}
