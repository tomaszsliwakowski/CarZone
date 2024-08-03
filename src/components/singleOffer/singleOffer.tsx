import ImgSlider from "./mainView/imgSlider";
import MainInfo from "./mainView/mainInfo";
import OfferDesc from "./offerInfoView/offerDesc";
import OfferInfo from "./offerInfoView/offerInfo";
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
          <OfferInfo />
          <OfferDesc />
        </div>
      </div>
    </div>
  );
}
