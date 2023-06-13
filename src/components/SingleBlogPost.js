import React from "react";
import styles from "./singleblog.module.css";
import style from './recentblog.module.css';
import profileImage from "../assets/profile.jpg";
import blogImage from "../assets/mcare.jpg";
import img1 from "../assets/mwg-swiper1.jpg";

const SingleBlogPost = () => {
  return (
    <>
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

      <div className={styles.flex_Div}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Blog Post Title</h1>
            <div className={styles.author}>
              <img
                src={profileImage}
                alt="Profile"
                className={styles.profileImage}
              />
              <span className={styles.authorName}>John Doe</span>
            </div>
            <p className={styles.date}>Published on June 13, 2023</p>
          </div>
          <div className={styles.content}>
            <img src={blogImage} alt="Blog" className={styles.blogImage} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              mauris vitae ipsum ultricies porta vel et leo. Integer scelerisque
              risus quis quam semper, ut blandit lacus fermentum. Nullam
              fringilla dapibus justo, sit amet facilisis lacus. Suspendisse
              rhoncus congue dolor, in placerat nisi tincidunt ut. Phasellus
              eget ex vitae tortor faucibus dignissim. Sed consequat diam ut
              placerat convallis. Mauris rhoncus congue purus, a fringilla
              mauris cursus eu. Integer tempus tortor sit amet gravida gravida.
              Nulla ut purus velit. Duis vel velit risus. Fusce mattis, felis ut
              luctus lacinia, ex justo pretium nibh, nec fermentum mauris risus
              eu lorem.
            </p>
            <p>
              Aenean euismod eros et massa fringilla condimentum. Proin
              accumsan, dolor eget finibus ultrices, eros mi mattis nisi, a
              semper mauris justo id justo. Morbi ut nunc at urna auctor
              vulputate non ut diam. Phasellus vitae augue et lectus fringilla
              consectetur et ac purus. Aliquam sagittis semper ex, vel semper
              purus malesuada a. Integer a iaculis risus, sit amet elementum
              neque. Aliquam erat volutpat. Suspendisse potenti. In nec lectus
              at arcu luctus volutpat. Integer lobortis hendrerit metus sed
              consequat. Nam a interdum neque. Donec quis elit felis. Nam semper
              justo vitae nisi blandit auctor.
            </p>
          </div>
          <div className={styles.commentSection}>
            <h2 className={styles.commentTitle}>Comments</h2>
            {/* Add comment components or form here */}
          </div>
          <div className={styles.socialMedia}>
            <h3>Share this post:</h3>
            {/* Add social media icons or buttons here */}
          </div>
        </div>


        <RecentBlogSection />
      </div>
    </>
  );
};

export default SingleBlogPost;




export const RecentBlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Blog Post 1',
      date: 'June 10, 2023',
      time: '12:30 PM'
    },
    {
      id: 2,
      title: 'Blog Post 2',
      date: 'June 8, 2023',
      time: '10:15 AM'
    },
    {
      id: 3,
      title: 'Blog Post 3',
      date: 'June 5, 2023',
      time: '4:45 PM'
    },
    // Add more blog objects here as needed
  ];

  return (
    <div className={style.container}>
      <h2 className={style.sectionTitle}>Recent Blogs</h2>
      <div className={style.blogList}>
        {blogs.map((blog) => (
          <div key={blog.id} className={style.blogItem}>
            <h3 className={style.blogTitle}>{blog.title}</h3>
            <p className={style.blogSubtext}>
              {blog.date} | {blog.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


