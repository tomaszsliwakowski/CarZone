import "./createOffer.scss";

type PROPS = {
  clearForm: () => void;
};

export default function CreateOfferActions({ clearForm }: PROPS) {
  return (
    <div className="actions">
      <button type="submit" className="submit">
        Publish
      </button>
      <button type="reset" className="clear" onClick={() => clearForm()}>
        Clear
      </button>
    </div>
  );
}
