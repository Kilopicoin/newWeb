import React from 'react';
import './Footer.css';
import KilopiFullPng from "../images/Kilopi_Full_new.png";

const Footer = () => {

    return (
        <footer className="footer">
            <div id="footer-content">
                <div className='footer-content-inside'>
                <div className="footer-text">
            <h2>Let's Grow Together</h2>
            <h4 className='briefh4'>At Kilopi, we believe in the power of collaboration and community. Whether you're a developer, marketer, or investor, there’s a place for you in our ecosystem. Together, we can build, promote, and sustain decentralized applications that add value to the LOP token and beyond. Join us on this journey, and let’s grow the Kilopi project together.</h4>
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
        </div>
        <div className='footer-inside'>
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
            <img src={KilopiFullPng} alt="kilopi-logo" />
          </div>
            </div>
      </footer>
    );
}

export default Footer;
