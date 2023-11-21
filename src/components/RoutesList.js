import { Navigate, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Market from './Market';
import HomePage from './HomePage';
import ProfileUpdateForm from './ProfileUpdateForm';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
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
          <Route path="/signup" element={<SignUpForm signup={signup} />} />
          <Route path="/signin" element={<SignInForm login={login} />} />
        </>
      }
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

  );
}

export default RoutesList;