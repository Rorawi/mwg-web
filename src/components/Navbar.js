// import React,{useState,useEffect} from 'react'
// import mwgLogo from "../assets/mwg-logo.png";
// import styles from "../components/navbar.module.css"
// import {FaTimes} from "react-icons/fa"
// import {AiOutlineMenu} from "react-icons/ai"
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [selectedLink,setSelectedLink] = useState(1)
//     const [show, setShow] = useState(false);

    

//     const handleScroll = () => {
//       const scrollPosition = window.pageYOffset;
//       if (scrollPosition > 80) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
  
//     useEffect(() => {
//       window.addEventListener('scroll', handleScroll);
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);

//     const toggleNav=()=> {
//       setShow(!show)
//     }



    
//   return (
//     <header  className={`${styles.fixedHeader} ${scrolled ? styles.scrolledHeader : ''}`}>
//       <nav className={styles.navbar}>
//         <a href="#" className={styles.navbar_brand}>
//             <img src={mwgLogo} />
//         </a>
//         <div className={styles.menu_btn} onClick={toggleNav}>
//           {show?<FaTimes/>:<AiOutlineMenu/>}
//         </div>


//        {/* {show? <> */}
//         <ul  className={`${styles.navbar_links} ${show ? styles.navbar_active : styles.navbar_links}`}
// >
//           <a href="#">
//             <li className="#">Home</li>
//           </a>
//           <Link to='/about'>
//             <li>About Us</li>
//           </Link>
//           <a href="#">
//             <li className="#">Our Services</li>
//           </a>
//           <a href="#">
//             <li className="#">Projects</li>
//           </a>
//           <a href="#">
//             <li className="#">Events</li>
//           </a>
//           <a href="#">
//             <li className="#">Career</li>
//           </a>
//           <a href="#">
//             <li className="#">Blog</li>
//           </a>
//           <a href="#">
//             <li className="#">Contact Us</li>
//           </a>
//         </ul>
//        {/* </>: ""} */}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


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
        <a href="#" className={styles.navbar_brand}>
          <img src={mwgLogo} alt="MWG Logo" />
        </a>
        <div className={styles.menu_btn} onClick={toggleNav}>
          {show ? <FaTimes /> : <AiOutlineMenu />}
        </div>

        <ul className={`${styles.navbar_links} ${show ? styles.navbar_active : styles.navbar_links}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
