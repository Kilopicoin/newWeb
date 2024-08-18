// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a href="https://kilopi.gitbook.io/kilopi-docs" target="_blank" rel="noopener noreferrer">Docs</a>
          <a href="#portfolio-showcase">Ecosystem</a>
          <a href="#token-details">Token Details/Markets</a>
          <a href="#team-section">About</a>
          <a href="#faq-section">FAQ</a>
          <a href="#footer-content">Community</a>
          <a href="https://kilopi.net/pod/" target="_blank" rel="noopener noreferrer">
            <button className="launch-app-button">Proof of Development</button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Fair Launch, Deflationary Tokens, Infinite Possibilities</h1>
          <h2>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System</h2>
          <div className="hero-buttons">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Build & Earn</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
              <button className="primary-button">Promote & Earn</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
              <button className="primary-button">Invest & Earn</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={1500} height={1500} />
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div id="portfolio-showcase">


      <h2 className='centerText'>Ecosystem</h2>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>




      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>




      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>


      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Collector</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Blockchain: Harmony
          </h4>
          <h4>Benefits to the Kilopi: Every transaction burns Kilopi [LOP] tokens
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Go to Collector</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      </div>







      <div id="token-details">


      <h2 className='centerText'>Token Details</h2>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Harmony</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Purpose: Harmony
          </h4>
          <h4>Contract Address: 
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Explorer</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>


      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Binance</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Purpose: Harmony
          </h4>
          <h4>Contract Address: 
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Explorer</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>


      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'>Solana</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Kilopi is an Ecosystem of Web3 Applications with a Deflationary Tokenized System
          </h4>
          <h4>Purpose: Harmony
          </h4>
          <h4>Contract Address: 
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
              <button className="primary-button">Explorer</button>
            </a>
            <a href="https://docs.roninchain.com/docs/basics/introduction" target="_blank" rel="noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/robot-holding-chain.jpg" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>

      </div>

      {/* Team Members Section */}
      <div id="team-section">
        <h2 className="centerText">Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="/images/member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p className="team-role">Founder & CEO</p>
            <p>John is the visionary behind Kilopi, driving the project's mission and strategy.</p>
            <div className="team-socials">
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p className="team-role">CTO</p>
            <p>Jane leads the technology development, ensuring the robustness of Kilopi's ecosystem.</p>
            <div className="team-socials">
              <a href="https://twitter.com/janesmith" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="team-card">
            <img src="/images/member3.jpg" alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p className="team-role">Head of Marketing</p>
            <p>Mike oversees all marketing efforts, helping to grow the Kilopi community globally.</p>
            <div className="team-socials">
              <a href="https://twitter.com/mikejohnson" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/mikejohnson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-section">
        <h2 className="centerText">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item" onClick={() => toggleFAQ(0)}>
            <div className="faq-question">
              <h3>What is Kilopi?</h3>
              <span>{activeIndex === 0 ? '-' : '+'}</span>
            </div>
            {activeIndex === 0 && (
              <div className="faq-answer">
                <p>Kilopi is an ecosystem of Web3 applications that operates with a deflationary tokenized system.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(1)}>
            <div className="faq-question">
              <h3>How does the deflationary system work?</h3>
              <span>{activeIndex === 1 ? '-' : '+'}</span>
            </div>
            {activeIndex === 1 && (
              <div className="faq-answer">
                <p>Every transaction within the Kilopi ecosystem burns a portion of the Kilopi [LOP] tokens, reducing the total supply over time.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(2)}>
            <div className="faq-question">
              <h3>How can I participate in Kilopi?</h3>
              <span>{activeIndex === 2 ? '-' : '+'}</span>
            </div>
            {activeIndex === 2 && (
              <div className="faq-answer">
                <p>You can participate by building, promoting, or investing within the Kilopi ecosystem and earn rewards for your contributions.</p>
              </div>
            )}
          </div>
        </div>
      </div>


{/* Scroll to Top Button */}
{showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}


      {/* Footer */}
      <footer className="footer">
        <div id="footer-content">
          
          <div className="footer-text">
            <h2>Let's Grow Together</h2>
            <div className="footer-buttons">
              <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
                <button className="primary-button">Start Building</button>
              </a>
              <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
                <button className="primary-button">Start Promoting</button>
              </a>
              <a href="https://skymavis.typeform.com/ronin" target="_blank" rel="noreferrer">
                <button className="primary-button">Start Investing</button>
              </a>
            </div>
          </div>


            <div className="footer-links">
          <a href="https://twitter.com/Ronin_Network" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://discord.gg/roninnetwork" target="_blank" rel="noreferrer">Discord</a>

          </div>



        </div>

        {/* Footer Menu */}
        <div className="footer-menu">
          <div className="footer-links-column">
            <h3>Docs</h3>
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



        <div className="footer-logo">
            <img src="/images/Kilopi_Full_new.png" alt="ronin-logo" />
          </div>
          
        
      </footer>
    </div>
  );
}

export default App;
