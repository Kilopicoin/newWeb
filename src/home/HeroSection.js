import React from 'react';
import './HeroSection.css';
import { useTranslation } from 'react-i18next';
import MainPng from '../images/robot-holding-chain.png';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="hero-section">
            <div className='hero-section-inside'>
                <div className="hero-content">
                    <h1>{t("heroSectionH1")}</h1>
                    <h2>{t("heroSectionH2")}</h2>

                </div>
                <div className="hero-image">
                    <img src={MainPng} alt="homepage-hero" width={1500} height={1500} />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
