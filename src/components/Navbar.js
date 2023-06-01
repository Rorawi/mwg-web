import React,{useState,useEffect} from 'react'
import mwgLogo from "../assets/mwg-logo.png";
import styles from "../components/navbar.module.css"
import {FaTimes} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedLink,setSelectedLink] = useState(1)
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

    const showNav=()=> {
      setShow(!show)
    }



    
  return (
    <header  className={`${styles.fixedHeader} ${scrolled ? styles.scrolledHeader : ''}`}>
      <nav className={styles.navbar}>
        <a href="#" className={styles.navbar_brand}>
            <img src={mwgLogo} />
        </a>
        {/* <div className="menu-btn">
          <AiOutlineMenu onClick={showNav}/>
        </div> */}

       {/* {show? <> */}
        <ul className={styles.navbar_links} id={styles.navbar_links}>
          <a href="#">
            <li className="#">Home</li>
          </a>
          <Link to='/about'>
            <li>About Us</li>
          </Link>
          <a href="#">
            <li className="#">Our Services</li>
          </a>
          <a href="#">
            <li className="#">Projects</li>
          </a>
          <a href="#">
            <li className="#">Events</li>
          </a>
          <a href="#">
            <li className="#">Career</li>
          </a>
          <a href="#">
            <li className="#">Blog</li>
          </a>
          <a href="#">
            <li className="#">Contact Us</li>
          </a>
        </ul>
       {/* </>: ""} */}
      </nav>
    </header>
  );
};

export default Navbar;
