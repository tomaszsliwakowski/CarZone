import { TbManualGearboxFilled, TbRoad } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { OfferType } from "../../utils/offersData";

type PROPS = {
  offer: OfferType;
};

export default function OfferInfoPanel({ offer }: PROPS) {
  return (
    <div className="offer__carInfo">
      <span>
        <TbRoad />
        {offer.mileage + " km"}
      </span>
      <span>
        <BsFuelPump />
        {offer.fuelType}
      </span>
      <span>
        <TbManualGearboxFilled />
        {offer.gear}
      </span>
      <span>
        <RiCalendarEventFill />
        {offer.productionYear}
      </span>
    </div>
  );
}
