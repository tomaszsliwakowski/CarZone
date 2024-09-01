import { Link } from "react-router-dom";
import "./profile.scss";
import { TbManualGearboxFilled, TbRoad } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaTrashCan } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { OfferType } from "../../utils/offersData";
import OfferInfoPanel from "../offers/offerInfoPanel";

type PORPS = {
  offer: OfferType;
};

export default function ListingOffer({ offer }: PORPS) {
  return (
    <li>
      <div className="offer__listing__container">
        <div className="offer__image">
          <img
            src={
              "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inp6ZnA4amljbHdvbTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.thYNAn7xG5zUv6TVwxEV3RmN7X-B4TmMDzXaesTZ1xI/image;s=1440x0;q=80"
            }
            alt="photo"
          />
        </div>
        <div className="offer__carInfoContainer">
          <div className="offer__title">
            <Link to={`/offer/${offer.name}/1`}>{offer.name}</Link>
            <p>
              {offer.capacity + " cm3"}&nbsp;&bull;&nbsp;
              {offer.power + " KM"}
              &nbsp;&bull;&nbsp;{offer.shortText}
            </p>
          </div>
          <OfferInfoPanel offer={offer} />
        </div>
      </div>
      <div className="offer__price">
        <div>
          <h3>{offer.price}</h3>
          <p>PLN</p>
        </div>
        <div className="actions">
          <IoSettings className="set" />
          <FaTrashCan className="del" />
        </div>
      </div>
    </li>
  );
}
