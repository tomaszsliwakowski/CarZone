import { useEffect, useState } from "react";
import "./filtr.scss";

type PROPS = {
  list: string[];
  className: string;
};

export default function FiltrWithList({ list, className }: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<string>("");

  const selectHandler = (el: string): void => {
    setSelected(el);
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
      <div className={`filtrInput ${state ? className : ""}`}>
        <input
          type="text"
          placeholder="Mileage from"
          className={state ? className : ""}
          value={selected}
          onClick={() => setState((prev) => !prev)}
        />
        {selected !== "" ? (
          <span onClick={() => setSelected("")}>X</span>
        ) : null}
      </div>
      {state ? (
        <ul className={`filtrList ${state ? className : ""}`}>
          {list.map((el, id) => (
            <li
              key={id}
              onClick={() => selectHandler(el)}
              className={`${state ? className : ""}`}
            >
              {el}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
