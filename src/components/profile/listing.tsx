import "./profile.scss";
import { offersList } from "../../utils/offersData";
import ListingOffer from "./listingOffer";

export default function Listing() {
  return (
    <div className="profile__listing">
      <h3 className="head">My listing</h3>
      <ul>
        {offersList.map((offer, id) => (
          <ListingOffer key={id} offer={offer} />
        ))}
      </ul>
    </div>
  );
}
