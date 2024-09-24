import "./createOffer.scss";
import CreateOfferForm from "./createOfferForm";
import CreateOfferHeader from "./createOfferHeader";

export default function CreateOfferBody() {
  return (
    <div className="createOffer__body">
      <CreateOfferHeader />
      <CreateOfferForm />
    </div>
  );
}
