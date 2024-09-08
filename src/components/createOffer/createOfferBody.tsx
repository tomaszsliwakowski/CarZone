import "./createOffer.scss";
import SellForm from "./createOfferForm";
import SellHeader from "./createOfferHeader";

export default function CreateOfferBody() {
  return (
    <div className="createOffer__body">
      <SellHeader />
      <SellForm />
    </div>
  );
}
