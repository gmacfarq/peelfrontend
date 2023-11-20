import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/SignUpForm.css";
import Alerts from "./Alerts";
const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  confirmPassword: "",
};
/** Component to render and handle submission of login form
 *
 *  props:
 *  - login (function from parent component to login a user)
 *
 *  RoutesList -> SignUpForm
 */
function SignUpForm({ SignUp }) {
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
      await SignUp(formData);
      navigate("/jobs");
    } catch (errs) {
      setAlerts(errs);
    }
  }

  //TODO: alert component with props for type of alert and array of messages
  return (
    <div className="form-page">
      <div className="form-wrapper">
        <div className="container">
          <div className="frame">
            <div className="text-wrapper">Sign Up</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <div className="text-input-required">
                <label className="label" htmlFor="firstName">First Name*</label>
                <input
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  className="text-block"
                  placeholder="Your First Name"
                />
              </div>
              <div className="text-input-required">
                <label className="label" htmlFor="lastName">Last Name*</label>
                <input
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  className="text-block"
                  placeholder="Your Last Name"
                />
              </div>
              <div className="text-input-required">
                <label className="label" htmlFor="email">Email*</label>
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="text-block"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="text-input-required">
                <label className="label" htmlFor="password">Password*</label>
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
              <div className="text-input-required">
                <label className="label" htmlFor="confirmPassword">Re-Type Password*</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  className="text-block"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="div">
                <button className="button">
                  Join PEEL!
                </button>
              </div>
            </div>
          </form>
          {alerts && <Alerts messages={alerts} />}
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;