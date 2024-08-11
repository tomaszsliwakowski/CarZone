import OfferDetail from "./offerDetail";
import "./offerDetailsView.scss";
import { TbRoad } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { GiGearStickPattern } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { TbEngine } from "react-icons/tb";
import { MdSpeed } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";

export default function OfferDetails() {
  return (
    <div className="offer__details">
      <h2>Details</h2>
      <ul className="offer__details__list">
        <OfferDetail
          title="Mileage"
          Icon={TbRoad}
          value={"97 000"}
          measure="km"
        />
        <OfferDetail title="Fuel type" Icon={LuFuel} value={"Diesel"} />
        <OfferDetail
          title="Transmission"
          Icon={GiGearStickPattern}
          value={"Automatic"}
        />
        <OfferDetail title="Body type" Icon={FaCarSide} value={"Coupe"} />
        <OfferDetail
          title="Engine capacity"
          Icon={TbEngine}
          value={"1 995"}
          measure="cm3"
        />
        <OfferDetail title="Power" Icon={MdSpeed} value={190} measure="KM" />
        <OfferDetail title="Drive type" Icon={GiCarWheel} value={"RWD"} />
        <OfferDetail
          title="Color"
          Icon={IoColorPaletteOutline}
          value={"Gray"}
        />
      </ul>
    </div>
  );
}
