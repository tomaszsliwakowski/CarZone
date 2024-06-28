import {
  bodyTypeList,
  carModels,
  conditionDamagedList,
  fuelList,
  mileageList,
  priceList,
  yearList,
} from "../../utils/data";
import FiltrWithList from "../filtr/filtrWithList";
import FiltrWithOptionsList from "../filtr/filtrWithOptionsList";

import "./filters.scss";

export default function Filters() {
  return (
    <div className="filtersBar">
      <div className="body">
        <FiltrWithOptionsList
          list={carModels.map((item) => item.brand)}
          name="Brand"
        />
        <FiltrWithOptionsList list={carModels[1].models} name="Models" />
        <FiltrWithOptionsList list={bodyTypeList} name="Body Type" />
        <FiltrWithList list={priceList} name="Price from" />
        <FiltrWithList list={priceList} name="Price to" />
        <FiltrWithList
          list={yearList.reverse()}
          name="Year of production from"
        />
        <FiltrWithList list={yearList} name="Year of production to" />
        <FiltrWithOptionsList list={fuelList} name="Fuel Type" />
        <FiltrWithList list={mileageList} name="Mileage from" />
        <FiltrWithList list={mileageList} name="Mileage to" />
        <FiltrWithList list={conditionDamagedList} name="Condition Damage" />
      </div>
    </div>
  );
}
