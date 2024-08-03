import "./footer.scss";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <div className="contact">
            <h4>Finds us</h4>
            <ul>
              <li>
                <a href={"https://www.facebook.com/"} target="_blank">
                  <BsFacebook />
                  Facebook
                </a>
              </li>
              <li>
                <a href={"https://www.instagram.com/"} target="_blank">
                  <AiFillInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  <BsYoutube />
                  YouTube
                </a>
              </li>
              <li>
                <a href="mailto: CarZone@gmail.com" target="_blank">
                  <MdEmail /> Email
                </a>
              </li>
            </ul>
          </div>
          <div className="other">
            <h4>CarZone</h4>
            <ul>
              <li>
                <Link to={"/"}>Help</Link>
              </li>
              <li>
                <Link to={"/"}>Privacy policy</Link>
              </li>
              <li>
                <Link to={"/"}>Cookie policy</Link>
              </li>
              <li>
                <Link to={"/"}>Statute</Link>
              </li>
            </ul>
          </div>
        </div>
        <span>&copy; Copyright {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
