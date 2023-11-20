import { Navigate, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Market from './Market';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import ProfileUpdateForm from './ProfileUpdateForm';
import SignupForm from './SignUpForm';
/** List of Route components for routing
 *
 * props:
 *  - signup (function to handle submission of SignupForm)
 *  - login (function to handle submission of LoginForm)
 *  - update (function to handle submission of ProfileUpdateForm)
 *  - currUser (object with user data)
 *
 * App -> RoutesList -> {HompePage, UserProfile, Market, Forms}
 */
function RoutesList({ signup, login, update, currUser }) {
  return (

    <Routes>
      {currUser
        ?
        <>
          <Route path="/market" element={<Market />} />
          <Route path="/users/:username" element={<UserProfile />} />
          <Route path="/profile" element={<ProfileUpdateForm update={update} />} />
        </>
        :
        <>
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="/login" element={<LoginForm login={login} />} />
        </>
      }
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

  );
}

export default RoutesList;