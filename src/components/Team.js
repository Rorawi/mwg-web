import React from "react";
import styles from "../components/team.module.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter
} from "react-icons/fa";
import img1 from "../assets/mwg-swiper1.jpg";
import director from "../assets/director.jpg";
import profile from "../assets/profile.jpg"
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <>
      <section className={styles.team_sec}>
        <div className={styles.text_box}>
           <div>
           <h2>// Our Strong Team</h2>
            <h1>
              Meet out <span>dedicated</span> team
            </h1>
           </div>
            <p>
            Meet our amazing team of skilled professionals, dedicated to delivering exceptional results and exceeding
          expectations.
            </p>
          </div>
        <div className={styles.wrapper}>
          <div className={styles.profile}>
        <div className={styles.img_div}>
        <img src={director} alt="" className={styles.pro_img} />
        </div>

            <div className={styles.dtl}>
              <h1 className={styles.name}>Florence Toffa</h1>
              <h3 className={styles.bio}>Director</h3>
          </div>
              <div className={styles.overlay}>
              <div className={styles.social}>
                <Link to="">
                  <FaLinkedin />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaTwitter />
                </Link>
                <Link to="">
                  <FaInstagram />
                </Link>
              </div>
              </div>
            </div>


          <div className={styles.profile}>
        <div className={styles.img_div}>
        <img src={img1} alt="" className={styles.pro_img} />
        </div>

            <div className={styles.dtl}>
              <h1 className={styles.name}>Prince Adu</h1>
              <h3 className={styles.bio}>Financial Accountant</h3>
          </div>
              <div className={styles.overlay}>
              <div className={styles.social}>
                <Link to="">
                  <FaLinkedin />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaTwitter />
                </Link>
                <Link to="">
                  <FaInstagram />
                </Link>
              </div>
              </div>
            </div>
          <div className={styles.profile}>
        <div className={styles.img_div}>
        <img src={profile} alt="" className={styles.pro_img} />
        </div>

            <div className={styles.dtl}>
              <h1 className={styles.name}>Talika Bernard</h1>
              <h3 className={styles.bio}>Graphic Designer</h3>
          </div>
              <div className={styles.overlay}>
              <div className={styles.social}>
                <Link to="">
                  <FaLinkedin />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaTwitter />
                </Link>
                <Link to="">
                  <FaInstagram />
                </Link>
              </div>
              </div>
            </div>
          <div className={styles.profile}>
        <div className={styles.img_div}>
        <img src={director} alt="" className={styles.pro_img} />
        </div>

            <div className={styles.dtl}>
              <h1 className={styles.name}>Estella Hilda</h1>
              <h3 className={styles.bio}>Resource Manager</h3>
          </div>
              <div className={styles.overlay}>
              <div className={styles.social}>
                <Link to="">
                  <FaLinkedin />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaTwitter />
                </Link>
                <Link to="">
                  <FaInstagram />
                </Link>
              </div>
              </div>
            </div>
          <div className={styles.profile}>
        <div className={styles.img_div}>
        <img src={director} alt="" className={styles.pro_img} />
        </div>

            <div className={styles.dtl}>
              <h1 className={styles.name}>Issac Acheampong</h1>
              <h3 className={styles.bio}>Social Media Director</h3>
          </div>
              <div className={styles.overlay}>
              <div className={styles.social}>
                <Link to="">
                  <FaLinkedin />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaTwitter />
                </Link>
                <Link to="">
                  <FaInstagram />
                </Link>
              </div>
              </div>
            </div>
          <div className={styles.profile}>
        <div className={styles.img_div}>
        <img src={director} alt="" className={styles.pro_img} />
        </div>

            <div className={styles.dtl}>
              <h1 className={styles.name}>Florence Toffa</h1>
              <h3 className={styles.bio}>Director</h3>
          </div>
              <div className={styles.overlay}>
              <div className={styles.social}>
                <Link to="">
                  <FaLinkedin />
                </Link>
                <Link to="">
                  <FaFacebookSquare />
                </Link>
                <Link to="">
                  <FaTwitter />
                </Link>
                <Link to="">
                  <FaInstagram />
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
