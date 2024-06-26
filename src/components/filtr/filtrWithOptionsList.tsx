import { useState } from "react";
import "./filtr.scss";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type PROPS = {
  list: string[];
};

export default function FiltrWithList({ list }: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const ref = useClickOutSide(() => setState(false));

  const selectHandler = (el: string): void => {
    setSelected(el);
  };

  return (
    <div className="filtr">
      <div ref={ref} className="filtrInput">
        <input
          type="text"
          placeholder="Mileage from"
          value={selected}
          onClick={() => setState((prev) => !prev)}
        />
        {selected !== "" ? (
          <span onClick={() => setSelected("")}>X</span>
        ) : null}
      </div>
      {state ? (
        <ul className="filtrList">
          {list.map((el, id) => (
            <li key={id} onClick={() => selectHandler(el)}>
              {el}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
