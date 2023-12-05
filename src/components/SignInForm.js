import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Forms.css";
import Alerts from "./Alerts";
const INITIAL_FORM_STATE = {
  password: "",
  email: "",
};
/** Component to render and handle submission of login form
 *
 *  props:
 *  - login (function from parent component to login a user)
 *
 *  RoutesList -> SignUpForm
 */
function SignInForm({ login }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [alerts, setAlerts] = useState(null);
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(currFormData => ({
      ...currFormData,
      [name]: value,
    }));

  }

  /** handle form submission */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      navigate("/market");
    } catch (errs) {
      setAlerts(errs);
    }
  }

  /** navigate to signup */
  function sendToSignUp() {
    navigate("/signup");
  }

  //TODO: alert component with props for type of alert and array of messages
  return (
    <div className="form-page">
      <div className="form-wrapper">
        <div className="container">
          <div className="frame">
            <div className="text-wrapper">Sign In</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <div className="input-required">
                <label className="label" htmlFor="email">
                  Email*
                  <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="text-block"
                    type="email"
                    placeholder="Your Email"
                  />
                </label>
              </div>
              <div className="button-input">
                <div className="input-required">
                  <div>

                    <label className="label" htmlFor="password">
                      Password*
                    </label>
                    <input
                      id="password"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                      className="text-block"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div >
                  <button onClick={handleSubmit}>
                    Sign In!
                  </button>
                </div>
              </div>
            </div>

          </form>
          {alerts && <Alerts messages={alerts} />}
        </div>
        <span>Don't have an account yet?</span>
        <br></br>
        <p>
        <span className="sign-up" onClick={sendToSignUp}>
        Sign Up!
        </span>
        </p>
      </div>
    </div>
  );
}

export default SignInForm;