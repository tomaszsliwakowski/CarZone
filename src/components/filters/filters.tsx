import { carModels, mileageList } from "../../utils/data";
import FiltrWithList from "../filtr/filtrWithList";
import FiltrWithOptionsList from "../filtr/filtrWithOptionsList";
import "./filters.scss";

export default function Filters() {
  return (
    <div className="filtersBar">
      <div className="body">
        <FiltrWithOptionsList list={mileageList} className="mileage" />
        <FiltrWithList
          list={carModels.map((item) => item.brand)}
          className="brand"
        />
      </div>
    </div>
  );
}
