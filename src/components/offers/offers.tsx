import { offersList } from "../../utils/offersData";
import { TbRoad } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { TbManualGearboxFilled } from "react-icons/tb";
import { RiCalendarEventLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import "./offers.scss";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Offers() {
  return (
    <div className="offers">
      <ul className="offers__list">
        {offersList.map((offer, id) => (
          <li key={id}>
            <div className="offer__container-first">
              <img src={offer.img} alt="photo" />
            </div>
            <div className="offer__container-second">
              <div className="offer__carInfoContainer">
                <div className="offer__title">
                  <Link to={"/"}>{offer.name}</Link>
                  <p>
                    {offer.capacity + " cm3"}&nbsp;&bull;&nbsp;
                    {offer.power + " KM"}
                    &nbsp;&bull;&nbsp;{offer.shortText}
                  </p>
                </div>
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
                    <RiCalendarEventLine />
                    {offer.productionYear}
                  </span>
                </div>
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
        ))}
      </ul>
    </div>
  );
}
