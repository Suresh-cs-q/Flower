import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../components/logo/l.avif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            <img src={logo} alt="Flower Shop Logo" className="logo-image" />
            <span className="brand-name">BLOOM</span>
          </a>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger open' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/shop" className="nav-link">SHOP ONLINE</a>
          </li>
          <li className="nav-item">
            <a href="/plants" className="nav-link">PLANTS</a>
          </li>
          <li className="nav-item">
            <a href="/occasions" className="nav-link">OCCASIONS</a>
          </li>
          <li className="nav-item">
            <a href="/custom" className="nav-link">CUSTOM ARRANGEMENT</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a href="/workshops" className="nav-link">WORKSHOPS AND EVENTS</a>
          </li>
          <li className="nav-item">
            <a href="/home-living" className="nav-link">HOME & LIVING</a>
          </li>
          <li className="nav-item">
            <a href="/health-wellness" className="nav-link">HEALTH & WELLNESS</a>
          </li>
          <li className="nav-item">
            <a href="/hobbies" className="nav-link">HOBBIES & INTERESTS</a>
          </li>
          <li className="nav-item">
            <a href="/gifts" className="nav-link">GIFTS & EXPERIENCES</a>
          </li>
          <li className="nav-item">
            <a href="/for-them" className="nav-link">FOR THEM</a>
          </li>
          <li className="nav-item">
            <a href="/earth-friendly" className="nav-link">EARTH FRIENDLY</a>
          </li>
          <li className="nav-item">
            <a href="/kitchen-dining" className="nav-link">KITCHEN & DINING</a>
          </li>
        </ul>
        
        <div className="nav-cta">
          <a href="/order" className="order-now-btn">Order Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 