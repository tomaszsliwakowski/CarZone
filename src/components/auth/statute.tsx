import { FaCheck } from "react-icons/fa";
import "./auth.scss";

export default function StatuteCheckbox() {
  return (
    <div className="statute">
      <div className="statute__checkbox">
        <input type="checkbox" name="statute" />
        <div className="statute__checkbox__icon">
          <FaCheck />
        </div>
      </div>
      <div className="statute__info">
        <p>
          I confirm that I have read the Regulations and accept their content
          and acknowledge that CarZone will process my personal data in
          accordance with the Privacy Policy and the Policy regarding cookies
          and similar technologies, which I have read.
        </p>
      </div>
    </div>
  );
}
