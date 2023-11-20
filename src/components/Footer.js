import '../stylesheets/Footer.css';

function Footer() {

return(
  <footer className="footer">
              <div className="section">
                <div className="footer-frame">
                  <div className="PEEL-wrapper">PEEL</div>
                  <p className="blurb">
                    PEEL is the pioneer of
                    <br />
                    building a local food
                    <br />
                    system marketplace.
                  </p>
                </div>
                <div className="text-wrapper-21">©Copyright PEEL</div>
              </div>
              <div className="section-2">
                <div className="text-wrapper-22">Feature</div>
                <div className="phone">
                  <div className="text-wrapper-23">Contact</div>
                </div>
                <div className="phone-2">
                  <div className="text-wrapper-23">About us</div>
                </div>
              </div>
              <div className="section-3">
                <div className="text-wrapper-22">Get in Touch</div>
                <div className="address">
                  <div className="text-wrapper-24">Some Address in Colorado</div>
                  <div className="div-wrapper-2">
                    <div className="two-tone">
                      <div className="overlap-group-4">
                        <img className="secondary-color" alt="Secondary color" src="secondary-color.svg" />
                        <img className="primary-color" alt="Primary color" src="primary-color.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email">
                  <input className="contact-joinpeel-com" placeholder="contact@joinpeel.com" type="email" />
                  <div className="div-wrapper-2">
                    <div className="outlined">
                      <img className="icon-color" alt="Icon color" src="icon-color.svg" />
                    </div>
                  </div>
                </div>
                <div className="phone-3">
                  <div className="text-wrapper-24">+1 303-688-3295</div>
                  <div className="div-wrapper-2">
                    <div className="icon-color-wrapper">
                      <img className="icon-color-2" alt="Icon color" src="icon-color-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-4">
                <div className="frame-30">
                  <img className="frame-31" alt="Frame" src="frame-8440.svg" />
                  <div className="text-wrapper-25">Follow our social media.</div>
                </div>
              </div>
            </footer>
)

}

export default Footer;