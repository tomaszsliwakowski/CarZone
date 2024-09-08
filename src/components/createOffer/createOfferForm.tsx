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
import "./createOffer.scss";
import {
  OfferForm,
  useCreateOfferFormStore,
} from "../../context/createOfferStore";

export default function CreateOfferForm() {
  const { form, setFormValue } = useCreateOfferFormStore((state) => ({
    form: state.form,
    setFormValue: state.setFormValue,
  }));

  const handleChange = (element: keyof OfferForm, value: string) => {
    setFormValue(element, value);
  };

  const modelsList = carModels.find(
    (item) => item.brand === form.brand
  )?.models;

  return (
    <div className="createOffer__form">
      <div className="createOffer__form__container">
        <form>
          <InputBar
            list={carModels
              .filter((item) => item.brand !== "All")
              .map((item) => item.brand)}
            placeholder="Brand"
            name="brand"
            handleChange={handleChange}
            value={form.brand}
          />
          <InputBar
            list={modelsList?.filter((item) => item !== "All") || []}
            placeholder="Models"
            name="model"
            handleChange={handleChange}
            value={form.model}
            status={modelsList && modelsList?.length > 0 ? true : false}
          />
          <InputBar
            list={bodyTypeList}
            placeholder="Body Type"
            name="body"
            handleChange={handleChange}
            value={form.body}
          />
          <InputBar
            list={priceList}
            placeholder="Price"
            name="price"
            standard="PLN"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={[...yearList].reverse()}
            placeholder="Year of production"
            name="yearOfPruduction"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={fuelList}
            placeholder="Fuel Type"
            name="fuel"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={mileageList}
            placeholder="Mileage"
            handleChange={handleChange}
            name="mileage"
            value=""
          />
          <InputBar
            list={conditionDamagedList}
            placeholder="Condition Damage"
            name="condition"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={powerList}
            placeholder="Power"
            name="power"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={gearList}
            placeholder="Transmission"
            name="transmission"
            handleChange={handleChange}
            value=""
          />
          <InputBar
            list={driveList}
            placeholder="Drive type"
            name="drive"
            handleChange={handleChange}
            value=""
          />
        </form>
      </div>
    </div>
  );
}
