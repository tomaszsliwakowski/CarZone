import { create } from "zustand";

export type OfferForm = {
  brand: string;
  model: string;
  body: string;
  price: string;
  yearOfPruduction: string;
  fuel: string;
  mileage: string;
  condition: string;
  power: string;
  transmission: string;
  drive: string;
  capasity: string;
  phone: string;
};

type OfferStore = {
  form: OfferForm;
  setFormValue: (element: keyof OfferForm, value: string) => void;
};

export const useCreateOfferFormStore = create<OfferStore>((set) => ({
  form: {
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
    capasity: "",
    phone: "",
  },
  setFormValue: (element, value) => {
    set((state) => ({ form: { ...state.form, [element]: value } }));
    if (element === "brand" && value === "") {
      set((state) => ({ form: { ...state.form, model: "" } }));
    }
  },
}));
