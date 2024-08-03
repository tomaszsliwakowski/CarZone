import { useState } from "react";
import "./filtr.scss";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type PROPS = {
  list: string[];
  name: string;
  standard?: string;
  queryName: string;
  handleChange: Function;
  searchParams: URLSearchParams;
};

export default function FiltrWithList({
  list,
  name,
  standard,
  queryName,
  handleChange,
  searchParams,
}: PROPS) {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState<string>(
    searchParams?.get(queryName) || ""
  );
  const [filtrValue, setFiltrValue] = useState("");

  const ref = useClickOutSide(() => {
    if (state) setState(false);
  });

  const selectHandler = async (el: string) => {
    await handleChange(queryName, el);
    setSelected(el);
    setState(false);
    setFiltrValue("");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    setFiltrValue(e.target.value);
  };

  const removeSelected = async () => {
    setSelected("");
    await handleChange(queryName, "");
  };

  return (
    <div className="filtr" ref={ref}>
      <div className="filtrInput">
        <input
          type="text"
          name={name}
          placeholder={name}
          value={selected}
          onChange={inputHandler}
          onClick={() => setState((prev) => !prev)}
        />
        {selected !== "" ? (
          <span onClick={() => removeSelected()}>X</span>
        ) : null}
      </div>
      {state ? (
        <ul className="filtrList">
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
