import { useState } from "react";
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
import InputBar from "./inputBar";
import "./sell.scss";

export default function SellForm() {
  const [form, setForm] = useState({
    brand: "",
    model: "",
    body: "",
    price: "",
    yearOfPruduction: "",
    fuel: "",
    mileage: "",
    condition: "",
    power: "",
    transmission: "",
    drive: "",
  });

  const handleChange = () => {};
  const modelsList = carModels.find(
    (item) => item.brand === form.brand
  )?.models;
  return (
    <div className="sell__form">
      <div className="sell__form__container">
        <form>
          <InputBar
            list={carModels.map((item) => item.brand)}
            name="Brand"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={modelsList || []}
            name="Models"
            handleChange={handleChange}
            value=""
            status={modelsList ? true : false}
          />
          <InputBar
            list={bodyTypeList}
            name="Body Type"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={priceList}
            name="Price"
            standard="PLN"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={[...yearList].reverse()}
            name="Year of production"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={fuelList}
            name="Fuel Type"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={mileageList}
            name="Mileage"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={conditionDamagedList}
            name="Condition Damage"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={powerList}
            name="Power"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={gearList}
            name="Transmission"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={driveList}
            name="Drive type"
            handleChange={handleChange}
            value=""
          />
        </form>
      </div>
    </div>
  );
}
