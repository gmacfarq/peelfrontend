import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Forms.css";
import Alerts from "./Alerts";
const INITIAL_FORM_STATE = {
  username: "",
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  confirmPassword: "",
  isGrower: true,
};
/** Component to render and handle submission of login form
 *
 *  props:
 *  - login (function from parent component to login a user)
 *
 *  RoutesList -> SignUpForm
 */
function SignUpForm({ signup }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [alerts, setAlerts] = useState(null);
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    if (name === "isGrower") {
      setFormData(currFormData => ({
        ...currFormData,
        [name]: value === "Grower",
      }));
    }
    else {
      setFormData(currFormData => ({
        ...currFormData,
        [name]: value,
      }));
    }
  }

  /** handle form submission */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/market");
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

              <div className="input-required">
                <label className="label" htmlFor="username">
                  Username*
                  <input
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                    className="text-block"
                    placeholder="Choose a username"
                  />
                </label>
              </div>
              <div className="input-required">
                <label className="label" htmlFor="firstName">
                  First Name*
                  <input
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    className="text-block"
                    placeholder="Your First Name"
                  />
                </label>
              </div>
              <div className="input-required">
                <label className="label" htmlFor="lastName">
                  Last Name*
                  <input
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    className="text-block"
                    placeholder="Your Last Name"
                  />
                </label>
              </div>
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
              <div className="input-required">
                <label className="label" htmlFor="password">
                  Password*
                  <input
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    className="text-block"
                    type="password"
                    placeholder="Password"
                  />
                </label>
              </div>
              <div className="input-required">
                <label className="label" htmlFor="confirmPassword">
                  Password*
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    className="text-block"
                    type="password"
                    placeholder="Password"
                  />
                </label>
              </div>
              <div className="input-required">
                <label className="label" htmlFor="isGrower">
                  Grower/Buyer*
                  <select
                    id="isGrower"
                    name="isGrower"
                    onChange={handleChange}
                    className="text-block"
                  >
                    <option value="Grower">Grower</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                </label>
              </div>
              <div className="div input-group">
                <button className="button" onClick={handleSubmit}>
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