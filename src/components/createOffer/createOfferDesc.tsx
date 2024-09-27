import { useEffect, useState } from "react";
import "./createOffer.scss";
import { useDebounce } from "../../hooks/useDebounce";

type PROPS = {
  setFormValue: <OfferForm, T>(element: keyof OfferForm, value: T) => void;
};

export default function CreateOfferDesc({ setFormValue }: PROPS) {
  const [value, setValue] = useState<string[]>([]);
  const debouncedDescValue = useDebounce(value, 1000);

  const valueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = e.target.value;
    setValue(value.split(/\r?\n/));
  };

  useEffect(() => {
    setFormValue("desc", debouncedDescValue);
  }, [debouncedDescValue]);

  return (
    <div className="createOffer__form__desc">
      <textarea
        placeholder="Offer description"
        onChange={valueHandler}
      ></textarea>
    </div>
  );
}
