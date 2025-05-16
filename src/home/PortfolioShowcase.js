import React from 'react';
import PortfolioElement from './PortfolioElement';
import AppDevPng from '../images/appDev.png';
import MarketingPng from '../images/marketing.png';
import ExchangePng from '../images/exchangelisting.png';
import NodoubPng from '../images/nodoubt.png';
import CollectoPng from '../images/collector.png';
import PathfinderPng from '../images/pathfinder.png';
import DaoPng from '../images/dao.png';
import MomPng from '../images/mom.png';
import ForgePng from '../images/forge.png';
import TheCrownlessPng from '../images/thecrownless.png';
import SpcPng from '../images/spc.png';


import "./PortfolioShowcase.css";

const PortfolioShowcase = () => {


    return (
        <div id="portfolio-showcase">
            <div className='portfolio-showcase-inside'>
                <h2 className='centerText'>Ecosystem</h2>
                <h4 className='briefh4'>
                The Kilopi ecosystem is a diverse network of decentralized applications (dApps) designed to foster innovation, transparency, and sustainability. Each dApp within the ecosystem plays a unique role in enhancing the value of the LOP token, while also providing opportunities for community engagement and participation. Whether you’re building, promoting, staking, or using the dApps, the Kilopi ecosystem empowers you to contribute to the project’s growth and long-term success.
                </h4>
                <PortfolioElement 
                    title={"Application Development Protocol"}
                    info={"Application Development Protocol is a decentralized application where users can create their own web3 applications, stake their LOP tokens, vote for other Kilopi web3 applications and earn LOP tokens depending their actions."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Binance Smart Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Every Web3 Application brings new users, brings value to LOP tokens or burns LOP tokens."}
                    button1Name={"Application Development Protocol"}
                    button1Link={"https://kilopi.net/pod/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/application-development-protocol"}
                    imageSrc={AppDevPng}
                />
                <PortfolioElement 
                    title={"Marketing Protocol"}
                    info={"Marketing Protocol is a decentralized application where users can create their own marketing activities for Kilopi project, stake their LOP tokens, vote for other Kilopi marketing activities and earn LOP tokens depending their actions."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Binance Smart Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Every Marketing Activity brings new users and brings value to LOP tokens."}
                    button1Name={"Marketing Protocol"}
                    button1Link={"https://kilopi.net/pod/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/marketing-protocol"}
                    imageSrc={MarketingPng}
                />
                <PortfolioElement 
                    title={"Exchange Listing Protocol"}
                    info={"Exchange Listing Protocol is a decentralized application where users can review Kilopi's Exchange listing process, contribute to this process and earn interest on their USDT tokens."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Binance Smart Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Every Exchange Listing brings new users and brings value to LOP tokens."}
                    button1Name={"Exchange Listing Protocol"}
                    button1Link={"https://kilopi.net/pod/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/pod/exchange-listing-protocol"}
                    imageSrc={ExchangePng}
                />
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
                    title={"Decentralized Autonomous Organization"}
                    info={"Decentralized Autonomous Organization, Kilopi D.A.O, is a decentralized application where users can create proposals, write opinions and comment on them via LOP tokens."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Harmony Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"New ideas, opinions, comments are being collected and these bring value to the project."}
                    button1Name={"D.A.O"}
                    button1Link={"https://kilopi.net/dao/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/decentralized-autonomous-organization"}
                    imageSrc={DaoPng}
                />
                <PortfolioElement 
                    title={"Masters of Management"}
                    info={"Masters of Management is a decentralized turn-based strategy game where players can create and manage their realms. Players then compete with each other by building solid economies or attacking each other."}
                    miniTitle1={"Blockchain: "}
                    miniInfo1={"Harmony Chain"}
                    miniTitle2={"Benefits to the Kilopi: "}
                    miniInfo2={"Trading between players burns LOP tokens."}
                    button1Name={"Masters of Management"}
                    button1Link={"https://kilopi.net/mom/"}
                    button2Name={"Docs"}
                    button2Link={"https://kilopi.gitbook.io/kilopi-docs/ecosystem/masters-of-management"}
                    imageSrc={MomPng}
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
    imageSrc={TheCrownlessPng}
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
