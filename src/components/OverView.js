import React from "react";
import styles from "../components/overview.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import { FaPeopleCarry, FaBullseye,FaLightbulb } from "react-icons/fa";

function OverView() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <div className={styles.overlay}>
            <div className={styles.banner_text}>
              <h1>Mobile Web Ghana</h1>
              <h3>| Who we are</h3>
            </div>
          </div>
          <div className={styles.img_div}>
            <img src={img1} />
          </div>
        </div>

        <section className={styles.statements}>
          <div className={styles.statement}>
            <FaPeopleCarry />

            <h2>Who We Are</h2>
            <p>
              Mobile Web Ghana is a technology & entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and also come up with open data solutions to solve
              local problems.
            </p>
          </div>
          <div className={styles.statement}>
            <FaBullseye />

            <h2>Our Mission</h2>
            <p>
              To create a community of mobile technology entrepreneurs in Ghana.
            </p>
          </div>
          <div className={styles.statement}>
            <FaLightbulb />

            <h2>Our Vision</h2>
            <p>
              To create a generation of technology change agents and leaders who
              will use their skills to solve local problems in our communities.
            </p>
          </div>
        </section>


        
      </div>
    </>
  );
}

export default OverView;
