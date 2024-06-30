import { useEffect, useState } from "react";
import "./filtr.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type PROPS = {
  list: string[];
  name: string;
  queryName: string;
  handleChange: Function;
  searchParams: URLSearchParams;
};

export default function FiltrWithOptionsList({
  list,
  name,
  queryName,
  handleChange,
  searchParams,
}: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<Array<string>>(
    searchParams?.get(queryName)?.split(",") || []
  );
  const [filtrValue, setFiltrValue] = useState("");

  const ref = useClickOutSide(() => {
    if (state) setState(false);
  });

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
    setFiltrValue("");
  };

  useEffect(() => {
    if (state) return;
    handleChange(queryName, selected.toString());
  }, [state]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltrValue(e.target.value);
  };

  return (
    <div className="filtr" ref={ref}>
      <div
        className="filtrInput select"
        onClick={() => setState((prev) => !prev)}
      >
        <input
          type="text"
          name={name}
          placeholder={name}
          onChange={inputHandler}
          value={
            selected[0]
              ? `${selected.length === 1 ? selected[0] : "Selected"} ${
                  selected.length > 1 && selected[0] ? selected.length : ""
                }`
              : filtrValue
          }
        />
        {state ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {state ? (
        <ul className="filtrList">
          {list
            .filter((item) =>
              item.toLowerCase().includes(filtrValue.toLowerCase())
            )
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
