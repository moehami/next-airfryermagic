// components/AboutSection.jsx
import Image from 'next/image';
export default function AboutSection() {
  return (
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

               <Image
                  src="/assets/images/hx3dzpX8sWWZ.jpeg"
                  alt="About Air Fryer Magic"
                  width={800}
                  height={600}
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
    );
}
