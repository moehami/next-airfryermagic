// ExampleComponent.jsx

export const metadata: Metadata = {
  title: "Air Fryer Magic",
  description: "Discover the ultimate air fryer hacks and delicious recipes that will transform your cooking experience",
}
const ExampleComponent = () => {
  return (
    <div>
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, minimum-scale=1"
  />
  <link
    rel="shortcut icon"
    href="assets/images/HkcqL2rMkyaB.jpeg"
    type="image/x-icon"
  />
  

 
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.navbar-fixed-top {\n  top: auto;\n}\n#mobiriseBanner.container-banner {\n  height: 8rem;\n  opacity: 1;\n  -webkit-animation: 4s linear animationHeight;\n  -moz-animation: 4s linear animationHeight;\n    -o-animation: 4s linear animationHeight;\n       animation: 4s linear animationHeight;\n       transition: all  0.5s;\n}\n#mobiriseBanner.container-banner.container-banner-closing {\n  pointer-events: none;\n  height: 0;\n  opacity: 0;\n  -webkit-animation: 0.5s linear animationClosing;\n  -moz-animation:  0.5s linear animationClosing;\n    -o-animation:  0.5s linear animationClosing;\n       animation:  0.5s linear animationClosing;\n}\n#mobiriseBanner .banner {\n  min-height: 8rem;\n  position:fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  padding: 10px;\n  opacity:1;\n  -webkit-animation: 4s linear animationBanner;\n  -moz-animation: 4s linear animationBanner;\n    -o-animation: 4s linear animationBanner;\n       animation: 4s linear animationBanner;\n  z-index: 1031;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#mobiriseBanner .banner p {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  animation: none;\n  visibility: visible;\n}\n#mobiriseBanner .buy-license {\n  text-decoration: underline;\n}\n#mobiriseBanner .banner .btn {\n  margin: 0.3rem 0.5rem;\n  animation: none;\n  visibility: visible;\n}\n.navbar.opened {\n    z-index: 1032;\n}\n@-webkit-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-moz-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-o-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n   @keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-webkit-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n@-moz-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n@-o-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n   @keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n   \n@-webkit-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@-moz-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@-o-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n\n@media(max-width: 767px) {\n  #mobiriseBanner.container-banner {\n    height: 12rem;\n  }\n  #mobiriseBanner .banner {\n    min-height: 12rem;\n  }\n  @-webkit-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-moz-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-o-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n    @keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-webkit-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n  @-moz-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n  @-o-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n    @keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n\n  @-webkit-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @-moz-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @-o-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n}\n"
    }}
  />
  <section
    data-bs-version="5.1"
    className="menu menu2 cid-uryiHhYxdN"
    once="menu"
    id="menu-5-uryiHhYxdN"
  >
    <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <img
              src="assets/images/HkcqL2rMkyaB.jpeg"
              alt="Mobirise Website Builder"
              style={{ height: "4.3rem" }}
            />
          </span>
          <span className="navbar-caption-wrap">
            <a className="navbar-caption text-black display-4" href="#">
