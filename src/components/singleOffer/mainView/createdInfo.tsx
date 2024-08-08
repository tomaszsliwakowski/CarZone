import "./mainView.scss";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import toast from "react-hot-toast";

export default function CreatedInfo() {
  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
    toast.success("Copied!");
  }

  return (
    <div className="createdInfo">
      <div className="box">
        <span>
          <MdOutlineLocalOffer />
        </span>
        <p>8 sierpnia 2024 4:47</p>
      </div>
      <div className="link" onClick={() => copyToClip()}>
        <span>
          <FaExternalLinkAlt />
        </span>
        <p>Copy link</p>
      </div>
    </div>
  );
}
