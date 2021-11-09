import { EbayCategoryEnum } from "../enums/EbayCategoryEnum";
import { PayPalCategoryEnum } from "../enums/PayPalCategoryEnum";
import { EbayFee } from "../interfaces/IEbayFee";
import { PayPalFee } from "../interfaces/IPayPalFee";

export class Fees {

  public static eBayFees: EbayFee[] = [
    {
      category: EbayCategoryEnum.mostCategories,
      fee: .1255,
      overValueFee: .0235,
      perOrderFee: .3
    },
    {
      category: EbayCategoryEnum.tradingCards,
      overValueFee: .0235,
      fee: .1235,
      perOrderFee: .3
    }
  ];

  public static payPalFees: PayPalFee[] = [
    {
      category: PayPalCategoryEnum.sendReceiveMoneyForGoodsandServices,
      fee: .0289,
      fixedFee: .49
    }
  ];
}
