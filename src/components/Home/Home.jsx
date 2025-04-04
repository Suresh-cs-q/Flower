import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import image1 from '../../Pictures/20200303010142_file_5e5dac76b9fc1_5e5dae84406af_63d1ce6cdc24b.jpg';
import image2 from '../../Pictures/20170116111830_file_587d54c6c8ae0_63d1ce531a29f.jpg';
import image3 from '../../Pictures/1547002844_file_bc33e45187.jpg.avif';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    featured: false,
    products: false,
    about: false,
    newsletter: false
  });
  const images = [image1, image2, image3];
  
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const newsletterRef = useRef(null);
  
  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hero-section') {
            setIsVisible(prev => ({ ...prev, hero: true }));
          } else if (entry.target.id === 'featured-section') {
            setIsVisible(prev => ({ ...prev, featured: true }));
          } else if (entry.target.id === 'products-section') {
            setIsVisible(prev => ({ ...prev, products: true }));
          } else if (entry.target.id === 'about-section') {
            setIsVisible(prev => ({ ...prev, about: true }));
          } else if (entry.target.id === 'newsletter-section') {
            setIsVisible(prev => ({ ...prev, newsletter: true }));
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (heroRef.current) observer.observe(heroRef.current);
    if (featuredRef.current) observer.observe(featuredRef.current);
    if (productsRef.current) observer.observe(productsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (newsletterRef.current) observer.observe(newsletterRef.current);
    
    // Set hero visible after a brief delay for entrance animation
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 300);
    
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (featuredRef.current) observer.unobserve(featuredRef.current);
      if (productsRef.current) observer.unobserve(productsRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (newsletterRef.current) observer.unobserve(newsletterRef.current);
    };
  }, []);
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  // Product data
  const featuredProducts = [
    {
      id: 1,
      name: 'Royal Rose Mix',
      price: '$55',
      image: image1,
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Spring Tulip Charm',
      price: '$75',
      image: image2,
      badge: 'New'
    },
    {
      id: 3,
      name: 'Heavenly Lily Box',
      price: '$99',
      image: image3,
      badge: 'Limited'
    },
    {
      id: 4,
      name: 'Pastel Romance',
      price: '$65',
      image: image1,
      badge: ''
    },
    {
      id: 5,
      name: 'Elegant Orchid Gift',
      price: '$120',
      image: image2,
      badge: 'Luxury'
    },
    {
      id: 6,
      name: 'Blush Peony Bouquet',
      price: '$85',
      image: image3,
      badge: ''
    },
    {
      id: 7,
      name: 'Ethereal Garden Mix',
      price: '$70',
      image: image1,
      badge: 'Popular'
    },
    {
      id: 8,
      name: 'Majestic Purple Dahlia',
      price: '$65',
      image: image2,
      badge: ''
    },
    {
      id: 9,
      name: 'Serene White Collection',
      price: '$110',
      image: image3,
      badge: 'Premium'
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Carousel */}
      <section id="hero-section" ref={heroRef} className={`hero-section ${isVisible.hero ? 'visible' : ''}`}>
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
        <div className="overlay"></div>
        <div className="carousel">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            >
            </div>
          ))}
          
          <div className="hero-content">
            <div className="hero-badge">Luxury Collection</div>
            <h1 className="hero-title">Exquisite Floral Arrangements</h1>
            <p className="hero-subtitle">Handcrafted designs for life's special moments</p>
            <div className="hero-buttons">
              <button className="primary-btn">Shop Now</button>
              <button className="secondary-btn">Explore</button>
            </div>
            <div className="hero-features">
              <div className="hero-feature">
                <span className="feature-icon">✦</span>
                <span>Luxury</span>
              </div>
              <div className="hero-feature">
                <span className="feature-icon">✦</span>
                <span>Premium Quality</span>
              </div>
              <div className="hero-feature">
                <span className="feature-icon">✦</span>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
          
          <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="featured-section" ref={featuredRef} className={`featured-categories ${isVisible.featured ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-eyebrow">Our Collections</span>
          <h2 className="section-title">Curated with Elegance</h2>
          <p className="section-subtitle">Discover our thoughtfully designed floral arrangements crafted with passion and precision</p>
        </div>
        <div className="category-container">
          <div className="category-card">
            <div className="category-image plants">
              <div className="category-overlay">
                <span>Premium Selection</span>
              </div>
            </div>
            <div className="category-content">
              <h3>Luxury Plants</h3>
              <p>Elevate your space with our exclusive selection</p>
              <a href="/plants" className="category-link">Explore Collection</a>
            </div>
          </div>
          <div className="category-card">
            <div className="category-image arrangements">
              <div className="category-overlay">
                <span>Handcrafted</span>
              </div>
            </div>
            <div className="category-content">
              <h3>Signature Arrangements</h3>
              <p>Uniquely designed by our master florists</p>
              <a href="/custom" className="category-link">Explore Collection</a>
            </div>
          </div>
          <div className="category-card">
            <div className="category-image gifts">
              <div className="category-overlay">
                <span>Exclusive</span>
              </div>
            </div>
            <div className="category-content">
              <h3>Luxury Gift Sets</h3>
              <p>Perfect for special occasions and celebrations</p>
              <a href="/gifts" className="category-link">Explore Collection</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products-section" ref={productsRef} className={`featured-products ${isVisible.products ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-eyebrow">Featured Collection</span>
          <h2 className="section-title">Nature's Finest Creations</h2>
          <p className="section-subtitle">Our most sought-after floral arrangements, curated for elegance and beauty</p>
        </div>
        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <div 
              className="product-card" 
              key={product.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <div className="product-overlay">
                  <div className="product-actions">
                    <button className="quick-view">Quick View</button>
                    <button className="wishlist">
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-details">
                  <p className="price">{product.price}</p>
                  <div className="rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <a href="/shop" className="view-all-btn">View All Products</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" ref={aboutRef} className={`about-section ${isVisible.about ? 'visible' : ''}`}>
        <div className="about-container">
          <div className="about-image">
            <div className="image-accent"></div>
            <img src={image1} alt="About our flower shop" />
          </div>
          <div className="about-content">
            <span className="about-tagline">Our Story</span>
            <h2>Crafting Moments of Beauty Since 1995</h2>
            <p>
              At BLOOM, we believe in the transformative power of flowers to elevate every moment. 
              Our master florists meticulously handcraft each arrangement using only the finest, sustainably 
              sourced blooms from around the world. With an unwavering commitment to quality and artistry, 
              we've been creating floral experiences that tell stories, express emotions, and create 
              memories for over 25 years.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-number">25+</span>
                <span className="feature-text">Years of Excellence</span>
              </div>
              <div className="feature">
                <span className="feature-number">100%</span>
                <span className="feature-text">Sustainably Sourced</span>
              </div>
              <div className="feature">
                <span className="feature-number">10k+</span>
                <span className="feature-text">Happy Clients</span>
              </div>
            </div>
            <a href="/about" className="learn-more">Discover Our Story</a>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section id="newsletter-section" ref={newsletterRef} className={`newsletter-section ${isVisible.newsletter ? 'visible' : ''}`}>
        <div className="newsletter-content">
          <span className="newsletter-tagline">Join Our Community</span>
          <h2>Subscribe for Floral Inspirations</h2>
          <p>Sign up for exclusive offers, floral care tips, and new collection previews.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="newsletter-features">
            <div className="newsletter-feature">
              <span className="feature-icon">✦</span>
              <span>Weekly Tips</span>
            </div>
            <div className="newsletter-feature">
              <span className="feature-icon">✦</span>
              <span>Exclusive Offers</span>
            </div>
            <div className="newsletter-feature">
              <span className="feature-icon">✦</span>
              <span>Seasonal Updates</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 