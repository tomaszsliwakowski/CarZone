import { FaCheck } from "react-icons/fa";
import "./auth.scss";

type PROPS = {
  checked: boolean;
  checkHandler: Function;
  error: boolean;
};

export default function StatuteCheckbox({
  checked,
  checkHandler,
  error,
}: PROPS) {
  return (
    <div className="statute">
      <div className={`statute__checkbox ${error ? "error" : ""}`}>
        <input
          type="checkbox"
          name="statute"
          checked={checked}
          onChange={() => checkHandler()}
        />
        <div className="statute__checkbox__icon">
          {checked ? <FaCheck /> : null}
        </div>
      </div>
      <div className="statute__info">
        <p>
          I confirm that I have read the Regulations and accept their content
          and acknowledge that CarZone will process my personal data in
          accordance with the Privacy Policy and the Policy regarding cookies
          and similar technologies, which I have read.
        </p>
        {error ? <span>Please select agree to continue</span> : null}
      </div>
    </div>
  );
}
