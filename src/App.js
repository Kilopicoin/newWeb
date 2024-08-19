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
          <img src="/images/robot-holding-chain.png" alt="homepage-hero" width={1500} height={1500} />
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div id="portfolio-showcase">


      <h2 className='centerText'>Ecosystem</h2>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Application Development Protocol</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Application Development Protocol is a decentralized application where users can create their own web3 applications, 
            stake their LOP tokens, vote for other Kilopi web3 applications and earn LOP tokens depending their actions.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Binance Smart Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> Every Web3 Application brings new users, brings value to LOP tokens or burns LOP tokens
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
          <img src="/images/appDev.png" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Marketing Protocol</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Marketing Protocol is a decentralized application where users can create their own marketing activities for Kilopi project, stake their LOP tokens, 
            vote for other Kilopi marketing activities and earn LOP tokens depending their actions.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Binance Smart Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> Every Marketing Activity brings new users and brings value to LOP tokens
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
          <img src="/images/marketing.png" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>




      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Exchange Listing Protocol</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Exchange Listing Protocol is a decentralized application where users can review Kilopi's Exchange listing process,
             contribute to this process and earn interest on their USDT tokens.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Binance Smart Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> Every Exchange Listing brings new users and brings value to LOP tokens
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
          <img src="/images/exchangelisting.png" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>




      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Collector</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Collector is a special staking decentralized application where users can stake their LOP tokens and receive them back with interest.
            There are many options in Kilopi staking including a regular monthly income model.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Harmony Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> Users who stake, commit that they will be supporting the project long term, means solid community.
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
          <img src="/images/collector.png" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Pathfinder</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Pathfinder is a decentralized poll application where users can vote for Crypto projects via LOP tokens. Then, 
            Founder makes a research and publishes a review video on his youtube for the most voted projects regularly.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Harmony Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> Every transaction burns Kilopi [LOP] tokens
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
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Decentralized Autonomous Organization</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Decentralized Autonomous Organization, Kilopi D.A.O, is a decentralized application where users can create proposals, write opinions 
            and comment on them via LOP tokens.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Harmony Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> New ideas, opinions, comments are being collected and these bring value to the project
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
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Masters of Management</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Masters of Management is a decentralized turn-based strategy game where players can create and manage their realms. 
            Players then compete with each other by building solid economies or attacking each other.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Harmony Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> Trading between players burns LOP tokens
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
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Skallia</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Skallia is an ( Ultima Online ) shard including the ability to convert some in game items to tokens and NFTs. 
            Players can explore, build, fight, trade etc. in the game and convert their efforts into the token economies.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Harmony Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> Every transaction burns Kilopi [LOP] tokens
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
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Forge</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Forge is a tool for creating tokens on Solana Chain. Users can create their own tokens with the latest secure standard of Solana Chain. 
            Users then create liquidities and markets on their tokens.
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Solana Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> Every transaction add Liquidity to LOP token
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
      <h3 className='centerText-portfolio-element'>Harmony Chain</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Harmony Chain is the main chain of Kilopi project. LOP token on Harmony Chain has many utilites and there will be more..
          </h4>
          <h4>Purpose: Creating as many as utility areas for LOP token on Harmony Chain, reach %100 circulation amount in time and make the LOP token as valueable as possible
          </h4>
          <h4>Contract Address: 0x09e6E20FF399c2134C14232E172ce8ba2b03017E
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
      <h3 className='centerText-portfolio-element'>Binance Smart Chain</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Binance Smart Chain is the second chain of Kilopi project. LOP token on Binance Smart Chain has some utilities and there will be more..
          </h4>
          <h4>Purpose: Creating as many as utility areas for LOP token on Binance Smart Chain, 
            reach %100 circulation amount in time and make the LOP token as valueable as possible
          </h4>
          <h4>Contract Address: 0x20B4620a767D6dCcBB9314104D5Cf0d08d1F7045
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
      <h3 className='centerText-portfolio-element'>Solana Chain</h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Solana Chain is the third chain of Kilopi project. LOP token on Solana Chain has been created to provide a solid liquitiy for the Kilopi project.
          </h4>
          <h4>Purpose: Creating as much as liquitiy possible, reach %100 circulation amount in time and make the LOP token as valueable as possible
          </h4>
          <h4>Contract Address: 7MAb9qisVNaMNt7wtjnMjCBUyaGswBKHGjzxW6Jhx9c2
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
        <h2 className="centerText">About the Foundation</h2>
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
            <h3>Ecosystem</h3>
            <a href="#docs">Docs</a>
            <a href="#github">GitHub</a>
          </div>
          <div className="footer-links-column">
            <h3>LOP token</h3>
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
