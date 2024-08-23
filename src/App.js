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
            <img src="/images/Kilopi_Full_new.png" alt="kilopi-nav-logo" />
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
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/application-development-protocol" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Build & Earn</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/marketing-protocol" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Promote & Earn</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/exchange-listing-protocol" target="_blank" rel="noopener noreferrer">
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
            <a href="https://kilopi.net/pod/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Application Development Protocol</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/application-development-protocol" target="_blank" rel="noopener noreferrer">
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
            <a href="https://kilopi.net/pod/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Marketing Protocol</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/marketing-protocol" target="_blank" rel="noopener noreferrer">
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
            <a href="https://kilopi.net/pod/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Exchange Listing Protocol</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/exchange-listing-protocol" target="_blank" rel="noopener noreferrer">
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
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>No Doubt</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>No Doubt is a unique transparency decentralized application 
            where users can review all the transactions that have happened from the main LOP token pool of the project
          </h4>
          <h4><div className='inlineRenkli'>Blockchain:</div> Harmony Chain
          </h4>
          <h4><div className='inlineRenkli'>Benefits to the Kilopi:</div> This application builds decentralized trust within the community of the project
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://kilopi.net/nodoubt/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">No Doubt</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/no-doubt" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/nodoubt.png" alt="homepage-hero" width={300} height={300}/>
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
            <a href="https://kilopi.net/staking/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Collector</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/collector" target="_blank" rel="noopener noreferrer">
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
            <a href="https://kilopi.net/pathfinder/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Pathfinder</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pathfinder" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/pathfinder.png" alt="homepage-hero" width={300} height={300}/>
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
            <a href="https://kilopi.net/dao/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">D.A.O</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/decentralized-autonomous-organization" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/dao.png" alt="homepage-hero" width={300} height={300}/>
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
            <a href="https://kilopi.net/mom/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Masters of Management</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/masters-of-management" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/mom.png" alt="homepage-hero" width={300} height={300}/>
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
            <a href="https://kilopi.net/forge/" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Forge</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/forge" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/forge.png" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>



      </div>







      <div id="token-details">


      <h2 className='centerText'>Token Details</h2>



      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Harmony Chain</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Harmony Chain is the main chain of Kilopi project. LOP token on Harmony Chain has many utilites and there will be more..
          </h4>
          <h4><div className='inlineRenkli'>Purpose:</div> Creating as many as utility areas for LOP token on Harmony Chain, reach %100 circulation amount in time and make the LOP token as valueable as possible
          </h4>
          <h4><div className='inlineRenkli'>Contract Address:</div> 0x09e6E20FF399c2134C14232E172ce8ba2b03017E
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://explorer.harmony.one/address/0x09e6e20ff399c2134c14232e172ce8ba2b03017e" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Explorer</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/lop-token/harmony" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/harmony.png" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>


      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Binance Smart Chain</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Binance Smart Chain is the second chain of Kilopi project. LOP token on Binance Smart Chain has some utilities and there will be more..
          </h4>
          <h4><div className='inlineRenkli'>Purpose:</div> Creating as many as utility areas for LOP token on Binance Smart Chain, 
            reach %100 circulation amount in time and make the LOP token as valueable as possible
          </h4>
          <h4><div className='inlineRenkli'>Contract Address:</div> 0x20B4620a767D6dCcBB9314104D5Cf0d08d1F7045
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://bscscan.com/token/0x20b4620a767d6dccbb9314104d5cf0d08d1f7045" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Explorer</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/lop-token/binance-smart-chain" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/bsc.png" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>


      <div className='portfolio-element'>
      <h3 className='centerText-portfolio-element'><div className='inlineRenkli'>Solana Chain</div></h3>
      <div className="hero-section-portfolio">
      
        <div className="hero-content-portfolio">
          <h4>Solana Chain is the third chain of Kilopi project. LOP token on Solana Chain has been created to provide a solid liquitiy for the Kilopi project.
          </h4>
          <h4><div className='inlineRenkli'>Purpose:</div> Creating as much as liquitiy possible, reach %100 circulation amount in time and make the LOP token as valueable as possible
          </h4>
          <h4><div className='inlineRenkli'>Contract Address:</div> 7MAb9qisVNaMNt7wtjnMjCBUyaGswBKHGjzxW6Jhx9c2
          </h4>
          <div className="hero-buttons-portfolio">
            <a href="https://solscan.io/token/7MAb9qisVNaMNt7wtjnMjCBUyaGswBKHGjzxW6Jhx9c2" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Explorer</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/lop-token/solana" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">Docs</button>
            </a>
          </div>
        </div>
        <div className="hero-image-portfolio">
          <img src="/images/solana.png" alt="homepage-hero" width={300} height={300}/>
        </div>
      </div>
      </div>

      </div>

      {/* Team Members Section */}
      <div id="team-section">
        <h2 className="centerText">About the Foundation</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="/images/cem.jpg" alt="Team Member 1" />
            <h3>Cem Tosun</h3>
            <p className="team-role">Founder & Developer</p>
            <p>A civil engineer who has experience for more than 8 years about gaming ecosystems creation, coding, business development and blockchain</p>
            <div className="team-socials">
  <a href="https://t.me/kilopi3142" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-telegram"></i>
  </a>
  <a href="https://www.instagram.com/kilopin3142/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.linkedin.com/in/cem-tosun-45979871/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://twitter.com/kilopi3142_" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.youtube.com/@cemtosun_/videos" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://www.youtube.com/@gemtosun_/videos" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://github.com/Kilopi3142" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
