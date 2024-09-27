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
  images: FormData[];
  desc: string[];
};

type OfferStore = {
  form: OfferForm;
  setFormValue: <OfferForm, T>(element: keyof OfferForm, value: T) => void;
  addFormImage: (value: FormData) => void;
  removeFormImage: (value: number) => void;
  clearForm: () => void;
};

const emptyForm: OfferForm = {
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
  images: [],
  desc: [],
};

export const useCreateOfferFormStore = create<OfferStore>((set) => ({
  form: emptyForm,
  setFormValue: (element, value) => {
    set((state) => ({ form: { ...state.form, [element]: value } }));
    if (element === "brand" && value === "") {
      set((state) => ({ form: { ...state.form, model: "" } }));
    }
  },
  addFormImage: (value) => {
    set((state) => {
      let images = state.form.images;
      if (images.length === 0) {
        images = [value];
      } else {
        images = [...images, value];
      }
      return {
        form: { ...state.form, images: images },
      };
    });
  },
  removeFormImage: (value) => {
    set((state) => {
      let images = state.form.images;
      images.splice(value, 1);
      return {
        form: { ...state.form, images: [...images] },
      };
    });
  },
  clearForm: () => {
    set(() => ({ form: emptyForm }));
  },
}));
