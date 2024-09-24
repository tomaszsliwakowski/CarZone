import { useContext } from "react";
import {
  bodyTypeList,
  capasityList,
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
import InputSelectBar from "./inputSelectBar";
import "./createOffer.scss";
import {
  OfferForm,
  useCreateOfferFormStore,
} from "../../context/createOfferStore";
import InputBar from "./inputBar";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/authContext";
import CreateOfferImages from "./createOfferImages";

export default function CreateOfferForm() {
  const { currentUser } = useContext(AuthContext);
  const { form, setFormValue } = useCreateOfferFormStore((state) => ({
    form: state.form,
    setFormValue: state.setFormValue,
  }));

  const handleChange = (element: keyof OfferForm, value: string) => {
    setFormValue(element, value);
  };

  const modelsList =
    carModels.find((item) => item.brand === form.brand)?.models || [];

  return (
    <div className="createOffer__form">
      <form>
        <div className="owner">
          <FaUser />
          <span>{currentUser?.username}</span>
          <InputBar
            type="number"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            handleChange={handleChange}
          />
        </div>
        <div className="createOffer__form__container">
          <InputSelectBar
            list={carModels
              .filter((item) => item.brand !== "All")
              .map((item) => item.brand)}
            placeholder="Brand"
            name="brand"
            handleChange={handleChange}
            value={form.brand}
            type="text"
          />
          <InputSelectBar
            list={modelsList.filter((item) => item !== "All")}
            placeholder="Models"
            name="model"
            handleChange={handleChange}
            value={form.model}
            status={modelsList.length > 0 ? true : false}
            type="text"
          />
          <InputSelectBar
            list={bodyTypeList}
            placeholder="Body Type"
            name="body"
            handleChange={handleChange}
            value={form.body}
            type="text"
          />
          <InputSelectBar
            list={priceList}
            placeholder="Price"
            name="price"
            standard="PLN"
            handleChange={handleChange}
            value={form.price}
            type="number"
          />
          <InputSelectBar
            list={[...yearList].reverse()}
            placeholder="Year of production"
            name="yearOfPruduction"
            handleChange={handleChange}
            value={form.yearOfPruduction}
            type="number"
          />
          <InputSelectBar
            list={fuelList}
            placeholder="Fuel Type"
            name="fuel"
            handleChange={handleChange}
            value={form.fuel}
            type="text"
          />
          <InputSelectBar
            list={mileageList}
            placeholder="Mileage"
            handleChange={handleChange}
            name="mileage"
            value={form.mileage}
            type="number"
          />
          <InputSelectBar
            list={conditionDamagedList}
            placeholder="Condition Damage"
            name="condition"
            handleChange={handleChange}
            value={form.condition}
            type="text"
          />
          <InputSelectBar
            list={powerList}
            placeholder="Power"
            name="power"
            handleChange={handleChange}
            value={form.power}
            type="number"
          />
          <InputSelectBar
            list={gearList}
            placeholder="Transmission"
            name="transmission"
            handleChange={handleChange}
            value={form.transmission}
            type="text"
          />
          <InputSelectBar
            list={driveList}
            placeholder="Drive type"
            name="drive"
            handleChange={handleChange}
            value={form.drive}
            type="text"
          />
          <InputSelectBar
            list={capasityList}
            placeholder="Capasity"
            name="capasity"
            handleChange={handleChange}
            value={form.capasity}
            type="text"
          />
        </div>
        <div className="createOffer__form__desc">
          <textarea placeholder="Offer description"></textarea>
        </div>
        <CreateOfferImages />
      </form>
    </div>
  );
}
