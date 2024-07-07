import { offersList } from "../../utils/offersData";
import "./offers.scss";

export default function Offers() {
  return (
    <div className="offers">
      <ul className="offers__list">
        {offersList.map((offer, id) => (
          <li key={id}>
            <div className="offer__container-first">
              <img src={offer.img} alt="photo" />
            </div>
            <div className="offer__container-second">info</div>
            <div className="offer__container-third">price</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
