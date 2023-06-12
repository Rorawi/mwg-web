import React from "react";
import styles from "../components/career.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import { FaBook, FaHandshake } from "react-icons/fa";
import { BiMessage, BiWorld } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

const Career = () => {
  return (
    <>
      <div class={styles.banner}>
        <div className={styles.overlay}>
          <div class={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Career</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>
      <section className={styles.career}>
        <div className={styles.text_box}>
          <h2>// About The Company</h2>
          <h1>
            We empower the <span>youth</span> to solve local problems
          </h1>
          <p>
            Mobile Web Ghana is a technology and entrepreneurship hub that is
            dedicated to empowering the youth to develop mobile and web
            applications and open data solutions to solve local problems. Our
            goal is to build the capacity of young tech-enthusiasts to be able
            to meet the demands of the tech industry in Ghana and beyond.We also
            create a conducive working environment for tech-businesses to thrive
            by offering them a co-working space, offices and start-up mentoring.
            We undertake some ICT for development projects.
          </p>

          <button>Join Our Team 
            <AiOutlineArrowRight/>
          </button>
        </div>

       <div>
       <div className={styles.career_details}>
          <div className={styles.career_detail}>
            <div className={styles.svg_div}>
              <FaHandshake />
            </div>
            <h2>Friendly Environment</h2>
          </div>
          <div className={styles.career_detail}>
            <div className={styles.svg_div}>
              <BiWorld />
            </div>
            <h2>One In a Miilion</h2>
          </div>
        </div>

        <div className={styles.career_details}>
          <div className={styles.career_detail}>
            <div className={styles.svg_div}>
              <BiMessage />
            </div>
            <h2>Open Communications</h2>
          </div>
          <div className={styles.career_detail}>
            <div className={styles.svg_div}>
              <FaBook />
            </div>
            <h2>Intellectual</h2>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};

export default Career;
