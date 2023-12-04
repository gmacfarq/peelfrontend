import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/HomePage.css";
import "../stylesheets/StyleGuide.css";
import userContext from "./userContext";
import {
  orangesPic,
  localization,
  numberOne,
  eco
} from "../generalPics";
/** Component to render Home Page for PEEL
 *
 * RoutesList -> HomePage
 */
function HomePage() {

  const navigate = useNavigate();

  function sendToSignUp(){
    navigate("/signup");
  }

  return (
    <div className="home-page">
      <div className="overlap-wrapper">
        <div className="overlap">

          <img className="oranges" alt="Oranges" src={orangesPic} />
          <div className="landing-page">
            <div className="header">
              <div className="header-2">
                <div className="frame-2">
                  <div className="frame-3">
                    <div className="element-source-for-local-wrapper">
                      <div className="element-source-for-local">#1&nbsp;&nbsp;Source for Local Food</div>
                    </div>
                    <div className="frame-4">
                      <div className="join-the-bunch">
                        <div className="header-blurb">
                          <span className="span">{"Join"} </span>
                          <span className="text-wrapper-2">
                            {"the Bunch,"}
                          </span>
                        </div>
                        <div className="header-blurb-2">
                          <div className="wrap-blurb">
                            <span className="text-wrapper-3">
                              Localize Food <br />
                            </span>
                          </div>
                          <div className="wrap-blurb">
                            <span className="text-wrapper-3"> With{" "} </span>
                            <span className="text-wrapper-3"> {" "} </span>
                            <span className="text-wrapper-4">PEEL</span>
                          </div>
                        </div>
                      </div>
                      <p className="p">Everything we need is just around the block!</p>
                    </div>
                    <div className="div-wrapper" onClick={sendToSignUp}>
                      <div className="text-wrapper-5" onClick={sendToSignUp}>Join PEEL</div>
                    </div>
                  </div>
                  {/* <div className="feature-information">
                    <div className="div-2">
                      <div className="text-wrapper-6">5,000+</div>
                      <div className="text-wrapper-7">Customers</div>
                    </div>
                    <div className="div-2">
                      <div className="text-wrapper-6">8,000+</div>
                      <div className="text-wrapper-7">Deliverys</div>
                    </div>
                    <div className="div-2">
                      <div className="text-wrapper-6">1,000+</div>
                      <div className="text-wrapper-7">Ratings</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="mission-wrapper">
              <div className="container">
                <div className="frame-6">
                  <p className="WHY-CHOOSE-US-FOR">
                    <span className="text-wrapper-8">WHY CHOOSE US FOR</span>
                    <span className="span"> YOUR FOOD</span>
                  </p>
                </div>
                <div className="frame-7">
                  <div className="card">
                    <div className="frame-8">
                      <div className="icon">
                        <div className="overlap-group">

                          <img className="localization" alt="Localization" src=
                            {localization} />
                        </div>
                      </div>
                      <div className="frame-wrapper">
                        <div className="frame-9">
                          <div className="text-wrapper-10">Localization of Food</div>
                          <p className="in-the-u-s-the">
                            In the U.S., the average produce we consume travels 1500 miles before it touches our plate.
                            That&#39;s equivalent to a round trip from Denver to LA. <br />
                            <br />
                            PEEL localizes the food system by connecting growers, buyers, small businesses, and consumers,
                            who each play a role in our system.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-2">
                    <div className="frame-10">
                      <div className="icon">
                        <div className="overlap-group">
                          <img className="number-one" alt="Number one" src={numberOne} />
                        </div>
                      </div>
                      <div className="frame-12">
                        <div className="text-wrapper-10">PEEL Standards</div>
                        <p className="over-of-fruit-and">
                          Over 70% of fruit and vegetables in the U.S. contain pesticide residue. 90% of this is
                          detected in the body, causing harm to humans. <br />
                          <br />
                          PEEL solves for this by setting a quality standard of no sprays, no pesticides, and
                          regenerative agricultural practices for every product sold through our platform.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-3">
                    <div className="frame-13">
                      <div className="icon">
                        <div className="overlap-group">

                          <img className="eco" alt="eco" src={eco} />
                        </div>
                      </div>
                      <div className="frame-14">
                        <div className="frame-9">
                          <div className="text-wrapper-10">Sustainability</div>
                          <p className="the-birds-the-bees">
                            The birds, the bees, and the trees are experiencing biodiversity loss like no other. Over 75%
                            of Earth&#39;s land areas are substantially degraded, undermining the well-being of 3.2
                            billion people. <br />
                            <br />
                            PEEL is committed to environmental impact that protects Mother Earth, our humanity, and our
                            longevity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="review-wrapper">
              <div className="review">
                <div className="frame-11">
                  <div className="frame-16">
                    <div className="what-are-people-wrapper">
                      <p className="what-are-people">
                        <span className="text-wrapper-12">
                          What Are People <br />
                          Saying{" "}
                        </span>
                        <span className="span">About Us</span>
                      </p>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="previous-button">
                      <img className="navigation" alt="Navigation" src="image-3.svg" />
                    </div>
                    <div className="next-button">
                      <img className="navigation" alt="Navigation" src="image-2.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-18">
                  <div className="testimonials">
                    <div className="overlap-group-2">
                      <div className="card-hovered" />
                      <p className="text-wrapper-13">
                        The cilantro is fresh!!! It&#39;s really delicious, it&#39;s going to be a routine buy for me. I
                        recommend this grower because they really take care to ensure quality!
                      </p>
                      <div className="text-wrapper-14">Rolling Tacos &amp; Salsas</div>
                      <div className="image-placeholder" />
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-2">
                      <div className="card-hovered-2" />
                      <p className="text-wrapper-13">
                        The basil and tomatoes I received are outstanding! The freshness and flavor are top-notch. I
                        can&#39;t recommend this place enough; they clearly prioritize delivering the best ingredients.
                      </p>
                      <div className="text-wrapper-14">PizzAmore Ristorante</div>
                      <div className="image-placeholder-2" />
                    </div>
                  </div>
                  <div className="testimonials-2">
                    <div className="overlap-group-2">
                      <div className="card-hovered-3" />
                      <p className="text-wrapper-15">
                        The raspberries and carrots have my customers absolutely raving I will be ordering more ASAP!
                      </p>
                      <div className="text-wrapper-16">Jennifer’s Cakes</div>
                      <div className="image-placeholder-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="frame-19">
              <div className="title">
                <div className="text-wrapper-17">Featured Growers</div>
                <p className="ENJOY-THE-BEST">
                  <span className="text-wrapper-8">
                    ENJOY THE BEST PRODUCE AND GET <br />{" "}
                  </span>
                  <span className="span">DISCOUNTS</span>
                </p>
              </div>
              <div className="frame-20">
                <div className="menu">
                  <div className="frame-21">
                    <div className="user">Brown Dog Farm</div>
                    <div className="produce">Vegetables, Fruits</div>
                  </div>
                </div>
                <div className="menu-2">
                  <div className="frame-21">
                    <div className="user">Altius Farms</div>
                    <div className="produce">Vegetables, Fruits</div>
                  </div>
                </div>
                <div className="menu-3">
                  <div className="group-wrapper">
                    <div className="group-2">
                      <div className="user-2">Mountain Gardens</div>
                      <div className="produce-2">Herbs, Vegetables</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="subscribe-wrapper">
              <div className="subscribe">
                <div className="overlap-3">
                  <div className="frame-22">
                    <div className="overlap-group-3">
                      <div className="rectangle-3" />
                    </div>
                  </div>
                  <div className="frame-23">
                    <div className="frame-24">
                      <div className="frame-25">
                        <div className="text-wrapper-17">Stay up to date</div>
                        <p className="subscribe-to-get-the">
                          Subscribe to Get the Latest <br />
                          from PEEL
                        </p>
                      </div>
                      <p className="we-recommend-that">
                        We recommend that you to subscribe to our newsletter!
                        <br />
                        drop your email below to get updates, tips, and promos from PEEL
                      </p>
                    </div>
                    <div className="frame-26">
                      <div className="frame-27">
                        <div className="text-wrapper-18">Enter your email address</div>
                      </div>
                      <div className="frame-28">
                        <div className="text-wrapper-19">Subscribe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
