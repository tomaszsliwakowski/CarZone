import "./mainView.scss";
import { IoLocationOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function SellerInfo() {
  return (
    <div className="sellerInfo">
      <ul>
        <li>
          <span>
            <IoLocationOutline />
          </span>
          <p>ul. Brzezinska 47 Warszawa</p>
        </li>
        <li>
          <span>
            <FaUser />
          </span>
          <p>Seller on CARZONE since 2020</p>
        </li>
      </ul>
    </div>
  );
}
