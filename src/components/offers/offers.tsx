import { CSSProperties } from "react";
import { offersList } from "../../utils/offersData";
import Pagination from "../pagination/pagination";
import Offer from "./offer";
import "./offers.scss";
import { ClipLoader } from "react-spinners";
import { useFilterParams } from "../../hooks/useFilterParams";
import { OffersSortHandler } from "../../utils/sortOffers";

const override: CSSProperties = {
  display: "block",
  margin: "15vh auto 20vh auto",
};

export default function Offers() {
  const { searchParams } = useFilterParams();
  const sort = searchParams.get("sort");
  const offers = OffersSortHandler(offersList, sort);
  return (
    <div className="offers">
      {offersList && offersList.length > 0 ? (
        <>
          <ul className="offers__list">
            {offers.map((offer, id) => (
              <Offer offer={offer} key={id} />
            ))}
          </ul>
          <Pagination />
        </>
      ) : (
        <ClipLoader
          color="#3a86ff"
          loading={true}
          cssOverride={override}
          size={200}
          aria-label="ClipLoader"
          speedMultiplier={0.6}
          className="loader"
        />
      )}
    </div>
  );
}
