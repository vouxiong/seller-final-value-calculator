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
      finalValueFee: .30
    },
    {
      category: EbayCategoryEnum.tradingCards,
      overValueFee: .0235,
      fee: .1235,
      finalValueFee: .30
    },
    {
      category: EbayCategoryEnum.booksMagazineMovieTvMusic,
      overValueFee: .0235,
      fee: .1455,
      finalValueFee: .30
    },
    {
      category: EbayCategoryEnum.clothingBagsHangBags,
      overValueFee: .09,
      fee: .15,
      finalValueFee: .30
    },
    {
      category: EbayCategoryEnum.coinsPaperMoneyBullion,
      overValueFee: .07,
      fee: .1235,
      finalValueFee: .30
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
