import { useContext } from 'react';
import "../stylesheets/Profile.css";
import '../stylesheets/StyleGuide.css';
import userContext from './userContext';

function ProfilePage() {

  const { currUser } = useContext(userContext);

  return (
    <div className="profile-page">
      <div className="profile-wrapper">
        <div className="container">
          <div className="frame">
            <div className="text-wrapper">Profile</div>
          </div>
          <div className="profile-info">
            <div className="profile-pic">
              <img src={currUser.data.profile_pic_url} alt="profile image"/>
            </div>
            <div className="profile-details">
              <div className="profile-name">{currUser.data.firstName} {currUser.data.lastName}</div>
              <div className="profile-username">@{currUser.data.username}</div>
              <div className="profile-email">{currUser.data.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;