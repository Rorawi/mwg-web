import React from 'react';
import styles from "../components/blogpost.module.css";

const BlogPost = ({ title, content }) => {
  return (
    <div className={styles.blog_post}>
      <h2 className={styles.blog_title}>{title}</h2>
      <p className={styles.blog_content}>{content}</p>
    </div>
  );
};

export default BlogPost;
