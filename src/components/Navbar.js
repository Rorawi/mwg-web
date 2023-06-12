import React, { useState, useEffect } from 'react';
import mwgLogo from '../assets/mwg-logo.png';
import styles from '../components/navbar.module.css';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setShow(!show);
  };

  return (
    <header className={`${styles.fixedHeader} ${scrolled ? styles.scrolledHeader : ''}`}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navbar_brand}>
          <img src={mwgLogo} alt="MWG Logo" />
        </Link>

        <div className={styles.menu_btn} onClick={toggleNav}>
          {/* {show ?  */}
          {/* :  */}
          <AiOutlineMenu className={styles.menu_btn_svg}/>
          {/* // } */}
        </div>
     
        <ul className={`${styles.navbar_links} ${show ? styles.navbar_active : styles.navbar_links}`}>
<div className={styles.menu_btn}>
<FaTimes className={styles.menu_btn_svg} onClick={toggleNav}/> 

</div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
