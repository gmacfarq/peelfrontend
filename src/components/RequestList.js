import { useContext } from 'react';
import "../stylesheets/RequestList.css";
import '../stylesheets/StyleGuide.css';
import userContext from './userContext';

function RequestList() {

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

export default RequestList;