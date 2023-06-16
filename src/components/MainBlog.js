import React, { useState } from "react";
import BlogSection from "./BlogSection";
import BlogPost from "./BlogPost";
import styles from "../components/mainblog.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import director from "../assets/director.jpg";
import blogImg2 from "../assets/code-for-ghana.jpg"
import blogImg1 from "../assets/fime.jpg";
import SingleBlogPost from "./SingleBlogPost";

const MainBlog = () => {
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  const handleBlogPostClick = (blogPost) => {
    setSelectedBlogPost(blogPost);
  };
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Blog</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      {selectedBlogPost ? (
        <SingleBlogPost
          title={selectedBlogPost.title}
          content={selectedBlogPost.content}
          name={selectedBlogPost.name}
          img={selectedBlogPost.img}
          day={selectedBlogPost.day}
          month={selectedBlogPost.month}
          year={selectedBlogPost.year}
          blogImg={selectedBlogPost.blogImg}
        />
      ) : (
        <BlogSection>
          <BlogPost
            title="Youth Media Literacy"
            content="Media literacy skills have become increasingly essential in today’s digital age..."
            blogImg={blogImg1}
            day="13th"
            month="May"
            year="2023"
            onClick={() =>
              handleBlogPostClick({
                title: "Youth Media Literacy",
                name: "Florence Toffa",
                day: "13th",
                month: "May",
                year: "2023",
                img: director,
                blogImg:blogImg1,
                content:
                  "Media literacy skills have become increasingly essential in today’s digital age, where young people are constantly bombarded with information from various media sources. In Ghana, Mobile Web Ghana is actively involved in promoting media literacy among youth through our youth media literacy project. This initiative aims to equip young people with the necessary skills to critically analyze and navigate the media landscape, empowering them to become informed and responsible media consumers.In this blog post, we will explore the importance of teaching media literacy skills to youth in Ghana and highlight the significant role our youth media literacy project plays in achieving this goal.",
              })
            }
          />
          <BlogPost
            title="African Digital Skills Conference"
            content="Media literacy skills have become increasingly essential in today’s digital age..."
            blogImg={blogImg2}
            day="13th"
            month="May"
            year="2023"
            onClick={() =>
              handleBlogPostClick({
                title: "African Digital Skills Conference",
                name: "Talika Bernard",
                day: "13th",
                month: "May",
                year: "2023",
                img: director,
                blogImg:blogImg2,
                content:
                  "Media literacy skills have become increasingly essential in today’s digital age, where young people are constantly bombarded with information from various media sources. In Ghana, Mobile Web Ghana is actively involved in promoting media literacy among youth through our youth media literacy project. This initiative aims to equip young people with the necessary skills to critically analyze and navigate the media landscape, empowering them to become informed and responsible media consumers.In this blog post, we will explore the importance of teaching media literacy skills to youth in Ghana and highlight the significant role our youth media literacy project plays in achieving this goal.",
              })
            }
          />
          <BlogPost
            title="Youth Media Literacy"
            content="Media literacy skills have become increasingly essential in today’s digital age..."
            blogImg={blogImg1}
            day="13th"
            month="May"
            year="2023"
            onClick={() =>
              handleBlogPostClick({
                title: "Youth Media Literacy",
                name: "Florence Toffa",
                day: "13th",
                month: "May",
                year: "2023",
                img: director,
                blogImg:blogImg1,
                content:
                  "Media literacy skills have become increasingly essential in today’s digital age, where young people are constantly bombarded with information from various media sources. In Ghana, Mobile Web Ghana is actively involved in promoting media literacy among youth through our youth media literacy project. This initiative aims to equip young people with the necessary skills to critically analyze and navigate the media landscape, empowering them to become informed and responsible media consumers.In this blog post, we will explore the importance of teaching media literacy skills to youth in Ghana and highlight the significant role our youth media literacy project plays in achieving this goal.",
              })
            }
          />
        </BlogSection>
      )}
    </div>
  );
};

export default MainBlog;
