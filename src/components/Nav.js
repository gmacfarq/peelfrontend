import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { peelLogo } from '../generalPics';
import "../stylesheets/Nav.css";
import '../stylesheets/StyleGuide.css';
import userContext from './userContext';
/** Navigation bar present throughout PEEL App
 *
 * App -> Nav
 */
function Nav({ logout }) {

  const { currUser } = useContext(userContext);
  const navigate = useNavigate();

  function logoutAndSendHome() {
    logout();
    navigate("/");
  }

  // <div className="top-header">
  //               <div className="logo">
  //                 <div className="frame">
  //                   <img className="make-local-the-focal" alt="Make local the focal" src="make-local-the-focal-1.png" />
  //                 </div>
  //               </div>
  //               <div className="menu-header">
  //                 <div className="text-wrapper">Home</div>
  //                 <div className="text-wrapper">Contact</div>
  //                 <div className="text-wrapper">About Us</div>
  //               </div>
  //               <button className="button">
  //                 <div className="div">Sign In</div>
  //               </button>
  //             </div>
  return (
    <div className="nav-wrap">
      <nav className="navbar">
        <div className="logo-wrapper">
          <div className="logo-frame">
            <div>
              <NavLink className="nav-link" to="/">
                <img className="logo" alt="PEEL Logo" src={peelLogo} />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="nav-menu">
          {currUser.data
            ?
            <>
              <NavLink className="nav-link link-wrapper" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link link-wrapper" to="/requests">
                Orders
              </NavLink>
              <NavLink className="nav-link link-wrapper" to="/market">
                Market
              </NavLink>
              </>
          : <>
              <NavLink className="nav-link link-wrapper" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link link-wrapper" to="/#contact">
                Contact
              </NavLink>
              <NavLink className="nav-link link-wrapper" to="/#about">
                About Us
              </NavLink>
            </>
          }

        </div>

        {currUser.data
          ?
          <div className='signed-in' >
            <div className="div">
              <p className="button" onClick={logoutAndSendHome}>
                {`Log out`}
              </p>
            </div>
            {/* <NavLink className="nav-link button" to="/profile">
              <div className="div">My Profile</div>
            </NavLink> */}
          </div>
          :
          <div>
            <NavLink className="nav-link button" to="/signin">
              <div className="div">Sign In</div>
            </NavLink>
          </div>
        }

      </nav>
    </div>
  );
}

export default Nav;