import { useEffect, useState } from "react";
import "./filtr.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

type PROPS = {
  list: string[];
  className: string;
};

export default function FiltrWithOptionsList({ list, className }: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<Array<string>>([]);

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

  useEffect(() => {
    if (!state) return;
    const parent = document.querySelector("body");

    function closeModal(e: Event) {
      let target = e.target as HTMLElement;
      if (!target.className) return;
      if (!target.className.includes(className)) {
        setState(false);
      }
    }

    if (parent) {
      parent.addEventListener("click", closeModal);
    }
    return () => {
      if (parent) {
        parent.removeEventListener("click", closeModal);
      }
    };
  }, [state]);

  return (
    <div className="filtr">
      <div
        className={`filtrInput select ${state ? className : ""}`}
        onClick={() => setState((prev) => !prev)}
      >
        <input
          type="text"
          placeholder="Brand"
          className={state ? className : ""}
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
        <ul className={`filtrList ${state ? className : ""}`}>
          {list.map((el, id) => (
            <li
              key={id}
              onClick={() => selectHandler(el)}
              className={`${state ? className : ""}`}
            >
              <div
                className={`checkbox ${
                  selected.indexOf(el) !== -1 ? "checked" : ""
                } ${state ? className : ""}`}
              >
                {selected.length > 0 && selected.indexOf(el) !== -1 ? (
                  <FaCheck />
                ) : null}
              </div>
              <span className={`${state ? className : ""}`}>{el}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
