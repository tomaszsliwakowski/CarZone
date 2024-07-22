import { useFilterParams } from "../../hooks/useFilterParams";
import SortOffers from "../filtr/sort";
import "./offersHeader.scss";
export default function OffersHeader() {
  const { handleChange, searchParams } = useFilterParams();
  const brand = searchParams.get("brand");

  return (
    <div className="offers__header">
      <div className="info">
        <h2>
          {brand && brand.split(",").length === 1
            ? brand.split(",")[0] + " - "
            : null}
          Cars
        </h2>
        <span>
          Number of offers: <b>2300</b>
        </span>
      </div>
      <div className="sortOffers">
        <SortOffers handleChange={handleChange} />
      </div>
    </div>
  );
}
