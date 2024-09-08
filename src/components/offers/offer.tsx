import { Link } from "react-router-dom";
import { OfferType } from "../../utils/offersData";
import { FiMapPin } from "react-icons/fi";
import "./offers.scss";
import { format } from "timeago.js";
import OfferInfoPanel from "./offerInfoPanel";

type PROPS = {
  offer: OfferType;
};

export default function Offer({ offer }: PROPS) {
  return (
    <li>
      <div className="offer__container-first">
        <img src={offer.img} alt="photo" />
      </div>
      <div className="offer__container-second">
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
        <div className="offer__otherInfo">
          <span>
            <FiMapPin />
            {offer.location}
          </span>
          <p>Published &nbsp;{format(offer.publicAt)}</p>
        </div>
      </div>
      <div className="offer__container-third">
        <div>
          <h3>{offer.price}</h3>
          <p>PLN</p>
        </div>
      </div>
    </li>
  );
}
