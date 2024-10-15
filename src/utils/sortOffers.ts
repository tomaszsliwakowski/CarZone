import { OfferType } from "./offersData";

export const OffersSortHandler = (
  offers: OfferType[],
  sortType: string | null
) => {
  let sortedOffers = [];

  switch (sortType) {
    case "Latest":
      sortedOffers = offers;
      break;
    case "Price from the lowest":
      sortedOffers = offers.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
      break;
    case "Price from the highest":
      sortedOffers = offers.sort(
        (a, b) => parseInt(b.price) - parseInt(a.price)
      );
      break;
    case "Mileage from the lowest":
      sortedOffers = offers.sort(
        (a, b) => parseInt(a.mileage) - parseInt(b.mileage)
      );
      break;
    case "Mileage from the highest":
      sortedOffers = offers.sort(
        (a, b) => parseInt(b.mileage) - parseInt(a.mileage)
      );
      break;
    case "Power from the lowest":
      sortedOffers = offers.sort(
        (a, b) => parseInt(a.power) - parseInt(b.power)
      );
      break;
    case "Power from the highest":
      sortedOffers = offers.sort(
        (a, b) => parseInt(b.power) - parseInt(a.power)
      );
      break;

    default:
      sortedOffers = offers;
  }
  return offers;
};
