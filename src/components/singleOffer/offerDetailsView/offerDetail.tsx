import { IconType } from "react-icons";
import "./offerDetailsView.scss";

type PROPS = {
  Icon: IconType;
  title: string;
  value: number | string;
  measure?: string;
};

export default function OfferDetail({ Icon, title, value, measure }: PROPS) {
  return (
    <li>
      <Icon />
      <p className="el__title">{title}</p>
      <p className="el__value">
        {value} {measure}
      </p>
    </li>
  );
}
