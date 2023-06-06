import React from "react";
import styles from "../components/team.module.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import img1 from "../assets/mwg-swiper1.jpg";
import director from "../assets/director.jpg";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <>
      <section className={styles.team_sec}>
        {/* <h1 className={styles.heading}>Meet Our Team</h1>
        <p className={styles.heading_p}>
          Meet our amazing team of skilled professionals,
          <br /> dedicated to delivering exceptional results and exceeding
          expectations
        </p> */}
        <div className={styles.text_box}>
           <div>
           <h2>// About The Company</h2>
            <h1>
              We empower the <span>youth</span> to solve local problems
            </h1>
           </div>
            <p>
            Meet our amazing team of skilled professionals,
          <br /> dedicated to delivering exceptional results and exceeding
          expectations.
            </p>
          </div>
        <div className={styles.wrapper}>
          <div className={styles.profile}>
            <img src={director} alt="" className={styles.pro_img} />
            <div className={styles.dtl}>
              <h1 className={styles.name}>Florence Toffa</h1>
              <h3 className={styles.bio}>Director</h3>
              <div className={styles.social}>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.profile}>
            <img src={img1} alt="" className={styles.pro_img} />
            <div className={styles.dtl}>
              <h1 className={styles.name}>Dr. Nana Baah Gyan</h1>
              <h3 className={styles.bio}>Front End Developer</h3>
              <div className={styles.social}>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.profile}>
            <img src={img1} alt="" className={styles.pro_img} />
            <div className={styles.dtl}>
              <h1 className={styles.name}>Your Name</h1>
              <h3 className={styles.bio}>Front End Developer</h3>
              <div className={styles.social}>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.profile}>
            <img src={director} alt="" className={styles.pro_img} />
            <div className={styles.dtl}>
              <h1 className={styles.name}>Florence Toffa</h1>
              <h3 className={styles.bio}>Director</h3>
              <div className={styles.social}>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.profile}>
            <img src={img1} alt="" className={styles.pro_img} />
            <div className={styles.dtl}>
              <h1 className={styles.name}>Dr. Nana Baah Gyan</h1>
              <h3 className={styles.bio}>Front End Developer</h3>
              <div className={styles.social}>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.profile}>
            <img src={img1} alt="" className={styles.pro_img} />
            <div className={styles.dtl}>
              <h1 className={styles.name}>Your Name</h1>
              <h3 className={styles.bio}>Front End Developer</h3>
              <div className={styles.social}>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
