import React, {useState, useEffect} from 'react';
import HeroSection from './HeroSection';

import "./Home.css";
import PortfolioShowcase from './PortfolioShowcase';
import TokenDetails from './TokenDetails';
import TeamSection from './TeamSection';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home">
            <HeroSection />
            <PortfolioShowcase />
            <TokenDetails />
            <TeamSection />
            <FAQ />
            <Footer />
            {showScrollButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                ↑
                </button>
            )}
        </div>
    );
}

export default Home;
