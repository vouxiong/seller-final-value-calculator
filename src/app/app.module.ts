import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OnlynumberDirective } from '../shared/directives/onlyNumbers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbayCalculatorComponent } from './ebay-calculator/ebay-calculator.component';
import { PaypalCalculatorComponent } from './paypal-calculator/paypal-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlynumberDirective,
    EbayCalculatorComponent,
    PaypalCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
