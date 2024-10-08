import { useState } from "react";
import "./mainView.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import TopOfferInfo from "./TopOfferInfo";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlinePhotoCamera } from "react-icons/md";

const images: string[] = [
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndsOGFtdmw5OHZubjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0CdCLHA83bESaYjEKMUyiZP4RGecGYU-a1YN_IlNPgw/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImF2emxqZzdybmpmZTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.oAqqB0z9NLyxj7dPJ0kxKXeDaTHETIX5IhZ7MBbBA3o/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFxcGR5ZzE1OTU3YjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.fAxd-EWe2V21Mw1XI5oc9aCO_Ggx3HIPboGTi19MHBA/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjllMzFvaHNidWJibjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.SIQWZ_i1poZqj_Z8gENUDObj6Z5O4eZBsvRaEnKguS4/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImcwZjQ4NWJoOG4xZTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.bGwtttt79uh7sR_dQgNIr2-kPt0ln5V2x-lLDbbemwQ/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imo2Ynd2eXF2bW5uMi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.pm8adCepV3plxfqSDfKQcGBDdFv-IUfp2timKdTKfno/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRmeTUzMHdod3dwdS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.GlQGsLdY8gnphFxCErc4pwLH7FdeuayX06NyI3QfhhY/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlhOG1oeG5xcHgxMi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.yIyR2Avj3cvaRgUTIWST_UhZNcdmU6n9PRS_T46ZKZM/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inhwam1qYno4am01djItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Lx-YNQs5ElLBX5NKsnp-RpTvEronAjW20fs3un8J6AY/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB2Mjh0M2E5Zm1sbTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.akuNVWopcjlPkOHg_-8SP5_FoLbFrAlJI_fquBwkQgg/image;s=1440x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjU4a3M3MnM2bXFycTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.SgZ-ckeninOPkM9_VyrA4RnP3VVww0i7mAqOAgQ1g9E/image;s=1440x0;q=100",
];

export default function ImgSlider() {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [transformValue, setTransformValue] = useState<number>(0);
  const [isOpen, setisOpen] = useState<boolean>(false);
  const gap: number = 16;
  const imgWidth: number = 157;

  const currentImageHandler = (index: number): void => {
    const currentIndex: number = currentImg < 2 ? 2 : currentImg;
    setCurrentImg(index);
    if (index > currentImg) {
      if (index >= images.length - 3) {
        setTransformValue(
          (images.length - 5) * imgWidth + (images.length - 5) * gap
        );
      } else {
        setTransformValue((prev) =>
          index < 3
            ? (index - currentIndex) * imgWidth + (index - currentIndex) * gap
            : prev +
              (index - currentIndex) * imgWidth +
              (index - currentIndex) * gap
        );
      }
    } else if (index < currentImg && index < images.length - 3) {
      setTransformValue((prev) =>
        index < 3
          ? 0
          : prev -
            (currentIndex - index) * imgWidth -
            (currentIndex - index) * gap
      );
    }
  };

  const sliderHandler = (type: string): void => {
    if (type === "back") {
      setCurrentImg((prev) => (prev <= 0 ? prev : prev - 1));
      if (currentImg <= images.length - 3) {
        setTransformValue((prev) =>
          currentImg < 3 ? 0 : prev - imgWidth - gap
        );
      }
    } else if (type === "forward") {
      setCurrentImg((prev) => (prev < images.length - 1 ? prev + 1 : prev));
      if (currentImg >= 2 && currentImg < images.length - 3) {
        setTransformValue((prev) =>
          currentImg < 3 ? imgWidth + gap : prev + imgWidth + gap
        );
      }
    }
  };

  const sliderToggleHandler = (action: string) => {
    if (action === "open" && !isOpen) {
      setisOpen(true);
    } else if (action === "close" && isOpen) {
      setisOpen(false);
    }
  };

  const style = {
    transform: `translateX(-${transformValue}px)`,
  };

  return (
    <div className={`images ${isOpen ? "full" : ""}`}>
      <div className="fullScreen__offerInfo">
        <TopOfferInfo />
        <div className="close">
          <IoMdClose onClick={() => sliderToggleHandler("close")} />
        </div>
      </div>
      <div className="slider">
        <div className={`arrow back ${currentImg === 0 ? "off" : ""}`}>
          <IoIosArrowBack onClick={() => sliderHandler("back")} />
        </div>
        <div
          className="currentImage"
          onClick={() => sliderToggleHandler("open")}
        >
          <img src={images[currentImg]} alt="image" />
        </div>
        <div
          className={`arrow forward ${
            currentImg === images.length - 1 ? "off" : ""
          }`}
        >
          <IoIosArrowForward onClick={() => sliderHandler("forward")} />
        </div>
        <span
          className="fullScreen__icon"
          onClick={() => sliderToggleHandler("open")}
        >
          <BsArrowsFullscreen />
        </span>
        <div className="numberOfPhotos">
          <MdOutlinePhotoCamera />{" "}
          <span>
            {`${currentImg + 1}`}&nbsp;/&nbsp;{`${images.length}`}
          </span>
        </div>
      </div>
      <div className="smallSlider">
        <div style={style}>
          {images.map((image, index) => (
            <img
              src={image}
              alt="image"
              key={index}
              className={`${currentImg === index ? "current" : ""}`}
              onClick={() => currentImageHandler(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
