import { useEffect, useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { sortList } from "../../utils/data";
import "./filtr.scss";

type PROPS = {
  handleChange: Function;
};

export default function SortOffers({ handleChange }: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<string>("Latest");

  const ref = useClickOutSide(() => {
    if (state) setState(false);
  });

  useEffect(() => {
    handleChange("sort", selected);
    setState(false);
  }, [selected]);

  return (
    <div className="sort" ref={ref}>
      <span className="type">Sort</span>
      <div className="selected" onClick={() => setState((prev) => !prev)}>
        <span>{selected}</span>
        {state ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {state ? (
        <ul className="sortList">
          {sortList.map((el, id) => (
            <li
              key={id}
              onClick={() => setSelected(el)}
              className={selected === el ? "chosen" : ""}
            >
              <span>{el}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
