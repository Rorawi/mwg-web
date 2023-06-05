

import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin,FaFacebookSquare} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styles from "../components/footer.module.css";
import { Link } from "react-router-dom";
import mwgLogo from "../assets/mwg-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.talk_sec}>
        <p>
          Let's
          <span> Talk</span>
        </p>

        <div className={styles.message_us}>
          <FiMail className={styles.mail_svg} />
          <input type="text" placeholder="Your Email Address" />
          <button>
            <FiArrowRight />
          </button>
        </div>
      </div>

      <section className={styles.details}>
        <div className={styles.profile}>
          <div className={styles.logoDiv}>
            <Link>
              <img src={mwgLogo} alt="MWG Logo" className={styles.img} />
            </Link>
            <h2>Who we are</h2>
          </div>
          <p>
            Mobile Web Ghana is a technology and entrepreneurship hub that is
            dedicated to empowering the youth to develop mobile and web
            applications and open data solutions to solve local problems.
          </p>
        </div>

        {/* Work enquiries */}
        <div className={styles.work_enquiries}>
          <h2>Work enquiries</h2>
          <p className="font-poppins text-[14px]">
            Do you have any ideas for us?
            <br />
            We would love to welcome your suggestions
            <p>
              <span className=" font-bold">Email: </span>
              <a href="#">mwg@gmail.com</a>
            </p>
          </p>
        </div>

        {/* Address */}
        <div className={styles.address}>
          <h2>My Address</h2>
          <p>GA-0000 000,StreetName St.</p>
          <p>Ghana</p>
        </div>

        {/* Socials*/}
        <div className={styles.socials}>
          <h2>Follow Us</h2>
          <div>
            <Link to="https://www.facebook.com/MobileWebGhana/">
              <FaFacebookSquare/>
            </Link>

            <Link to="https://www.instagram.com/mobilewebgh/">
              <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/company/mobile-web-ghana/">
              <FaLinkedin />
            </Link>
            {/* <SiGmail className="mx-2.5 text-[17px] mb-[5px] " /> */}
          </div>
        </div>
      </section>

      <hr />

      <p className={styles.hr_p}>
        &copy; 2023 mobilewebghana. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
