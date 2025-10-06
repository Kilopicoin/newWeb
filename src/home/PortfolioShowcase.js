import React from 'react';
import PortfolioElement from './PortfolioElement';
import NodoubPng from '../images/nodoubt.png';
import CollectoPng from '../images/collector.png';
import PathfinderPng from '../images/pathfinder.png';
import MomPng from '../images/mom.png';
import ForgePng from '../images/forge.png';
import TheCrownlessPng from '../images/thecrownless.png';
import PerseusPng from '../images/alien-ship.png';
import SpcPng from '../images/spc.png';
import NftMarketPng from '../images/nftmarket.png';


import "./PortfolioShowcase.css";

const PortfolioShowcase = () => {


    return (
        <div id="portfolio-showcase">
            <div className='portfolio-showcase-inside'>
                <h2 className='centerText'>Ecosystem</h2>
                <h4 className='briefh4'>
                The Kilopi ecosystem is a diverse network of decentralized applications (dApps) designed to foster innovation, transparency, and sustainability. Each dApp within the ecosystem plays a unique role in enhancing the value of the LOP token, while also providing opportunities for community engagement and participation.
                </h4>
                <PortfolioElement 
                    title={"No Doubt"}
                    info={"No Doubt is a unique transparency decentralized application where users can review all the transactions that have happened from the main LOP token pool of the project"}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Harmony Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"This application builds decentralized trust within the community of the project"}
                    button1Name={"No Doubt"}
                    button1Link={"https://kilopi.net/nodoubt/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/no-doubt"}
                    imageSrc={NodoubPng}
                />
                <PortfolioElement 
                    title={"Collector"}
                    info={"Collector is a special staking decentralized application where users can stake their LOP tokens and receive them back with interest. There are many options in Kilopi staking including a regular monthly income model."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Harmony Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Users who stake, commit that they will be supporting the project long term, means solid community."}
                    button1Name={"Collector"}
                    button1Link={"https://kilopi.net/staking/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/collector"}
                    imageSrc={CollectoPng}
                />
                <PortfolioElement 
                    title={"Pathfinder"}
                    info={"Pathfinder is a decentralized poll application where users can vote for Crypto projects via LOP tokens. Then, Founder makes a research and publishes a review video on his youtube for the most voted projects regularly."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Harmony Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Every transaction burns Kilopi [LOP] tokens."}
                    button1Name={"Pathfinder"}
                    button1Link={"https://kilopi.net/pathfinder/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/pathfinder"}
                    imageSrc={PathfinderPng}
                />
                <PortfolioElement 
                    title={"Masters of Management"}
                    info={"Masters of Management is a decentralized turn-based strategy game where players can create and manage their realms. Players then compete with each other by building solid economies or attacking each other."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Harmony Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Trading between players burns LOP tokens."}
                    button1Name={"Masters of Management"}
                    button1Link={"https://kilopi.net/mom/full/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/masters-of-management"}
                    imageSrc={MomPng}
                />
                <PortfolioElement 
                    title={"NFT Marketplace"}
                    info={"NFT Marketplace is a decentralized NFT image marketplace where mainly for the NFTs of Masters of Management and also for other purposes "}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Harmony Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Trading between players burns LOP tokens."}
                    button1Name={"NFT Marketplace"}
                    button1Link={"https://kilopi.net/nftmarket/"}
                    imageSrc={NftMarketPng}
                />


                <PortfolioElement 
    title={"SPC APP"}
    info={"SPC APP is a simple engineering app where the users are able to create and manage their SPC's on chain"}
    miniTitle1={"Blockchain: "}
    miniInfo1={"Harmony"}
    miniTitle2={"Benefits to the Kilopi: "}
    miniInfo2={"Giving Engineers a different perspective with Blockchain and meeting them with Kilopi"}
    button1Name={"SPC App"}
    button1Link={"https://kilopi.net/spcapp/"}
    imageSrc={SpcPng}
/>


                <PortfolioElement 
    title={"The Crownless - Medieval MMORPG"}
    info={"The Crownless is an epic medieval MMORPG game developed under the Kilopi ecosystem. It features a skill-based combat system, lore-rich open world, MOBA-style competitive arenas, and a sustainable in-game economy."}
    miniTitle1={"Blockchain: "}
    miniInfo1={"Harmony, BinanceSmart"}
    miniTitle2={"Benefits to the Kilopi: "}
    miniInfo2={"Brings adoption through gaming, long-term token economy design, and community engagement."}
    button1Name={"The Crownless"}
    button1Link={"https://thecrownless.com/"}
    button2Name={"Docs"}
    button2Link={"https://the-crownlesss-organization.gitbook.io/the-crownless/"}
    imageSrc={TheCrownlessPng}
/>



    <PortfolioElement 
    title={"Perseus - Space Strategy Game"}
    info={"Perseus - Space Strategy Game"}
    miniTitle1={"Blockchain: "}
    miniInfo1={"BinanceSmart"}
    miniTitle2={"Benefits to the Kilopi: "}
    miniInfo2={"Brings adoption through gaming, long-term token economy design, community engagement and Buyback&Burn Design"}
    button1Name={"Perseus"}
    button1Link={"https://kilopi.net/perseus"}
    imageSrc={PerseusPng}
/>

                <PortfolioElement 
                    title={"Forge"}
                    info={"Forge is a tool for creating tokens on some certain Chains. Users can create their own tokens with the latest security standards. Users then create liquidities and markets on their tokens."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Solana, Harmony, BinanceSmart"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Every transaction add Liquidity to LOP token"}
                    button1Name={"Forge"}
                    button1Link={"https://kilopi.net/forge/selector/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/forge"}
                    imageSrc={ForgePng}
                />
            </div>
        </div>
    );
}

export default PortfolioShowcase;
