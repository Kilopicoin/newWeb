// src/App.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const portfolioItems = [
    { img: 'path/to/image1.jpg', title: 'Project 1' },
    { img: 'path/to/image2.jpg', title: 'Project 2' },
    { img: 'path/to/image3.jpg', title: 'Project 3' },
    { img: 'path/to/image4.jpg', title: 'Project 4' },
    { img: 'path/to/image5.jpg', title: 'Project 5' },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="https://kilopi.net">
            <img src="/images/Kilopi_Full_new.png" alt="ronin-nav-logo" />
          </a>
        </div>
        <div className="navbar-links">
          <a href="#learn">Learn</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#build">Build</a>
          <a href="#network">Network</a>
          <a href="#zkevm">zkEVM</a>
          <a href="#blog">Blog</a>
          <a href="https://app.roninchain.com/" target="_blank" rel="noopener noreferrer">
            <button className="launch-app-button">Proof of Development</button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h1>
          <div className="hero-buttons">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Build on Kilopi</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
              <button className="secondary-button">Learn More</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={1500} height={1500}/>
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div className="portfolio-showcase">
        <h2>Portfolio Showcase</h2>
        <Slider {...sliderSettings}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </Slider>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/Kilopi_Full_new.png" alt="ronin-logo" />
          </div>
          <div className="footer-text">
            <h2>Let's Build Together</h2>
            <div className="footer-buttons">
              <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
                <button className="primary-button">Start Building</button>
              </a>
              <a href="/ecosystem">
                <button className="secondary-button">Explore Ecosystem</button>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Menu */}
        <div className="footer-menu">
          <div className="footer-links-column">
            <h3>Learn</h3>
            <a href="#learn">How to Buy RON</a>
            <a href="#about">About Ronin</a>
          </div>
          <div className="footer-links-column">
            <h3>Developers</h3>
            <a href="#docs">Docs</a>
            <a href="#github">GitHub</a>
          </div>
          <div className="footer-links-column">
            <h3>Resources</h3>
            <a href="#whitepaper">Whitepaper</a>
            <a href="#blog">Blog</a>
          </div>
          <div className="footer-links-column">
            <h3>Network</h3>
            <a href="#validator">Become a Validator</a>
            <a href="#delegator">Become a Delegator</a>
          </div>
        </div>

        <div className="footer-links">
          <a href="https://twitter.com/Ronin_Network" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://discord.gg/roninnetwork" target="_blank" rel="noreferrer">Discord</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
