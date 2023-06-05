import React from "react";
import styles from "../components/about.module.css";
import img1 from "../assets/mwg-swiper1.jpg";

export default function AboutUs() {
  return (
    <>
      <div class={styles.banner}>
        <div className={styles.overlay}>
          <div class={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Who we are</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      <section>
        
        {/* Testimonials section will go here */}
      </section>
    </>
  );
}
