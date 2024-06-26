import { useState } from "react";
import "./filtr.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type PROPS = {
  list: string[];
};

export default function FiltrWithOptionsList({ list }: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<Array<string>>([]);

  const ref = useClickOutSide(() => setState(false));

  const selectHandler = (el: string): void => {
    if (selected.length === 0) {
      setSelected([el]);
    } else {
      const index: number = selected.indexOf(el);
      setSelected((prev) =>
        index === -1 ? [...prev, el] : prev.filter((item) => item !== el)
      );
    }
  };

  return (
    <div className="filtr">
      <div
        ref={ref}
        className="filtrInput select"
        onClick={() => setState((prev) => !prev)}
      >
        <input
          type="text"
          placeholder="Brand"
          value={
            selected[0]
              ? `${selected.length === 1 ? selected[0] : "Selected"} ${
                  selected.length > 1 && selected[0] ? selected.length : ""
                }`
              : null || ""
          }
        />
        {state ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {state ? (
        <ul className="filtrList">
          {list.map((el, id) => (
            <li key={id} onClick={() => selectHandler(el)}>
              <div
                className={`checkbox ${
                  selected.indexOf(el) !== -1 ? "checked" : ""
                } `}
              >
                {selected.length > 0 && selected.indexOf(el) !== -1 ? (
                  <FaCheck />
                ) : null}
              </div>
              <span>{el}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
