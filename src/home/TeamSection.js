import React from 'react';
import './TeamSection.css';
import Cem from '../images/cem.jpg';
import Metin from '../images/metin.jpg';
import Mesut from '../images/mesut.png';
import Bilal from '../images/bilal.png';

const TeamSection = () => {

    const TeamCard = ({image, name, role, info, telegramLinks, instagramLinks, linkedinLinks, twitterLinks, youtubeLinks, githubLinks}) => {
        return (
            <div className="team-card">
                <img src={image} alt="Team Member" />
                <h3>{name}</h3>
                <p className="team-role">{role}</p>
                <p className='team-info'>{info}</p>
                <div className="team-socials">
                    {telegramLinks && telegramLinks.length > 0 ? (
                        telegramLinks.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram"></i>
                        </a>
                        ))
                    ) : (
                        ""
                    )}
                    {instagramLinks && instagramLinks.length > 0 ? (
                        instagramLinks.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        ))
                    ) : (
                        ""
                    )}
                    {linkedinLinks && linkedinLinks.length > 0 ? (
                        linkedinLinks.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        ))
                    ) : (
                        ""
                    )}
                    {twitterLinks && twitterLinks.length > 0 ? (
                        twitterLinks.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        ))
                    ) : (
                        ""
                    )}
                    {youtubeLinks && youtubeLinks.length > 0 ? (
                        youtubeLinks.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                        ))
                    ) : (
                        ""
                    )}
                    {githubLinks && githubLinks.length > 0 ? (
                        githubLinks.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        ))
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    };

    return (
        <div id="team-section">
            <div className='team-section-inside'>
                <h2 className="team-section-centerText">About the Foundation</h2>
                <h4 className='briefh4'>The Kilopi Foundation is dedicated to building a decentralized future by fostering innovation and collaboration within the blockchain space. With a commitment to transparency, security, and community-driven development, the foundation leads the way in creating sustainable Web3 applications. Our goal is to empower individuals and organizations to contribute to the ecosystem while benefiting from the opportunities it presents.</h4>
                <div className="team-cards">
                    <TeamCard
                        image={Cem}
                        name={"Cem Tosun"}
                        role={"Founder & Developer"}
                        info={"A civil engineer who has experience for more than 8 years about gaming ecosystems creation, coding, business development and blockchain"}
                        telegramLinks={["https://t.me/kilopi3142"]}
                        instagramLinks={["https://www.instagram.com/kilopin3142/"]}
                        linkedinLinks={["https://www.linkedin.com/in/cem-tosun-45979871/"]}
                        twitterLinks={["https://twitter.com/kilopi3142_"]}
                        youtubeLinks={["https://www.youtube.com/@cemtosun_/videos"]}
                        githubLinks={["https://github.com/Kilopi3142"]}
                    />
                    <TeamCard
                        image={Metin}
                        name={"Metin Avcı"}
                        role={"Consultant"}
                        info={"A Logistics Manager and Blockchain Entrepreneur with deep experience in business algorithms"}
                        telegramLinks={["https://t.me/metinavci61"]}
                        instagramLinks={["https://www.instagram.com/metinavci.com.tr/"]}
                        linkedinLinks={["https://www.linkedin.com/in/metin-avci-1239a6225/"]}
                        twitterLinks={["https://twitter.com/metinavci_lop"]}
                    />
                    <TeamCard
                        image={Mesut}
                        name={"Mesut Demirtaş"}
                        role={"Consultant"}
                        info={"A Crypto Project Founder (Ivy Live) Who has 10 years of experience in Digital Media and Digital Marketing and 8 years of experience in the cryptocurrency industry"}
                        telegramLinks={["https://t.me/mesut_ivy"]}
                        linkedinLinks={["https://www.linkedin.com/in/mesut-ivy/"]}
                        twitterLinks={["https://twitter.com/mesut_ivy"]}
                        youtubeLinks={["https://www.youtube.com/@kriptoofis"]}
                    />
                    <TeamCard
                        image={Bilal}
                        name={"Bilal Tekmil"}
                        role={"Business Developer"}
                        info={"An industrial engineering bachelor student who is a blockchain community founder with deep experience at cryptocurrencies"}
                        telegramLinks={["https://t.me/Bilal_tekmil2534"]}
                        instagramLinks={["https://www.instagram.com/bilal_tkml/"]}
                        twitterLinks={["https://twitter.com/BilalTekmil25"]}
                        youtubeLinks={["https://www.youtube.com/@BilalTekmil/shorts"]}
                    />
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
        </div>
    );
}

export default TeamSection;