import React from "react";
import { Link } from "react-router-dom";

import "../css/footer.css";
import googleLogo from "../assets/images/icons/google.png";
import instagramLogo from "../assets/images/icons/instagram.png";
import twitterLogo from "../assets/images/icons/twitter.png";
import linkedinLogo from "../assets/images/icons/linkedin.png";
import youtubeLogo from "../assets/images/icons/youtube.png";
import githubLogo from "../assets/images/icons/github.png";
import mail from "../assets/images/icons/mail.png";
import phone from "../assets/images/icons/phone.png";
import location from "../assets/images/icons/pin.png";
import DSCdarkLogo from "../assets/images/DSC BPDC Dark Vertical-Logo.png";
import { Fragment } from "react";
import { Mail, Map, Phone } from "react-feather";

const socialMediaInfo = [
  {
    image: googleLogo,
    href: "https://gdsc.community.dev/bits-pilani-dubai/",
  },
  {
    image: instagramLogo,
    href: "https://instagram.com/gdsc_bpdc",
  },
  {
    image: youtubeLogo,
    href: "https://www.youtube.com/@gdscbpdc",
  },
  {
    image: linkedinLogo,
    href: "https://www.linkedin.com/company/google-developer-student-club-bits-dubai/",
  },
  {
    image: githubLogo,
    href: "https://github.com/GDSC-BPDC"
  }
];

class Footer extends React.Component {
  renderSocialMediaIcons = () => {
    return socialMediaInfo.map((item) => {
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          <div className="social-media-icons-card">
            <img
              src={item.image}
              className="social-media-icons-image"
              alt="social-media-icon"
            />
          </div>
        </a>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#2970E6"
            fill-opacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,106.7C480,128,600,160,720,165.3C840,171,960,149,1080,128C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="footer-main">
          <div className="two-sections">
            <div className="two-sections-text">
              <p className="h4 darkText">Get inside the hustle.</p>
              <p className="h4" style={{ color: "#1a1a1a" }}>
                Join the community.
              </p>
            </div>
            <div className="social-media-icons">
              {this.renderSocialMediaIcons()}
            </div>
          </div>

          {/* <div className="h-separator"></div> */}

          <div className="three-sections">
            <div className="section section-icons">
              <span>
                <Mail className="white" size={20} />
                <p
                  style={{ textAlign: "left", marginLeft: 20 }}
                  className="t2 white"
                >
                  <a
                    className="footer-link"
                    href="mailto:gdsc@dubai.bits-pilani.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gdsc@dubai.bits-pilani.ac.in
                  </a>
                </p>
              </span>

              <span>
                <Phone className="white" size={20} />
                <p
                  style={{ textAlign: "left", marginLeft: 20 }}
                  className="t2 white"
                >
                  +971 52 677 5009
                </p>
              </span>

              <span>
                <Map className="white" size={20} />
                <p
                  style={{ textAlign: "left", marginLeft: 20 }}
                  className="t2 white"
                >
                  <a
                    className="footer-link"
                    href="https://goo.gl/maps/Gy9HShLF7m4osfQS8"
                    target="_blank"
                  >
                    GDSC BITS Pilani, Dubai Campus
                  </a>
                </p>
              </span>
            </div>

            <div className="newsletter-section">
              {/* <p className="t2 white ta-right">
                Get notified with latest news by subscribing <br /> to the
                monthly{" "}
                <span style={{ color: "#1a1a1a", fontWeight: 800 }}>
                  {" "}
                  GDSC BPDC Newsletter{" "}
                </span>
              </p>
              <div className="newsletter-container">
                <input type="text" placeholder="johndoe@email.com" />
                <div
                  className="secondary-button"
                  style={{ margin: "0px 0px 0 20px", height: 45 }}
                >
                  <p className="t2 white ta-center">Subscribe</p>
                </div>
              </div> */}
              {/* <p className="t2 white ta-right">
                <span
                  style={{
                    display: "flex",
                    fontWeight: 800,
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  Subscribe to our Newsletter
                </span>
                <iframe
                  title="news-letter"
                  src="https://gdscBPDC.substack.com/embed"
                  // width=""
                  height="180"
                  style={{ background: "#2970E6" }}
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </p> */}
            </div>
          </div>

          {/* <p className="t2 white ta-center">Designed by Yatish Kelkar</p>
        <p className="t2 white ta-center">Developed by Yatish Kelkar and Rohit Dalvi</p> */}
        </div>
      </Fragment>
    );
  }
}

export default Footer;
