import { useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import "./createOffer.scss";

type PROPS = {
  type: string;
  name: string;
  placeholder: string;
  setFormValue: <OfferForm, T>(element: keyof OfferForm, value: T) => void;
  value: string;
  className: string;
  maxLength?: number;
};

export default function InputBar({
  type,
  name,
  placeholder,
  setFormValue,
  value,
  className,
  maxLength,
}: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<string>(value || "");
  const ref = useClickOutSide(() => {
    if (state) setState(false);
    if (value !== selected) {
      setFormValue(name, selected);
    }
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  const removeSelected = async () => {
    setFormValue(name, "");
    setSelected("");
  };

  return (
    <div className={className} ref={ref}>
      <div className={`inputBar`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={selected}
          onChange={inputHandler}
          onClick={() => setState((prev) => !prev)}
          maxLength={maxLength}
        />
        {selected !== "" ? (
          <span onClick={() => removeSelected()}>X</span>
        ) : null}
      </div>
    </div>
  );
}
