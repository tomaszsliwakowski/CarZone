import Listing from "./listing";
import "./profile.scss";
import ProfileHeader from "./profileHeader";

export default function ProfileBody() {
  return (
    <div className="profile__body">
      <ProfileHeader />
      <Listing />
    </div>
  );
}
