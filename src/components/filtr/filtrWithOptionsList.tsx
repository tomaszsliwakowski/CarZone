import { useState } from "react";
import "./filtr.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type PROPS = {
  list: string[];
  name: string;
};

export default function FiltrWithOptionsList({ list, name }: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<Array<string>>([]);
  const [value, setValue] = useState("");

  const ref = useClickOutSide(() => setState(false));

  const selectHandler = (el: string): void => {
    if (selected.length === 0 && el !== "All") {
      setSelected([el]);
    } else if (selected.length > 0 && el !== "All") {
      const index: number = selected.indexOf(el);
      setSelected((prev) =>
        index === -1 ? [...prev, el] : prev.filter((item) => item !== el)
      );
    } else {
      setSelected((prev) => (prev.length === list.length ? [] : list));
    }
    setValue("");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="filtr" ref={ref}>
      <div
        className="filtrInput select"
        onClick={() => setState((prev) => !prev)}
      >
        <input
          type="text"
          placeholder={name}
          onChange={inputHandler}
          value={
            selected[0]
              ? `${selected.length === 1 ? selected[0] : "Selected"} ${
                  selected.length > 1 && selected[0] ? selected.length : ""
                }`
              : value
          }
        />
        {state ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {state ? (
        <ul className="filtrList">
          {list
            .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            .map((el, id) => (
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
