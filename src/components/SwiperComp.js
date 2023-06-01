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

export const SwiperComp = () => {
  const responsiveOptions = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
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
        onSlideChange={() => console.log("slide change")}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.card_box}>
            <div className={styles.img_div}>
                <img src={img}/>
            </div>
            <div className={styles.text_box}>
                
            </div>
            
        </SwiperSlide>

        <SwiperSlide className={styles.card_box}>
            <div className={styles.img_div}>
                <img src={img}/>
            </div>
            <div className={styles.text_box}>
                
            </div>
        </SwiperSlide>
        {/* edit swiper */}
      </Swiper>
    </div>
  );
};
