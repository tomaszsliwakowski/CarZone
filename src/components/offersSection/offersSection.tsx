import Offers from "../offers/offers";
import OffersHeader from "../offersHeader/offersHeader";
import "./offersSection.scss";

export default function OffersSection() {
  return (
    <div className="offers__section">
      <div className="body">
        <OffersHeader />
        <Offers />
      </div>
    </div>
  );
}