Air Fryer Magic
            </a>
          </span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-bs-toggle="collapse"
          data-target="#navbarSupportedContent"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger">
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li className="nav-item">
              <a
                className="nav-link link text-black display-4"
                href="https://airfryerwonder.com/category/air-frying-articles/"
              >
                Hacks
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link text-black display-4"
                href="https://airfryerwonder.com/"
                aria-expanded="false"
              >
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link text-black display-4"
                href="https://airfryerwonder.com/"
              >
                Tips
              </a>
            </li>
          </ul>
          <div className="navbar-buttons mbr-section-btn">
            <a
              className="btn btn-primary display-4"
              href="https://airfryerwonder.com/"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>
  <section
    data-bs-version="5.1"
    className="header16 cid-uryiHhZg34 mbr-fullscreen mbr-parallax-background"
    id="hero-17-uryiHhZg34"
  >
    <div className="container-fluid">
      <div className="row">
        <div className="content-wrap col-12 col-md-12">
          <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
            <strong>Fry Like A Pro</strong>
          </h1>
          <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
            Unlock the secrets to crispy perfection with our air fryer magic!
          </p>
          <div className="mbr-section-btn">
            <a
              className="btn btn-white-outline display-7"
              href="https://aflover.vercel.app/"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="header14 cid-uryiHhZpv0 mbr-parallax-background"
    id="call-to-action-1-uryiHhZpv0"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-12 col-md-12 col-lg-8">
          <div className="card-wrapper">
            <div className="card-box align-center">
              <h1 className="card-title mbr-fonts-style mb-4 display-1">
                <strong>Join the Frying Revolution Today!</strong>
              </h1>
              <div className="mbr-section-btn mt-4">
                <a
                  className="btn btn-primary display-7"
                  href="https://aflover.vercel.app/"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="article8 cid-uryiHi0lyH"
    id="about-us-8-uryiHi0lyH"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-md-12 col-lg-10">
          <div className="card-wrapper">
            <div className="image-wrapper d-flex justify-content-center mb-4">
              <img
                src="assets/images/hx3dzpX8sWWZ.jpeg"
                alt="Mobirise Website Builder"
              />
            </div>
            <div className="card-content-text">
              <h3 className="card-title mbr-fonts-style mbr-white mt-3 mb-4 display-2">
                <strong>Our Frying Passion</strong>
              </h3>
              <div className="row card-box align-left">
                <div className="item features-without-image col-12">
                  <div className="item-wrapper">
                    <p className="mbr-text mbr-fonts-style display-7">
                      Welcome to Air Fryer Magic, where we take air frying to a
                      whole new level! If you think air fryers are just for
                      reheating leftovers, think again! Weâre here to turn your
                      kitchen into a crispy wonderland, one hack at a time.
                    </p>
                  </div>
                </div>
                <div className="item features-without-image col-12">
                  <div className="item-wrapper">
                    <p className="mbr-text mbr-fonts-style display-7">
                      Our team of culinary wizards has scoured the globe for the
                      most outrageous and delicious air fryer recipes. From
                      crispy Brussels sprouts that even your kids will love to
                      decadent desserts that will make your dentist weep, weâve
                      got it all. Get ready to impress your friends and family
                      with your newfound frying prowess!
                    </p>
                  </div>
                </div>
                <div className="item features-without-image col-12">
                  <div className="item-wrapper">
                    <p className="mbr-text mbr-fonts-style display-7">
                      But wait, thereâs more! Weâre not just about recipes;
                      weâre all about the hacks! Learn how to make your air
                      fryer work harder than your ex on a Friday night. With our
                      tips, youâll be air frying like a pro in no time. So,
                      buckle up and get ready for a wild ride in the world of
                      air frying!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="gallery10 cid-uryiHi0MSw"
    id="features-61-uryiHi0MSw"
  >
    <div className="container-fluid">
      <div className="loop-container">
        <div
          className="item display-1"
          data-linewords="Crispy Delights * Quick & Easy * Healthy Alternatives * Flavor Explosion * Time-Saving Tips * Guilt-Free Indulgence *"
          data-direction={-1}
          data-speed="0.05"
        >
          âï¸ Best offers âï¸ Free delivery âï¸ Perfect design âï¸ Comfort âï¸
          Support 24/7 âï¸ Vibes
        </div>
        <div
          className="item display-1"
          data-linewords="Crispy Delights * Quick & Easy * Healthy Alternatives * Flavor Explosion * Time-Saving Tips * Guilt-Free Indulgence *"
          data-direction={-1}
          data-speed="0.05"
        >
          âï¸ Best offers âï¸ Free delivery âï¸ Perfect design âï¸ Comfort âï¸
          Support 24/7 âï¸ Vibes
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="features03 cid-uryiHi02vE"
    id="news-1-uryiHi02vE"
  >
    <div className="container-fluid">
      <div className="row justify-content-center mb-5">
        <div className="col-12 content-head">
          <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Latest Air Fryer Buzz</strong>
            </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="item features-image col-12 col-md-6 col-lg-3 active">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img
                src="assets/images/qCf6hCvXsaxR.jpeg"
                alt="Mobirise Website Builder"
                title=""
              />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style mt-0 mb-2 display-5">
                <strong>Unlocking the Secrets of Air Frying</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                2024-10-18
              </p>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                Discover the hidden hacks that will revolutionize your air
                frying game! Get ready to impress your taste buds!
              </p>
              <div className="mbr-section-btn item-footer">
                <a href="" className="btn item-btn btn-primary display-7">
                  Learn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img
                src="assets/images/0G5k5hXnU9Qb.jpeg"
                alt="Mobirise Website Builder"
                title=""
                data-slide-to={1}
                data-bs-slide-to={1}
              />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style mb-2 mt-0 display-5">
                <strong>5 Must-Try Air Fryer Recipes</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                2024-10-18
              </p>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                From crispy fries to juicy chicken, these recipes will make you
                the air fryer king or queen!
              </p>
              <div className="mbr-section-btn item-footer">
                <a href="" className="btn item-btn btn-primary display-7">
                  Learn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img
                src="assets/images/xYCYbD5tjfLU.jpeg"
                alt="air fryer lover"
                title=""
                data-slide-to={2}
                data-bs-slide-to={2}
              />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style mb-2 mt-0 display-5">
                <strong>Air Fryer Myths Busted!</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                2024-10-18
              </p>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                Think you know everything about air frying? Think again! Weâre
                here to set the record straight!
              </p>
              <div className="mbr-section-btn item-footer">
                <a href="" className="btn item-btn btn-primary display-7">
                  Learn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-3">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img
                src="assets/images/bwQ7N0K8SlqD.jpeg"
                alt="af lover"
                title=""
                data-slide-to={2}
                data-bs-slide-to={2}
              />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style mb-2 mt-0 display-5">
                <strong>Join Our Air Fryer Community!</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                2024-10-18
              </p>
              <p className="mbr-text mbr-fonts-style mb-3 display-7">
                Connect with fellow air fryer enthusiasts and share your wildest
                cooking adventures!
              </p>
              <div className="mbr-section-btn item-footer">
                <a href="" className="btn item-btn btn-primary display-7">
                  Learn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="people05 cid-uryiHi0dPq"
    id="testimonials-5-uryiHi0dPq"
  >
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-12 mb-0 content-head">
          <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
            <strong>Raves</strong>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="item features-without-image col-12 col-md-6 col-lg-4 active">
          <div className="item-wrapper">
            <div className="card-box align-left">
              <p className="card-text mbr-fonts-style display-7">
                I never knew air frying could be this fun!
              </p>
              <div className="img-wrapper mt-4 mb-3">
                <img
                  src="assets/images/0EtdO9aZTZu9.jpeg"
                  alt=""
                  data-slide-to={0}
                  data-bs-slide-to={0}
                />
              </div>
              <h5 className="card-title mbr-fonts-style display-7">
                <strong>Emily Johnson</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-6 col-lg-4">
          <div className="item-wrapper">
            <div className="card-box align-left">
              <p className="card-text mbr-fonts-style display-7">
                These recipes changed my lifeâseriously!
              </p>
              <div className="img-wrapper mt-4 mb-3">
                <img
                  src="assets/images/jHrmTYzohVWO.jpeg"
                  data-slide-to={1}
                  data-bs-slide-to={1}
                  alt=""
                />
              </div>
              <h5 className="card-title mbr-fonts-style display-7">
                <strong>Mark Thompson</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-6 col-lg-4">
          <div className="item-wrapper">
            <div className="card-box align-left">
              <p className="card-text mbr-fonts-style display-7">
                Iâm addicted to my air fryer now!
              </p>
              <div className="img-wrapper mt-4 mb-3">
                <img
                  src="assets/images/IIQ09wqLiiTR.jpeg"
                  data-slide-to={2}
                  data-bs-slide-to={2}
                  alt=""
                />
              </div>
              <h5 className="card-title mbr-fonts-style display-7">
                <strong>Sarah Lee</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-6 col-lg-4">
          <div className="item-wrapper">
            <div className="card-box align-left">
              <p className="card-text mbr-fonts-style display-7">
                Who knew healthy could taste this good?
              </p>
              <div className="img-wrapper mt-4 mb-3">
                <img
                  src="assets/images/h509pThsapnj.jpeg"
                  data-slide-to={4}
                  data-bs-slide-to={4}
                  alt=""
                />
              </div>
              <h5 className="card-title mbr-fonts-style display-7">
                <strong>James Smith</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-6 col-lg-4">
          <div className="item-wrapper">
            <div className="card-box align-left">
              <p className="card-text mbr-fonts-style display-7">
                Air frying is my new obsession!
              </p>
              <div className="img-wrapper mt-4 mb-3">
                <img
                  src="assets/images/sAvklX0INj9f.jpeg"
                  data-slide-to={6}
                  data-bs-slide-to={6}
                  alt=""
                />
              </div>
              <h5 className="card-title mbr-fonts-style display-7">
                <strong>Laura Green</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-6 col-lg-4">
          <div className="item-wrapper">
            <div className="card-box align-left">
              <p className="card-text mbr-fonts-style display-7">
                I canât believe I waited so long to try this!
              </p>
              <div className="img-wrapper mt-4 mb-3">
                <img
                  src="assets/images/4T3uGZvtakvy.jpeg"
                  data-slide-to={7}
                  data-bs-slide-to={7}
                  alt=""
                />
              </div>
              <h5 className="card-title mbr-fonts-style display-7">
                <strong>David Brown</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="features023 cid-uryiHi1obn"
    id="metrics-1-uryiHi1obn"
  >
    <div className="container">
      <div className="row content-row justify-content-center">
        <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
          <div className="item-wrapper">
            <div className="title mb-2 mb-md-3">
              <span className="num mbr-fonts-style display-1">
                <strong>1,000+</strong>
              </span>
            </div>
            <h4 className="card-title mbr-fonts-style display-5">
              <strong>Happy Customers</strong>
            </h4>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
          <div className="item-wrapper">
            <div className="title mb-2 mb-md-3">
              <span className="num mbr-fonts-style display-1">
                <strong>500+</strong>
              </span>
            </div>
            <h4 className="card-title mbr-fonts-style display-5">
              <strong>Recipes Shared</strong>
            </h4>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
          <div className="item-wrapper">
            <div className="title mb-2 mb-md-3">
              <span className="num mbr-fonts-style display-1">
                <strong>100%</strong>
              </span>
            </div>
            <h4 className="card-title mbr-fonts-style display-5">
              <strong>Satisfaction Guaranteed</strong>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="gallery4 cid-uryiHi1oZN"
    id="gallery-12-uryiHi1oZN"
  >
    <div className="container-fluid gallery-wrapper">
      <div className="row justify-content-center">
        <div className="col-12 content-head"></div>
      </div>
      <div className="grid-container">
        <div
          className="grid-container-1"
          style={{ transform: "translate3d(-200px, 0px, 0px)" }}
        >
          <div className="grid-item">
            <img src="assets/images/LsgQY7HAi0YB.jpeg" alt=" " />
          </div>
          <div className="grid-item">
            <img src="assets/images/HRpmPh1SyU16.jpeg" alt="" />
          </div>
          <div className="grid-item">
            <img src="assets/images/zLQECDlM7thk.jpeg" alt="#" />
          </div>
          <div className="grid-item">
            <img src="assets/images/ZwJsTCZCoweJ.jpeg" alt="#" />
          </div>
        </div>
        <div
          className="grid-container-2"
          style={{ transform: "translate3d(-70px, 0px, 0px)" }}
        >
          <div className="grid-item">
            <img src="assets/images/06Jhh0dMSK9x.jpeg" alt="" />
          </div>
          <div className="grid-item">
            <img src="assets/images/sn9Z3ca4vGjX.jpeg" alt="" />
          </div>
          <div className="grid-item">
            <img src="assets/images/lmgkLAMhEgVQ.jpeg" alt="" />
          </div>
          <div className="grid-item">
            <img src="assets/images/0puwNW8j7Y03.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="header18 cid-uryiHi2F7W mbr-fullscreen"
    data-bg-video="https://www.youtube.com/embed/-gKvayYQVcg?autoplay=1&loop=1&playlist=-gKvayYQVcg&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
    id="video-5-uryiHi2F7W"
  >
    <div
      className="mbr-overlay"
      style={{ opacity: "0.3", backgroundColor: "rgb(0, 0, 0)" }}
    />
    <div className="container-fluid">
      <div className="row"></div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="list05 cid-uryiHilUxX"
    id="faq-3-uryiHilUxX"
  >
    <div className="container">
      <div className="col-12 mb-5 content-head">
        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
          <strong>Air Fryer FAQs: Get Your Fry On!</strong>
        </h3>
      </div>
      <div className="row justify-content-center ">
        <div className="col-12 col-lg-8">
          <div className="item features-without-image col-12 active">
            <div className="item-wrapper">
              <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                <strong>What can I cook in an air fryer?</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                Almost anything! From veggies to desserts, unleash your culinary
                creativity!
              </p>
            </div>
          </div>
          <div className="item features-without-image col-12">
            <div className="item-wrapper">
              <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                <strong>Are air fryers really healthier?</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                Yes! Less oil, more flavor, fewer regrets!
              </p>
            </div>
          </div>
          <div className="item features-without-image col-12">
            <div className="item-wrapper">
              <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                <strong>Can I use aluminum foil in it?</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                Absolutely! Just donât block the airflow!
              </p>
            </div>
          </div>
          <div className="item features-without-image col-12">
            <div className="item-wrapper">
              <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                <strong>How do I clean my air fryer?</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                Easy peasy! Just a quick wipe and rinse!
              </p>
            </div>
          </div>
          <div className="item features-without-image col-12">
            <div className="item-wrapper">
              <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                <strong>Whatâs the best air fryer brand?</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                Ninja, Philips, or Cosoriâtake your pick!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="image02 cid-uryiHilmKb mbr-fullscreen mbr-parallax-background"
    id="image-13-uryiHilmKb"
  >
    <div className="container">
      <div className="row" />
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="social4 cid-uryiHilHB7"
    id="follow-us-1-uryiHilHB7"
  >
    <div className="container">
      <div className="media-container-row">
        <div className="col-12">
          <h3 className="mbr-section-title align-center mb-5 mbr-fonts-style display-2">
            <strong>Join Our Air Fryer Family</strong>
          </h3>
          <div className="social-list align-center">
            <a
              className="iconfont-wrapper bg-facebook m-2 "
              target="_blank"
              href="#"
            >
              <span className="socicon-facebook socicon" />
            </a>
            <a
              className="iconfont-wrapper bg-twitter m-2"
              href="#"
              target="_blank"
            >
              <span className="socicon-twitter socicon" />
            </a>
            <a
              className="iconfont-wrapper bg-instagram m-2"
              href="#"
              target="_blank"
            >
              <span className="socicon-instagram socicon" />
            </a>
            <a
              className="iconfont-wrapper bg-tiktok m-2"
              href="#"
              target="_blank"
            >
              <span className="socicon-tiktok socicon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="form5 cid-uryiHimeIg"
    id="contact-form-3-uryiHimeIg"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 content-head">
          <div className="mbr-section-head mb-5">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Get in Touch!</strong>
            </h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
          <form
            action="#"
            method="POST"
            className="mbr-form form-with-styler"
            data-form-title="Form Name"
          >
            <input
              type="hidden"
              name="email"
              data-form-email="true"
              defaultValue="AqfV1RrbB26pSV35I5IMQnPpHL7aEPM9kw135xh67t9dT4lwzA7Ok0TazZmf/9RZYb6W7SjMC90mswz6S/lRYJp+YBZFTAajzIz+tKvitCc9lybt7FLOLZXilAw3Jz9l"
            />
            <div className="row">
              <div
                hidden="hidden"
                data-form-alert=""
                className="alert alert-success col-12"
              >
                Thanks for filling out the form!
              </div>
              <div
                hidden="hidden"
                data-form-alert-danger=""
                className="alert alert-danger col-12"
              >
                Oops...! some problem!
              </div>
            </div>
            <div className="dragArea row">
              <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  data-form-field="name"
                  className="form-control"
                  defaultValue=""
                  id="name-contact-form-3-uryiHimeIg"
                />
              </div>
              <div
                className="col-md col-sm-12 form-group mb-3"
                data-for="email"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  data-form-field="email"
                  className="form-control"
                  defaultValue=""
                  id="email-contact-form-3-uryiHimeIg"
                />
              </div>
              <div className="col-12 form-group mb-3 mb-3" data-for="url">
                <input
                  type="url"
                  name="url"
                  placeholder="Phone"
                  data-form-field="url"
                  className="form-control"
                  defaultValue=""
                  id="url-contact-form-3-uryiHimeIg"
                />
              </div>
              <div className="col-12 form-group mb-3" data-for="textarea">
                <textarea
                  name="textarea"
                  placeholder="Message"
                  data-form-field="textarea"
                  className="form-control"
                  id="textarea-contact-form-3-uryiHimeIg"
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                <button type="submit" className="btn btn-primary display-7">
                  Send It!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="contacts02 map1 cid-uryiHimK9D"
    id="contacts-2-uryiHimK9D"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 content-head">
          <div className="mbr-section-head mb-5">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Contact Us</strong>
            </h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="card col-12 col-md-12 col-lg-6">
          <div className="card-wrapper">
            <div className="text-wrapper">
              <ul className="list mbr-fonts-style display-7">
                <li className="mbr-text item-wrap">
                  Phone:
                  <a href="tel:1-800-FRY-LOVE" className="text-black">
                    1-800-FRY-LOVE
                  </a>
                </li>
                <li className="mbr-text item-wrap">
                  WhatsApp:
                  <a href="tel:1-800-FRY-LOVE" className="text-black">
                    1-800-FRY-LOVE
                  </a>
                </li>
                <li className="mbr-text item-wrap">
                  Email:
                  <a href="mailto:info@airfryerlove.com" className="text-black">
                    info@airfryerlove.com
                  </a>
                </li>
                <li className="mbr-text item-wrap">Address: NYC USA</li>
                <li className="mbr-text item-wrap">
                  Working Hours: Mon-Fri: 9am - 5pm
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="map-wrapper col-md-12 col-lg-6">
          <div className="google-map">
            <iframe
              frameBorder={0}
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCt1265A4qvZy9HKUeA8J15AOC4SrCyZe4&q=New%20York%20USA"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    data-bs-version="5.1"
    className="footer3 cid-uryiHimvKA"
    once="footers"
    id="footer-3-uryiHimvKA"
  >
    <div className="container">
      <div className="row">
        <div className="row-links">
          <ul className="header-menu">
            <li className="header-menu-item mbr-fonts-style display-5">
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li className="header-menu-item mbr-fonts-style display-5">
              <a href="#" className="text-white">
                Recipes
              </a>
            </li>
            <li className="header-menu-item mbr-fonts-style display-5">
              <a href="#" className="text-white">
                Hacks
              </a>
            </li>
            <li className="header-menu-item mbr-fonts-style display-5">
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 mt-4">
          <div className="social-row">
            <div className="soc-item">
              <a href="https://aflover.vercel.app/" target="_blank">
                <span className="mbr-iconfont socicon socicon-facebook display-7" />
              </a>
            </div>
            <div className="soc-item">
              <a href="#" target="_blank">
                <span className="mbr-iconfont socicon-twitter socicon" />
              </a>
            </div>
            <div className="soc-item">
              <a href="#" target="_blank">
                <span className="mbr-iconfont socicon-instagram socicon" />
              </a>
            </div>
            <div className="soc-item">
              <a href="#" target="_blank">
                <span className="mbr-iconfont socicon socicon-linkedin" />
              </a>
            </div>
            <div className="soc-item">
              <a href="#" target="_blank">
                <span className="mbr-iconfont socicon socicon-twitch" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 mt-5">
          <p className="mbr-fonts-style copyright display-7">
            {" "}
            2024 Air Fryer Magic. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </section>
  <script src="../public/assets/web/assets/jquery/jquery.min_rnd1729249664608.js"></script>
  <script src="../public/assets/bootstrap/js/bootstrap.bundle.min_rnd1729249664608.js"></script>
  <script src="../public/assets/parallax/jarallax_rnd1729249664608.js"></script>
  <script src="../public/assets/smoothscroll/smooth-scroll_rnd1729249664608.js"></script>
  <script src="../public/assets/ytplayer/index_rnd1729249664608.js"></script>
  <script src="../public/assets/dropdown/js/navbar-dropdown_rnd1729249664608.js"></script>
  <script src="../public/assets/scrollgallery/scroll-gallery_rnd1729249664608.js"></script>
  <script src="../public/assets/vimeoplayer/player_rnd1729249664608.js"></script>
  <script src="../public/assets/theme/js/script_rndD1729249664608.js"></script>
  <script src="../public/assets/formoid/formoid.min_rnd1729249664608.js"></script> 
</>

    </div>
  );
};

export default ExampleComponent;
