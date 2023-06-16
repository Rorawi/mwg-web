import React from "react";
import styles from "../components/blogpost.module.css";

const BlogPost = ({ title, content, onClick, blogImg, day, month, year }) => {
  return (
    <div className={styles.blog_post} onClick={onClick}>
      <div className={styles.img_div}>
        <img src={blogImg} />
      </div>

     <div className={styles.text_box}>
     <h2 className={styles.blog_title}>{title}</h2>
      <p className={styles.blog_content}>{content}</p>
      <p className={styles.date}>
        Published on {month} {day}, {year}
      </p>
     </div>
    </div>
  );
};

export default BlogPost;
