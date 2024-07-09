import "./pagination.scss";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="pagination">
      <ul>
        <li className="pagination__el">
          <FaAngleLeft />
        </li>
        <li className="pagination__el">
          <FaAngleDoubleLeft />
        </li>
        <li className="pagination__el__num select selected">1</li>
        <li className="pagination__el__num">2</li>
        <li className="pagination__el__num">3</li>
        <li className="pagination__el">
          <FaAngleDoubleRight />
        </li>
        <li className="pagination__el">
          <FaAngleRight />
        </li>
      </ul>
    </div>
  );
}
