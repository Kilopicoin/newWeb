import React, { useState } from 'react';
import './NavBar.css';
import { useTranslation } from 'react-i18next';
import kilopiFullPng from "../images/Kilopi_Full_new.png";

const NavBar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className='navbar-inside'>
                <div className="navbar-logo">
                    <a href="https://kilopi.net">
                        <img src={kilopiFullPng} alt="ronin-nav-logo" />
                    </a>
                </div>
                <div className="navbar-links">
                    <a className="link-drop-down" href="https://kilopi.gitbook.io/kilopi-docs" target="_blank" rel="noopener noreferrer">{t("docs")}</a>
                    <a className="link-drop-down" href="#portfolio-showcase">{t("ecosystem")}</a>
                    <a className="link-drop-down" href="#token-details">{t("tokenDetails")}</a>
                    <a className="link-drop-down" href="https://kilopi.net/exchanges" target="_blank" rel="noopener noreferrer">{t("markets")}</a>
                    <a className="link-drop-down" href="#team-section">{t("about")}</a>
                    <a className="link-drop-down" href="#faq-section">{t("FAQ")}</a>
                    <a className="link-drop-down" href="#footer-content">{t("community")}</a>

                    <button className='navbar-burger'
                        onClick={() => {setIsOpen(!isOpen)}}
                    >
                        <svg className="navbar-burger-svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='navbar-dropdown' 
                style={{
                    display: isOpen ? '' : 'none',
                }}
            >
                <a href="https://kilopi.gitbook.io/kilopi-docs" target="_blank" rel="noopener noreferrer">{t("docs")}</a>
                <a href="#portfolio-showcase">{t("ecosystem")}</a>
                <a href="#token-details">{t("tokenDetails")}</a>
                <a href="https://kilopi.net/exchanges" target="_blank" rel="noopener noreferrer">{t("markets")}</a>
                <a href="#team-section">{t("about")}</a>
                <a href="#faq-section">{t("FAQ")}</a>
                <a href="#footer-content">{t("community")}</a>
            </div>
      </nav>
    );
}

export default NavBar;
