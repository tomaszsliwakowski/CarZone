import { FaPlus, FaTrash } from "react-icons/fa";
import "./createOffer.scss";
import { useEffect, useRef, useState } from "react";

type PROPS = {
  addFormImage: (value: FormData) => void;
  removeFormImage: (value: number) => void;
  form: FormData[];
};

export default function CreateOfferImages({
  addFormImage,
  form,
  removeFormImage,
}: PROPS) {
  const [images, setImages] = useState<string[]>([]);
  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (!e.target.files[0]) return;
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      addFormImage(formData);
      const imageRef = inputRef.current;
      if (imageRef && imageRef.value !== "") {
        imageRef.value = "";
      }
    }
  };
  useEffect(() => {
    if (form.length === 0 && images.length > 0) {
      setImages([]);
    }
    if (form.length === 0 && images.length === 0) return;
    const imagesUrl = form
      .map((el) => {
        const image = el.get("image") as File;
        if (image) {
          const url = URL.createObjectURL(image);
          return url;
        } else {
          return;
        }
      })
      .filter((item) => item !== undefined);

    setImages(imagesUrl);
  }, [form]);

  return (
    <div className="createOffer__form__images">
      <ul>
        <li className="add__button">
          <FaPlus />
          <input
            ref={inputRef}
            type="file"
            className="upload"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleImageChange(e)
            }
          />
        </li>
        {images.map((item, id) => (
          <li key={id} className="form__image">
            <img src={item} alt="image" />
            <div
              className="form__iamge__trash"
              onClick={() => removeFormImage(id)}
            >
              <FaTrash />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const imagecon = [
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
];
