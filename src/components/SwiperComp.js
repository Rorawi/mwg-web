import React, { useState, useRef, useEffect } from "react";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/mwg.hub.png";

import styles from "../components/swiper.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Pagination } from "swiper";

import { Link } from "react-router-dom";
import { BsFillPersonFill, BsClockFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

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
            <Link to="/about">
              {" "}
              <button>Read More</button>
            </Link>
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
            <Link to="/about">
              {" "}
              <button>Read More</button>
            </Link>
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
            <Link to="/about">
              <button>Read More</button>
            </Link>
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
            <Link to="/about">
              {" "}
              <button>Read More</button>
            </Link>
          </div>
        </SwiperSlide>

        {/* edit swiper */}
      </Swiper>
    </div>
  );
};

export const BlogSwiper = () => {
  SwiperCore.use([Pagination]);
  const [length, setLength] = useState(false);
  const maxContent = 100;
  const swiperRef = useRef(null);

  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const text =
    "Media literacy skills have become increasingly essential in today’s digital age, where young people are constantly bombarded with information from various media sources. In Ghana, Mobile Web Ghana is actively involved in promoting media literacy among youth through our youth media literacy project. This initiative aims to equip young people with the necessary skills to critically analyze and navigate the media landscape, empowering them to become informed and responsible media consumers.";
  const responsiveOptions = {
    1024: {
      slidesPerView: 3,
    },

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
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        breakpoints={responsiveOptions}
        pagination={{ clickable: false }}
        effect="fade"
        className={styles.swiper}
      >
        <SwiperSlide className={styles.blog_card_box}>
          <div className={styles.img_div}>
            <img src={img} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <div className={styles.name_time}>
              <div className={styles.name}>
                <BsFillPersonFill />
                <h5>Mr.Prince</h5>
              </div>

              <div className={styles.time}>
                <BsClockFill />
                <h5>May 29,2023</h5>
              </div>
            </div>

            <h2>Teaching Media Literacy</h2>
            <p>{length ? text : `${text.slice(0, maxContent)}...`}</p>
            <a href="#">
              Read More
              <AiOutlineArrowRight />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.blog_card_box}>
          <div className={styles.img_div}>
            <img src={img} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <div className={styles.name_time}>
              <div className={styles.name}>
                <BsFillPersonFill />
                <h5>Talika</h5>
              </div>

              <div className={styles.time}>
                <BsClockFill />
                <h5>May 29,2023</h5>
              </div>
            </div>

            <h2>Teaching Media Literacy</h2>
            <p>{length ? text : `${text.slice(0, maxContent)}...`}</p>
            <a href="#">
              Read More
              <AiOutlineArrowRight />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.blog_card_box}>
          <div className={styles.img_div}>
            <img src={img} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <div className={styles.name_time}>
              <div className={styles.name}>
                <BsFillPersonFill />
                <h5>Issac</h5>
              </div>

              <div className={styles.time}>
                <BsClockFill />
                <h5>May 29,2023</h5>
              </div>
            </div>

            <h2>Teaching Media Literacy</h2>
            <p>{length ? text : `${text.slice(0, maxContent)}...`}</p>
            <a href="#">
              Read More
              <AiOutlineArrowRight />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.blog_card_box}>
          <div className={styles.img_div}>
            <img src={img} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <div className={styles.name_time}>
              <div className={styles.name}>
                <BsFillPersonFill />
                <h5>Winifred</h5>
              </div>

              <div className={styles.time}>
                <BsClockFill />
                <h5>May 29,2023</h5>
              </div>
            </div>

            <h2>Teaching Media Literacy</h2>
            <p>{length ? text : `${text.slice(0, maxContent)}...`}</p>
            <a href="#">
              Read More
              <AiOutlineArrowRight />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.blog_card_box}>
          <div className={styles.img_div}>
            <img src={img} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <div className={styles.name_time}>
              <div className={styles.name}>
                <BsFillPersonFill />
                <h5>Miss Florence</h5>
              </div>

              <div className={styles.time}>
                <BsClockFill />
                <h5>May 29,2023</h5>
              </div>
            </div>

            <h2>Teaching Media Literacy</h2>
            <p>{length ? text : `${text.slice(0, maxContent)}...`}</p>
            <a href="#">
              Read More
              <AiOutlineArrowRight />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.blog_card_box}>
          <div className={styles.img_div}>
            <img src={img} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <div className={styles.name_time}>
              <div className={styles.name}>
                <BsFillPersonFill />
                <h5>Estella</h5>
              </div>

              <div className={styles.time}>
                <BsClockFill />
                <h5>May 29,2023</h5>
              </div>
            </div>

            <h2>Teaching Media Literacy</h2>
            <p>{length ? text : `${text.slice(0, maxContent)}...`}</p>
            <a href="#">
              Read More
              <AiOutlineArrowRight />
            </a>
          </div>
        </SwiperSlide>

        <div className={styles.pagination}>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(0)}
          ></button>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(1)}
          ></button>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(2)}
          ></button>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(4)}
          ></button>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(6)}
          ></button>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(8)}
          ></button>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(10)}
          ></button>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(12)}
          ></button>
          <button
            className={styles.paginationButton}
            onClick={() => handlePaginationClick(0)}
          ></button>
        </div>
        {/* edit swiper */}
      </Swiper>
    </div>
  );
};
