import React from 'react'
import styles from "../components/blog.module.css";
import { BlogSwiper } from './SwiperComp';

const Blog=()=> {
    return (
        <>
       <section className={styles.blog_sec}>
       <div className={styles.text_box}>
            <h2>// Our Blog</h2>
            <h1>
             Our Latest <span>News</span>
            </h1>
        </div>

      <BlogSwiper/>
       </section>
        </>
    )
}

export default Blog
