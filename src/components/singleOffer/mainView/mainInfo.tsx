import "./mainView.scss";
import SellerInfo from "./sellerInfo";
import TopOfferInfo from "./TopOfferInfo";
import CreatedInfo from "./createdInfo";

export default function MainInfo() {
  return (
    <div className="mainInfo">
      <TopOfferInfo />
      <div>
        <SellerInfo />
        <CreatedInfo />
      </div>
    </div>
  );
}