</div>
          </div>
          <div className="team-card">
            <img src="/images/metin.jpg" alt="Team Member 2" />
            <h3>Metin Avcı</h3>
            <p className="team-role">Consultant</p>
            <p>A Logistics Manager and Blockchain Entrepreneur with deep experience in business algorithms</p>
            <div className="team-socials">
  <a href="https://t.me/metinavci61" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-telegram"></i>
  </a>
  <a href="https://www.instagram.com/metinavci.com.tr/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.linkedin.com/in/metin-avci-1239a6225/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://twitter.com/metinavci_lop" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
</div>

          </div>
          <div className="team-card">
            <img src="/images/mesut.png" alt="Team Member 3" />
            <h3>Mesut Demirtaş</h3>
            <p className="team-role">Consultant</p>
            <p>A Crypto Project Founder (Ivy Live) Who has 10 years of experience in Digital Media and Digital Marketing and 8 years of experience in the cryptocurrency industry</p>
            <div className="team-socials">
  <a href="https://t.me/mesut_ivy" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-telegram"></i>
  </a>
  <a href="https://www.linkedin.com/in/mesut-ivy/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://twitter.com/mesut_ivy" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.youtube.com/@kriptoofis" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
</div>

          </div>
          <div className="team-card">
            <img src="/images/bilal.png" alt="Team Member 3"/>
            <h3>Bilal Tekmil</h3>
            <p className="team-role">Business Developer</p>
            <p>An industrial engineering bachelor student who is a blockchain community founder with deep experience at cryptocurrencies</p>
            <div className="team-socials">
  <a href="https://t.me/Bilal_tekmil2534" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-telegram"></i>
  </a>
  <a href="https://www.instagram.com/bilal_tkml/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://twitter.com/BilalTekmil25" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.youtube.com/@BilalTekmil/shorts" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
