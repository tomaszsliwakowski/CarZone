import ImgSlider from "./mainView/imgSlider";
import MainInfo from "./mainView/mainInfo";
import OfferDesc from "./offerDetailsView/offerDesc";
import OfferDetails from "./offerDetailsView/offerDetails";
import "./singleOffer.scss";

export default function SingleOffer() {
  return (
    <div className="singleOffer">
      <div className="container">
        <div className="mainView">
          <ImgSlider />
          <MainInfo />
        </div>
        <div className="offerInfoView">
          <OfferDetails />
          <OfferDesc />
        </div>
      </div>
    </div>
  );
}
