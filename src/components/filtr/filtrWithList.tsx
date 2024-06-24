import "./filtr.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function FiltrWithList() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Brand" />
        <IoIosArrowDown />
      </div>
      <ul>list</ul>
    </div>
  );
}
