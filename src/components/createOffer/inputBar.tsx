import { useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import "./createOffer.scss";

type PROPS = {
  type: string;
  name: string;
  placeholder: string;
  handleChange: Function;
  value: string;
};

export default function InputBar({
  type,
  name,
  placeholder,
  handleChange,
  value,
}: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<string>(value || "");
  const ref = useClickOutSide(() => {
    if (state) setState(false);
    if (value !== selected) {
      handleChange(name, selected);
    }
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  const removeSelected = async () => {
    handleChange(name, "");
    setSelected("");
  };

  return (
    <div className="createOffer__inputBar" ref={ref}>
      <div className={`inputBar`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={selected}
          onChange={inputHandler}
          onClick={() => setState((prev) => !prev)}
        />
        {selected !== "" ? (
          <span onClick={() => removeSelected()}>X</span>
        ) : null}
      </div>
    </div>
  );
}