</div>

          </div>
        </div>



        <div className="code-of-conduct">
          <h3 className="centerText">Code of Conduct</h3>
          <ul className="conduct-list">
            <li><strong>Security:</strong> Our mission is to promote safety, security & best practices throughout the web3 communities.</li>
            <li><strong>Transparency:</strong> Everything we do is decentralized, including governance and payroll.</li>
            <li><strong>Self-Sovereignty:</strong> We enable individuals to decide what they work on.</li>
            <li><strong>Fair Compensation:</strong> We create sustainable revenue streams that flow to contributors.</li>
            <li><strong>Integrity:</strong> We protect each other, our brand identity, and our clients above all else.</li>
            <li><strong>Honesty:</strong> We admit failure, work through challenges, and hold each other accountable.</li>
            <li><strong>Curiosity:</strong> We facilitate contributors' and clients' interests in how Web3 technology will change business forever.</li>
          </ul>
        </div>




      </div>

      <div id="faq-section">
        <h2 className="centerText">Frequently Asked Questions</h2>
        <div className="faq-container">
          {/* Existing FAQ Items */}

          {/* New FAQ Items */}
          <div className="faq-item" onClick={() => toggleFAQ(3)}>
            <div className="faq-question">
              <h3>What is Kilopi?</h3>
              <span>{activeIndex === 3 ? '-' : '+'}</span>
            </div>
            {activeIndex === 3 && (
              <div className="faq-answer">
                <p>Kilopi is a tokenized ecosystem where sustainable web3 applications are being developed by the organic team and community.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(4)}>
            <div className="faq-question">
              <h3>What does "tokenized ecosystem" mean?</h3>
              <span>{activeIndex === 4 ? '-' : '+'}</span>
            </div>
            {activeIndex === 4 && (
              <div className="faq-answer">
                <p>It means that the project has many applications and all of them have functions that use the token of the project.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(5)}>
            <div className="faq-question">
              <h3>What does "sustainable web3 applications" mean?</h3>
              <span>{activeIndex === 5 ? '-' : '+'}</span>
            </div>
            {activeIndex === 5 && (
              <div className="faq-answer">
                <p>It means that the applications are web3-based, with crucial data being stored and managed by blockchain technology. These applications are focused on long-term sustainable solutions rather than short-term trends.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(6)}>
            <div className="faq-question">
              <h3>What does "organic community" mean?</h3>
              <span>{activeIndex === 6 ? '-' : '+'}</span>
            </div>
            {activeIndex === 6 && (
              <div className="faq-answer">
                <p>It means that the project does not involve any fake attempts. Everything is ongoing organically, and the community is growing naturally.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(7)}>
            <div className="faq-question">
              <h3>What is a D.A.O?</h3>
              <span>{activeIndex === 7 ? '-' : '+'}</span>
            </div>
            {activeIndex === 7 && (
              <div className="faq-answer">
                <p>D.A.O stands for Decentralized Autonomous Organization, where there is no central authority.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(8)}>
            <div className="faq-question">
              <h3>What is Kilopi D.A.O?</h3>
              <span>{activeIndex === 8 ? '-' : '+'}</span>
            </div>
            {activeIndex === 8 && (
              <div className="faq-answer">
                <p>Kilopi D.A.O is the main structure where decisions are made. It consists of all community channels like Telegram, Twitter, and YouTube, and includes a core web3 application where the community can propose and comment.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(9)}>
            <div className="faq-question">
              <h3>What is the purpose of the Kilopi D.A.O?</h3>
              <span>{activeIndex === 9 ? '-' : '+'}</span>
            </div>
            {activeIndex === 9 && (
              <div className="faq-answer">
                <p>The purpose of the Kilopi D.A.O is to build a fair and sustainable decentralized autonomous organization to create sustainable decentralized applications on blockchains.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(10)}>
            <div className="faq-question">
              <h3>How can I get involved in Kilopi D.A.O?</h3>
              <span>{activeIndex === 10 ? '-' : '+'}</span>
            </div>
            {activeIndex === 10 && (
              <div className="faq-answer">
                <p>There are 4 ways. 1. You can build web3 applications, 2. You can do marketing activities, 3. You can invest, 4. You can use Ecosystem Applications</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(11)}>
            <div className="faq-question">
              <h3>What is the role of the LOP token in Kilopi D.A.O?</h3>
              <span>{activeIndex === 11 ? '-' : '+'}</span>
            </div>
            {activeIndex === 11 && (
              <div className="faq-answer">
                <p>All processes in Kilopi D.A.O require LOP tokens to make the system sustainable and prevent flooding. You can withdraw your tokens after a month without any fees.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(12)}>
            <div className="faq-question">
              <h3>How many total dApps will the Kilopi project have?</h3>
              <span>{activeIndex === 12 ? '-' : '+'}</span>
            </div>
            {activeIndex === 12 && (
              <div className="faq-answer">
                <p>The number is unlimited. The main team will start a new one every time a dApp development is finalized.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(14)}>
            <div className="faq-question">
              <h3>Can I stake my LOP tokens?</h3>
              <span>{activeIndex === 14 ? '-' : '+'}</span>
            </div>
            {activeIndex === 14 && (
              <div className="faq-answer">
                <p>Yes. For Harmony Chain, you can use Collector Application in the Ecosystem. For Binance Smart Chain, 
                  you can use "Application Development Protocol" or "Marketing Protocol" in the Ecosystem, for Solana Chain, 
                  there is only liquidity staking option on Raydium DEX.
                </p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(18)}>
            <div className="faq-question">
              <h3>Is there an exit plan from the project?</h3>
              <span>{activeIndex === 18 ? '-' : '+'}</span>
            </div>
            {activeIndex === 18 && (
              <div className="faq-answer">
                <p>No, there is no exit plan from the Kilopi project. Core team will keep educating new people and develop as many as decentralized applications 
                  until the circulation supply reaches to maximum supply.</p>
              </div>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(19)}>
            <div className="faq-question">
              <h3>I have another question!</h3>
              <span>{activeIndex === 19 ? '-' : '+'}</span>
            </div>
            {activeIndex === 19 && (
              <div className="faq-answer">
                <p>Please send an email to info@kilopi.net. We will reply back as soon as possible.</p>
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
              <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/application-development-protocol" target="_blank" rel="noopener noreferrer">
                <button className="primary-button">Start Building</button>
              </a>
              <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/marketing-protocol" target="_blank" rel="noopener noreferrer">
                <button className="primary-button">Start Promoting</button>
              </a>
              <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/exchange-listing-protocol" target="_blank" rel="noopener noreferrer">
                <button className="primary-button">Start Investing</button>
              </a>
            </div>
          </div>


          <div className="footer-links">
      <a href="https://t.me/tokenkilopi" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-telegram"></i>
      </a>
      <a href="https://x.com/kilopicoin" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/company/kilopi-d-a-o/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.youtube.com/@KilopiProject" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="mailto:info@kilopi.net" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="https://github.com/Kilopicoin" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://medium.com/@kilopi_lop" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-medium"></i>
      </a>
    </div>



        </div>

        {/* Footer Menu */}
        <div className="footer-menu">
          <div className="footer-links-column">
            <h3>Docs</h3>
            <a href="https://kilopi.gitbook.io/kilopi-docs/ecosystem/intro" target="_blank" rel="noopener noreferrer">Ecosystem</a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/lop-token/intro" target="_blank" rel="noopener noreferrer">LOP Token</a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/foundation/intro" target="_blank" rel="noopener noreferrer">Foundation</a>
          </div>
          <div className="footer-links-column">
            <h3>Proof of Development</h3>
            <a href="https://kilopi.net/pod/" target="_blank" rel="noopener noreferrer">Application Development Protocol</a>
            <a href="https://kilopi.net/pod/" target="_blank" rel="noopener noreferrer">Marketing Protocol</a>
            <a href="https://kilopi.net/pod/" target="_blank" rel="noopener noreferrer">Exchange Listing Protocol</a>
          </div>
          <div className="footer-links-column">
            <h3>D.A.O</h3>
            <a href="https://kilopi.net/nodoubt/" target="_blank" rel="noopener noreferrer">No Doubt</a>
            <a href="https://kilopi.net/pathfinder/" target="_blank" rel="noopener noreferrer">Pathfinder</a>
            <a href="https://kilopi.net/dao/" target="_blank" rel="noopener noreferrer">D.A.O dApp</a>
          </div>
          <div className="footer-links-column">
            <h3>Tools</h3>
            <a href="https://kilopi.net/staking/" target="_blank" rel="noopener noreferrer">Collector</a>
            <a href="https://kilopi.net/forge/" target="_blank" rel="noopener noreferrer">Forge</a>
          </div>
          <div className="footer-links-column">
            <h3>Games</h3>
            <a href="https://kilopi.net/mom/" target="_blank" rel="noopener noreferrer">Masters of Management</a>
          </div>
        </div>



        <div className="footer-logo">
            <img src="/images/Kilopi_Full_new.png" alt="kilopi-logo" />
          </div>
          
        
      </footer>
    </div>
  );
}

export default App;
