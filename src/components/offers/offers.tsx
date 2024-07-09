import { offersList } from "../../utils/offersData";
import Pagination from "../pagination/pagination";
import Offer from "./offer";
import "./offers.scss";

export default function Offers() {
  return (
    <div className="offers">
      <ul className="offers__list">
        {offersList.map((offer, id) => (
          <Offer offer={offer} key={id} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}
