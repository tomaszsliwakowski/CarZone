import "./createOffer.scss";
import { useEffect, useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type PROPS = {
  list: string[];
  name: string;
  placeholder: string;
  standard?: string;
  handleChange: Function;
  value: string;
  type: string;
  status?: boolean;
};

export default function InputSelectBar({
  list,
  name,
  placeholder,
  standard,
  handleChange,
  value,
  type,
  status = true,
}: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<string>(value || "");
  const [filtrValue, setFiltrValue] = useState("");

  const ref = useClickOutSide(() => {
    if (state) setState(false);
    if (value !== selected) {
      handleChange(name, selected);
    }
  });

  const selectHandler = async (el: string) => {
    handleChange(name, el);
    setSelected(el);
    setState(false);
    setFiltrValue("");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    setFiltrValue(e.target.value);
  };

  const removeSelected = async () => {
    handleChange(name, "");
    setSelected("");
  };

  useEffect(() => {
    if (name === "model") {
      setSelected("");
      setFiltrValue("");
    }
    if (value === "") {
      setSelected("");
    }
  }, [status, value]);

  return (
    <div className="createOffer__inputBar" ref={ref}>
      <div className={`inputBar ${!status ? "off" : ""}`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={selected}
          disabled={!status}
          onChange={inputHandler}
          onClick={() => setState((prev) => !prev)}
        />
        {selected !== "" ? (
          <span onClick={() => removeSelected()}>X</span>
        ) : null}
      </div>
      {state ? (
        <ul className="select__List">
          {list
            .filter((item) =>
              item.toLowerCase().includes(filtrValue.toLowerCase())
            )
            .map((el, id) => (
              <li key={id} onClick={() => selectHandler(el)}>
                {el} {standard}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
}
