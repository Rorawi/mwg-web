import React from "react";
import styles from "../components/blog.module.css";
import { BlogSwiper } from "./SwiperComp";

import design from "../assets/abstract.png";

const Blog = () => {
  return (
    <>
      <section className={styles.blog_sec}>
        <div className={styles.img_div}>
          <img src={design} alt="Our design" />
        </div>
        <div className={styles.text_box}>
          <h2>// Our Blog</h2>
          <h1>
            Our Latest <span>News</span>
          </h1>
        </div>

        <BlogSwiper />
        <div className={styles.img_div_1}>
          <img src={design} alt="Our design" />
        </div>
      </section>
    </>
  );
};

export default Blog;
