import React, { useState, useRef, useEffect } from "react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/mwg.hub.png";
import profile from "../assets/profile.jpg";

import mastercard from "../assets/Mastercard-logo.png";
import amspaces_logo from "../assets/amspaces_logo.png";
import odc_logo from "../assets/odc.png";
import us_embasy_logo from "../assets/us_embasy_logo.jpg";
import gdc_logo from "../assets/gdc_logo.png";
import mwg_logo from "../assets/mwg-logo.png";

import styles from "../components/swiper.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
//import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SwiperCore, { Pagination } from "swiper";

import { Link } from "react-router-dom";
import { BsFillPersonFill, BsClockFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";

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
        spaceBetween={25}
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
            <Link to="/blog">
              Read More
              <AiOutlineArrowRight />
            </Link>
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
            <Link to="/blog">
              Read More
              <AiOutlineArrowRight />
            </Link>
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
            <Link to="/blog">
              Read More
              <AiOutlineArrowRight />
            </Link>
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
            <Link to="/blog">
              Read More
              <AiOutlineArrowRight />
            </Link>
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
            <Link to="/blog">
              Read More
              <AiOutlineArrowRight />
            </Link>
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
            <Link to="/blog">
              Read More
              <AiOutlineArrowRight />
            </Link>
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

export const LogoSwiper = () => {
  const responsiveOptions = {
    1024: {
      slidesPerView: 5,
    },

    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 5,
    },
  };
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        // navigation
        breakpoints={responsiveOptions}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true, hide: true }}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        loop={true}
        autoplay={true}
        disableoninteraction="false"
        onSlideChange={() => console.log("slide change")}
        className={[styles.swiper, styles.logo_swiper]}
      >
        <SwiperSlide className={styles.logo_swiperslide}>
          <img src={mastercard} className={styles.logo} />
        </SwiperSlide>
        <SwiperSlide className={styles.logo_swiperslide}>
          <img src={odc_logo} className={styles.logo} />
        </SwiperSlide>
        <SwiperSlide className={styles.logo_swiperslide}>
          <img src={amspaces_logo} className={styles.logo} />
        </SwiperSlide>
        <SwiperSlide className={styles.logo_swiperslide}>
          <img src={gdc_logo} className={styles.logo} />
        </SwiperSlide>
        <SwiperSlide className={styles.logo_swiperslide}>
          <img src={us_embasy_logo} className={styles.logo} />
        </SwiperSlide>
        <SwiperSlide className={styles.logo_swiperslide}>
          <img src={mwg_logo} className={styles.logo} />
        </SwiperSlide>
        {/* edit swiper */}
      </Swiper>
    </div>
  );
};

export const TestimonialSwiper = () => {
  SwiperCore.use([Pagination]);
  const swiperRef = useRef(null);

  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

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
        spaceBetween={25}
        slidesPerView={3}
        loop={true}
        breakpoints={responsiveOptions}
        pagination={{ clickable: false }}
        effect="fade"
        className={styles.swiper}
      >
        <SwiperSlide className={styles.testimonial_card_box}>
          <div className={styles.img_div}>
            <img src={profile} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <p>
              Mobile Web Ghana has changed lives and inspired hope. Their
              impactful work is making a difference in our community.
            </p>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <h2>Adwoa</h2>
            <h3>Frontend Developer</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.testimonial_card_box}>
          <div className={styles.img_div}>
            <img src={profile} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <p>
              I am incredibly grateful for the support and resources provided by
              Mobile Web Ghana. They are truly making a positive impact in the lives
              of those in need.{" "}
            </p>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <h2>Asantewaa</h2>
            <h3>App Developer</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.testimonial_card_box}>
          <div className={styles.img_div}>
            <img src={profile} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <p>
              Choosing to work with Mobile Web Ghana has been a life-changing
              decision. Their dedication and passion for helping others is
              commendable.
            </p>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <h2>Asante</h2>
            <h3>Backend Developer</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.testimonial_card_box}>
          <div className={styles.img_div}>
            <img src={profile} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <p>
              I have witnessed firsthand the incredible work done by Mobile Web Ghana.
              Their commitment to making a difference is truly inspiring.
            </p>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <h2>Winifred</h2>
            <h3>Senior Frontend Developer</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.testimonial_card_box}>
          <div className={styles.img_div}>
            <img src={profile} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <p>
              Being involved with Mobile Web Ghana has been an enriching experience.
              They have created a platform for change and are transforming
              lives.{" "}
            </p>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <h2>Winifred</h2>
            <h3>Senior Frontend Developer</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.testimonial_card_box}>
          <div className={styles.img_div}>
            <img src={profile} alt="our image" />
          </div>

          <div className={styles.text_box}>
            <p>
              I can confidently say that Mobile Web Ghana is an organization that
              truly cares. Their efforts to bring about social change are
              commendable, and I am proud to support their mission.
            </p>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <h2>Winifred</h2>
            <h3>Senior Frontend Developer</h3>
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
