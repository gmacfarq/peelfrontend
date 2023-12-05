import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Forms.css";
import Alerts from "./Alerts";
const INITIAL_FORM_STATE = {
  name: "",
  description: "",
  website: "",
};
/** Component to render and handle submission of business form
 *
 *  props:
 *  - makeBusiness (function from parent component to login a user)
 *
 *  RoutesList -> BusinessForm
 */
function BusinessForm({ createBusiness }) {
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
      await createBusiness(formData);
      navigate("/");
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
                <label className="label" htmlFor="name">
                  Business Name*
                </label>
                <input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="text-block"
                  placeholder="What is your Business's Name?"
                />

              </div>
              <div className="input-required">
                <label className="label" htmlFor="description">
                  Business Description
                </label>
                <input
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                  className="text-block"
                  placeholder="Tell us about you!"
                />

              </div>
              <div className="button-input">
                <div className="input-required">
                  <label className="label" htmlFor="website">
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    onChange={handleChange}
                    value={formData.website}
                    className="text-block"
                    placeholder="Do you have a website?"
                  />

                </div>
                <div>
                  <button onClick={handleSubmit}>
                    Join PEEL!
                  </button>
                </div>
              </div>
            </div>
          </form>
          {alerts && <Alerts messages={alerts} />}
        </div>
      </div>
    </div>
  );
}

export default BusinessForm;