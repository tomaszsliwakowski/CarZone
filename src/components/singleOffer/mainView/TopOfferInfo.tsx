import "./mainView.scss";

export default function TopOfferInfo() {
  return (
    <div className="topOfferInfo">
      <h1>Dodge Challenger Automatik R/T Plus</h1>
      <ul className="content">
        <li> {"2015"}&nbsp;&bull;&nbsp;</li>
        <li> {"176 000" + " km"}</li>
        <li> &nbsp;&bull;&nbsp;{"5 654" + " cm3"}</li>
        <li> &nbsp;&bull;&nbsp;{"Gasoline"}</li>
      </ul>
      <div className="price">
        <h3>104 000</h3>
        <p>PLN</p>
      </div>
    </div>
  );
}
