import React from 'react';
import "./PortfolioElement.css";


const PortfolioElement = ({
    title,
    info,
    miniTitle1,
    miniInfo1,
    miniTitle2,
    miniInfo2,
    button1Name,
    button1Link,
    button2Name,
    button2Link,
    button3Name,
    button3Link,
    imageSrc
}) => {

    return (
        <div className='portfolio-element'>
            <h3 className='centerText-portfolio-element'>
                <div className='inlineRenkli'>{title}</div>
            </h3>
            <div className="hero-section-portfolio">
                <div className="hero-background-div">
                    <img src={imageSrc} alt="homepage-hero" width={300} height={300}/>
                </div>
                <div className="hero-content-portfolio">
                    <h4>{info}</h4>
                    <h4>
                        <div className='inlineRenkli'>{miniTitle1}</div>
                        {miniInfo1}
                    </h4>
                    <h4>
                        <div className='inlineRenkli'>{miniTitle2}</div>
                        {miniInfo2}
                    </h4>
                    <div className="hero-buttons-portfolio">
                        {button1Link && button1Name ? (
                        <a href={button1Link} target="_blank" rel="noreferrer">
                            <button className="primary-button">{button1Name}</button>
                        </a>
                        ) : ""}
                        {button2Link && button2Name ? (
                        <a href={button2Link} target="_blank" rel="noreferrer">
                            <button className="primary-button">{button2Name}</button>
                        </a>
                        ) : ""}
                        {button3Link && button3Name ? (
                        <a href={button3Link} target="_blank" rel="noreferrer">
                            <button className="primary-button">{button3Name}</button>
                        </a>
                        ) : ""}
                    </div>
                </div>
                <div className="hero-image-portfolio">
                    <img src={imageSrc} alt="homepage-hero" width={300} height={300}/>
                </div>
            </div>
        </div>
    );
}

export default PortfolioElement;