import React from "react";
import styles from "../components/contact.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import { BiMailSend, BiPhoneCall, BiWorld } from "react-icons/bi";

import Map from "./Map";

function ContactUs() {
  return (
    <>
      <div class={styles.banner}>
        <div className={styles.overlay}>
          <div class={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Contact Us</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>
      <div className={styles.contact_container}>
        <div className={styles.contact_details}>
          <h2>// Our Projects</h2>
          <h1>Contact Us</h1>

          <p>
            Feel free to contact us via phone or visit our office at any time.
            Our dedicated team strives to respond to all inquiries within 24
            hours during business days. We are here to assist you and provide
            answers to your questions.
          </p>

          <div className={styles.svgS}>
            <div className={styles.svgS_div}>
              <BiWorld />
              <div className={styles.text_box}>
                <h1>Our Address</h1>
                <span>Dar es Salaam street, North Legon,Agbogba</span>
              </div>
            </div>
            <div className={styles.svgS_div}>
            <BiPhoneCall />
              <div className={styles.text_box}>
                <h1>Our Phone</h1>
                <span>+233 2677 77887</span>
              </div>
            </div>

            <div className={styles.svgS_div}>
            <BiMailSend />
              <div className={styles.text_box}>
                <h1>Our Mail</h1>
                <span>info@mobilewebghana.org</span>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.formDiv}>
          <form>
            <div className={styles.contact_details}>
              <h2>Get in touch with us today! </h2>
              <h1>We're ready to help you get started.</h1>

              <span>
                Please note that your email address will not be published. All
                fields marked with an asterisk (*) are required.
              </span>
            </div>
            <input
              size="40"
              className={styles.form_control}
              aria-required="true"
              aria-invalid="false"
              placeholder="Your Name"
              value=""
              type="text"
              name="sub"
            />

            <input
              size="40"
              className={styles.form_control}
              aria-required="true"
              aria-invalid="false"
              placeholder="Your Email"
              value=""
              type="email"
              name="sub2"
            />

            <input
              size="40"
              className={styles.form_control}
              aria-required="true"
              aria-invalid="false"
              placeholder="Phone Number"
              value=""
              type="text"
              name="sub3"
            />
            <textarea
              cols="40"
              rows="10"
              className={styles.form_control}
              aria-invalid="false"
              name="placeholder"
            >
              Your Message
            </textarea>

            <input
              type="submit"
              id={styles.submit_btn}
              className={styles.form_control}
            />
          </form>
        </section>
      </div>
      <Map />
    </>
  );
}

export default ContactUs;
