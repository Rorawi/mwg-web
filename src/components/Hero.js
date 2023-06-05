import React from "react";
import img1 from "../assets/mwg-swiper1.jpg";
import styles from "../components/carousel.module.css";
import { FaArrowRight } from "react-icons/fa";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Technology hubs",
      "Data Science",
      "IT consultancy",
      "Startup incubation and mentorship",
      "Girls in ICT",
    ],
    loop: 0 | false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div>
      <div className={styles.image_container}>
        <img src={img1} alt="Image" className={styles.image} />
        <div className={styles.text_overlay}>
          <div className={styles.glass_effect}>
            <div className={styles.text}>
              <h3>WE OFFER</h3>
              <h1>
                {" "}
                <span>{text}</span>
                <Cursor cursorColor="#ffc107" />
              </h1>
            </div>
            <p>
              Mobile Web Ghana is a technology and entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and open data solutions to solve local problems.
            </p>
            <button>
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
