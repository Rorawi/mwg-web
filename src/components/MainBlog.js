import React, { useState } from "react";
import BlogSection from "./BlogSection";
import BlogPost from "./BlogPost";
import styles from "../components/mainblog.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import SingleBlogPost from "./SingleBlogPost";

const MainBlog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const BlogSelect = (blog) => {
    setSelectedBlog(blog);
  };
  return (
    <div>
      <div class={styles.banner}>
        <div className={styles.overlay}>
          <div class={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Blog</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      {selectedBlog ? (
        <SingleBlogPost
          title={selectedBlog.title}
          content={selectedBlog.content}
        />
      ) : (
        <BlogSection>
          <BlogPost
            title="Blog Title 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Aenean lacinia est ac sem vehicula commodo. Morbi nec lectus eget velit viverra tincidunt.
              Duis eget enim ut mauris laoreet tempus. Sed bibendum justo ut sollicitudin suscipit."
              onClick={() =>
                BlogSelect({
                  title: "Blog Title 1",
                  content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia est ac sem vehicula commodo. Morbi nec lectus eget velit viverra tincidunt. Duis eget enim ut mauris laoreet tempus. Sed bibendum justo ut sollicitudin suscipit.",
                })
              }
          />
        </BlogSection>
      )}
    </div>
  );
};

export default MainBlog;
