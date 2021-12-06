import { EbayCategoryEnum } from "../enums/EbayCategoryEnum";

export interface EbayFee {
  category: EbayCategoryEnum,
  fee: number,
  overValueFee: number,
  finalValueFee: number
}
