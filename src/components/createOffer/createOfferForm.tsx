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
import CreateOfferActions from "./createOfferActions";
import CreateOfferDesc from "./createOfferDesc";

export default function CreateOfferForm() {
  const { currentUser } = useContext(AuthContext);
  const { form, setFormValue, addFormImage, removeFormImage, clearForm } =
    useCreateOfferFormStore((state) => ({
      form: state.form,
      setFormValue: state.setFormValue,
      addFormImage: state.addFormImage,
      removeFormImage: state.removeFormImage,
      clearForm: state.clearForm,
    }));

  const modelsList =
    carModels.find((item) => item.brand === form.brand)?.models || [];

  return (
    <div className="createOffer__form">
      <form>
        <h2 className="title">Form</h2>
        <div className="owner">
          <div className="user__con">
            <FaUser />
            <span>{currentUser?.username}</span>
          </div>
          <div className="owner__container">
            <label>
              <span>Phone</span>
              <InputBar
                type="number"
                name="phone"
                placeholder="123-123-123"
                value={form.phone}
                setFormValue={setFormValue}
                className="createOffer__inputBar"
              />
            </label>
            <label>
              <span>Location Address</span>
              <InputBar
                type="text"
                name="location"
                placeholder="( Street / Number / City )"
                value={form.phone}
                setFormValue={setFormValue}
                className="createOffer__inputBar long"
              />
            </label>
          </div>
        </div>
        <div className="createOffer__form__container">
          <InputSelectBar
            list={carModels
              .filter((item) => item.brand !== "All")
              .map((item) => item.brand)}
            placeholder="Brand"
            name="brand"
            setFormValue={setFormValue}
            value={form.brand}
            type="text"
          />
          <InputSelectBar
            list={modelsList.filter((item) => item !== "All")}
            placeholder="Models"
            name="model"
            setFormValue={setFormValue}
            value={form.model}
            status={modelsList.length > 0 ? true : false}
            type="text"
          />
          <InputSelectBar
            list={bodyTypeList}
            placeholder="Body Type"
            name="body"
            setFormValue={setFormValue}
            value={form.body}
            type="text"
          />
          <InputSelectBar
            list={priceList}
            placeholder="Price"
            name="price"
            standard="PLN"
            setFormValue={setFormValue}
            value={form.price}
            type="number"
          />
          <InputSelectBar
            list={[...yearList].reverse()}
            placeholder="Year of production"
            name="yearOfPruduction"
            setFormValue={setFormValue}
            value={form.yearOfPruduction}
            type="number"
          />
          <InputSelectBar
            list={fuelList}
            placeholder="Fuel Type"
            name="fuel"
            setFormValue={setFormValue}
            value={form.fuel}
            type="text"
          />
          <InputSelectBar
            list={mileageList}
            placeholder="Mileage"
            setFormValue={setFormValue}
            name="mileage"
            value={form.mileage}
            type="number"
          />
          <InputSelectBar
            list={conditionDamagedList}
            placeholder="Condition Damage"
            name="condition"
            setFormValue={setFormValue}
            value={form.condition}
            type="text"
          />
          <InputSelectBar
            list={powerList}
            placeholder="Power"
            name="power"
            setFormValue={setFormValue}
            value={form.power}
            type="number"
          />
          <InputSelectBar
            list={gearList}
            placeholder="Transmission"
            name="transmission"
            setFormValue={setFormValue}
            value={form.transmission}
            type="text"
          />
          <InputSelectBar
            list={driveList}
            placeholder="Drive type"
            name="drive"
            setFormValue={setFormValue}
            value={form.drive}
            type="text"
          />
          <InputSelectBar
            list={capasityList}
            placeholder="Capasity"
            name="capasity"
            setFormValue={setFormValue}
            value={form.capasity}
            type="text"
          />
        </div>
        <CreateOfferDesc setFormValue={setFormValue} />
        <CreateOfferImages
          addFormImage={addFormImage}
          removeFormImage={removeFormImage}
          form={form.images}
        />
        <CreateOfferActions clearForm={clearForm} />
      </form>
    </div>
  );
}
