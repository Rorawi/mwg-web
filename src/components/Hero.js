import React from "react";
import img1 from "../assets/mwg-swiper1.jpg";
import styles from "../components/carousel.module.css";
import { FaArrowRight } from "react-icons/fa";

import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function Hero() {
  const [text] = useTypewriter({
    words: ["Technology hubs", "Data Science", "IT consultancy", "Startup incubation and mentorship", "Girls in ICT"],
    loop: 0| false,
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
              We would love to have you Onipa ben na ogyina Nyame ne nnipa ntem
              N'enyiwa tsed3 Ogyaframa Ne papa dze Ne nsamu john hun N'w soro
              esum no mu D3 ewia rehyer3n dzendzen Onipa ben ne Oyi,Onipa ben ne
              o no ne anuonyam Hene no, Mara ne mara no Oy3 Alpha ne Omega
              Ahy3ase ne ewiei Ne dzin y3 Onwanwni y3 Asomdwoe Hene Nyame y3
              Odumakoma Egya Mberesante nyinara
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
