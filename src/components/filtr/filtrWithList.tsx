import { useState } from "react";
import "./filtr.scss";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type PROPS = {
  list: string[];
  name: string;
};

export default function FiltrWithList({ list, name }: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const [value, setValue] = useState("");

  const ref = useClickOutSide(() => setState(false));

  const selectHandler = (el: string): void => {
    setSelected(el);
    setState(false);
    setValue("");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="filtr" ref={ref}>
      <div className="filtrInput">
        <input
          type="text"
          placeholder={name}
          value={selected}
          onChange={inputHandler}
          onClick={() => setState((prev) => !prev)}
        />
        {selected !== "" ? (
          <span onClick={() => setSelected("")}>X</span>
        ) : null}
      </div>
      {state ? (
        <ul className="filtrList">
          {list
            .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            .map((el, id) => (
              <li key={id} onClick={() => selectHandler(el)}>
                {el} {name.includes("Mileage") ? "km" : ""}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
}
