import { PayPalCategoryEnum } from "../enums/PayPalCategoryEnum";

export interface PayPalFee {
  category: PayPalCategoryEnum
  fee: number,
  fixedFee: number
}
