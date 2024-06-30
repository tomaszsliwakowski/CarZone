import { useFilterParams } from "../../hooks/useFilterParams";
import {
  bodyTypeList,
  carModels,
  conditionDamagedList,
  driveList,
  fuelList,
  gearList,
  mileageList,
  powerList,
  priceList,
  yearList,
} from "../../utils/data";
import FiltrWithList from "../filtr/filtrWithList";
import FiltrWithOptionsList from "../filtr/filtrWithOptionsList";
import "./filters.scss";

export default function Filters() {
  const { handleChange, searchParams } = useFilterParams();

  return (
    <div className="filtersBar">
      <div className="body">
        <FiltrWithOptionsList
          list={carModels.map((item) => item.brand)}
          name="Brand"
          queryName="brand"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithOptionsList
          list={carModels[1].models}
          name="Models"
          queryName="models"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithOptionsList
          list={bodyTypeList}
          name="Body Type"
          queryName="body"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={priceList}
          name="Price from"
          standard="PLN"
          queryName="priceFrom"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={priceList}
          name="Price to"
          standard="PLN"
          queryName="priceTo"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={[...yearList].reverse()}
          name="Year of production from"
          queryName="yearFrom"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={[...yearList].reverse()}
          name="Year of production to"
          queryName="yearTo"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithOptionsList
          list={fuelList}
          name="Fuel Type"
          queryName="fuel"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={mileageList}
          name="Mileage from"
          standard="km"
          queryName="mileageFrom"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={mileageList}
          name="Mileage to"
          standard="km"
          queryName="mileageTo"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={conditionDamagedList}
          name="Condition Damage"
          queryName="condition"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={powerList}
          name="Power from"
          standard="KM"
          queryName="powerFrom"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithList
          list={powerList}
          name="Power to"
          standard="KM"
          queryName="powerTo"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithOptionsList
          list={gearList}
          name="Gear type"
          queryName="gear"
          handleChange={handleChange}
          searchParams={searchParams}
        />
        <FiltrWithOptionsList
          list={driveList}
          name="Drive type"
          queryName="drive"
          handleChange={handleChange}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}
