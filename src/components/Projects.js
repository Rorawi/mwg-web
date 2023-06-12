import React from "react";
import styles from "../components/project.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import { FaPause } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

import Testimonial from "./Testimonial";

const Projects = () => {
  return (
    <>
      <div class={styles.banner}>
        <div className={styles.overlay}>
          <div class={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Projects</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      <section className={styles.projects_sec}>
        <div className={styles.img_div}></div>
        <div className={styles.text_box}>
          <h2>// Our Projects</h2>
          <h1>
            What <span>We</span> Do
          </h1>

          <p className={styles.text_box}>
            Mobile Web Ghana is not only purposed with being services providers
            but also solution providers. We undertake projects which are either
            aimed at solving conspicuous problems in our society or upskilling
            people through technology and entrepreneurship training programmes.
          </p>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Youth Media Literacy Program</h2>
            <p>
              This project is an initiative of Mobile Web Ghana and the U.S
              Embassy in Ghana which seeks to increase the capacity of youths to
              consume and disseminate media contents responsibly.
            </p>
          </div>

          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Coding and Robotics Training</h2>
            <p>
              Mobile Web Ghana has taken keen interest in these future
              technologies Ensuring that every child in Ghana is equipped with
              digital skills, STEM education ( Science, Technology, Engineering
              & Mathematics) through robotics coding classes.
            </p>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Visuals for Gender</h2>
            <p>
              This project is aimed at equipping citizens, policymakers and
              Civil Society Organizations to understand gender-based issues
              using both dynamic and static data visualizations.
            </p>
          </div>

          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Code for Ghana</h2>
            <p>
              An Open Data project that promotes responsive, innovative and
              effective governance through technology. This is achieved by
              telling evoking stories with data that is in relation to the
              government.
            </p>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Open Cities Accra</h2>
            <p>
              The Open Cities Accra Project seeks to make Alogboshie and its
              environs resilient to natural disasters, especially flooding. The
              project will also involve the remote mapping of Nima, Akweteman
              and Alajo
            </p>
          </div>

          <div className={styles.project_div}>
            <img src={img1} />
            <h2>American Corner Agbogba</h2>
            <p>
              In partnership with Mobile Web Ghana, American Corner Agbogba
              provides access to current and reliable information about the
              United States through book collections, Internet access, and
              events and activities for everyone.
            </p>
          </div>
        </div>
        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Africa Digital Skills Conference</h2>
            <p>
              The Africa Digital Skills Conference is a three-day annual
              conference that provides institutions, government agencies,
              professionals, entrepreneurs, students and the youth at large in
              Ghana and Africa with an opportunity to teach and learn digital
              skills.
            </p>
          </div>

          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Clean Streets Accra</h2>
            <p>
              Clean Streets Accra is a city-wide effort to work with district
              assemblies and make Accra the cleanest city in Africa.
            </p>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Technology and Women Empowerment Program (TaWEP)</h2>
            <p>
              Technology and Women Empowerment Program is aimed at developing
              and preparing women and girls with basic digital skills,
              work-readiness skills and encouraging women to take up leadership
              positions with the hope of building their capacity in their
              careers and education and becoming great leaders.
            </p>
          </div>

          <div className={styles.project_div}>
            <img src={img1} />
            <h2>Microsoft AppFactory</h2>
            <p>
              The Ghana AppFactory is part of Microsoft’s 4Afrika initiative.
              The AppFactory is aimed at equipping young software developers and
              coders with hands-on experience while helping them build critical
              business skills to secure jobs or create their own businesses.
            </p>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={img1} />
            <h2> mCare</h2>
            <p>
              This project provides locally-relevant maternal and child
              health-related information for prospective mothers, pregnant
              women, nursing mothers and all caregivers.
            </p>
          </div>

          <div className={styles.project_div}>
            <img src={img1} />
            <h2>FIME</h2>
            <p>
              Females in Mobile Entrepreneurship (FiME) is an initiative of
              Mobile Web Ghana to increase female participation in Science,
              Technology, Engineering Mathematics (STEM). This programme seeks
              to foster entrepreneurship and empower females through mobile
              technology training and events.
            </p>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={img1} />
            <h2> Advocacy</h2>
            <p>
              We contribute to the country’s realization of its ongoing
              development strategy, both by building capacity in a generation of
              underskilled young people, and by supporting the creation of
              digital services that can replace and complement the set of
              publicly available services for citizens and communities.
            </p>
          </div>

          <div className={styles.project_div_soon}>
           <h2 className={styles.soon}>COMING SOON...</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
