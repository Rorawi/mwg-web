import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/mwg.hub.png";

import styles from "../components/swiper.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

export const SwiperComp = () => {
  const responsiveOptions = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  };
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2}
        // navigation
        breakpoints={responsiveOptions}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        loop={true}
        onSlideChange={() => console.log("slide change")}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.card_box}>
          <div className={styles.img_div}>
            <img src={img} />
          </div>
          <div className={styles.text_box}>
            <h2>Web & Software development</h2>
            <p>
              Web Development made easy. We develop responsive and device-ready
              websites in HTML5, CSS3, JavaScript, Php and other known
              frameworks.
            </p>
           <Link to="/about"> <button>Read More</button></Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.card_box}>
          <div className={styles.img_div}>
            <img src={img} />
          </div>
          <div className={styles.text_box}>
            <h2>Technology Hub</h2>
            <p>
              Mobile Web Ghana as a hub offers services to startups and
              individuals to aid them their formative years up on till when they
              fully-fletched businesses.
            </p>
           <Link to="/about"> <button>Read More</button></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.card_box}>
          <div className={styles.img_div}>
            <img src={img} />
          </div>
          <div className={styles.text_box}>
            <h2>Open data Projects</h2>
            <p>
              We undertake a number of projects that seek to open up government
              data to the general public, establish a data
              analysis/visualization’ culture & build the capacity of open data
              enthusiasts.
            </p>
           <Link to="/about"><button>Read More</button></Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.card_box}>
          <div className={styles.img_div}>
            <img src={img} />
          </div>
          <div className={styles.text_box}>
            <h2>IT consultancy</h2>
            <p>
              Mobile Web Ghana as a hub offers services to startups and
              individuals to aid them their formative years up on till when they
              fully-fletched businesses.
            </p>
           <Link to="/about"> <button>Read More</button></Link>
          </div>
        </SwiperSlide>

        {/* edit swiper */}
      </Swiper>
    </div>
  );
};
