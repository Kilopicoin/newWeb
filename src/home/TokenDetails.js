import React from 'react';
import './TokenDetails.css';
import HarmonyPng from '../images/harmony.png';
import BinancePng from '../images/bsc.png';

import PortfolioElement from './PortfolioElement';

const TokenDetails = () => {
    

    return (
      <div id="token-details">
        <div className="token-details-inside">
          <h2 className='centerText'>Token Details</h2>
          <h4 className='briefh4'>
          The LOP token is the cornerstone of the Kilopi ecosystem, functioning across multiple blockchains such as Harmony and Binance Smart Chain. With a deflationary model and a focus on utility, the LOP token is designed to increase in value over time. As you interact with the various dApps and protocols, you’ll see firsthand how LOP tokens play a critical role in driving the ecosystem forward.
          </h4>
          <div className='token-details-buttons'>
            <a href="https://kilopi.gitbook.io/kilopi-docs/lop-token/tokenomics" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Tokenomics</button>
            </a>
            <a href="https://kilopi.gitbook.io/kilopi-docs/lop-token/staking" target="_blank" rel="noopener noreferrer">
              <button className="primary-button">Staking</button>
            </a>
          </div> 
          <PortfolioElement 
            title={"Harmony Chain"}
            info={"Harmony Chain is the main chain of Kilopi project. LOP token on Harmony Chain has many utilites and there will be more.."}
            miniTitle1={"Purpose: "}
            miniInfo1={"Creating as many as utility areas for LOP token on Harmony Chain, reach %100 circulation amount in time and make the LOP token as valueable as possible"}
            miniTitle2={"Contract Address: "}
            miniInfo2={"0x09e6E20FF399c2134C14232E172ce8ba2b03017E"}
            button1Name={"Explorer"}
            button1Link={"https://explorer.harmony.one/address/0x09e6e20ff399c2134c14232e172ce8ba2b03017e"}
            button2Name={"DEX Liquidity"}
            button2Link={"https://dexscreener.com/harmony/0x18af5deaad5d9d5898753620e625f2c90f106143"}
            button3Name={"Docs"}
            button3Link={"https://kilopi.gitbook.io/kilopi-docs/lop-token/harmony"}
            imageSrc={HarmonyPng}
          />
          <PortfolioElement 
            title={"Binance Smart Chain"}
            info={"Binance Smart Chain is the second chain of Kilopi project. LOP token on Binance Smart Chain has some utilities and there will be more.."}
            miniTitle1={"Purpose: "}
            miniInfo1={"Creating as many as utility areas for LOP token on Binance Smart Chain, reach %100 circulation amount in time and make the LOP token as valueable as possible"}
            miniTitle2={"Contract Address: "}
            miniInfo2={"0x20B4620a767D6dCcBB9314104D5Cf0d08d1F7045"}
            button1Name={"Explorer"}
            button1Link={"https://bscscan.com/token/0x20b4620a767d6dccbb9314104d5cf0d08d1f7045"}
            button2Name={"DEX Liquidity"}
            button2Link={"https://dexscreener.com/bsc/0x5efd04dd954da8694360f92bd6d4bd83122798c2"}
            button3Name={"Docs"}
            button3Link={"https://kilopi.gitbook.io/kilopi-docs/lop-token/binance-smart-chain"}
            imageSrc={BinancePng}
          />
        </div>
      </div>
    );
}

export default TokenDetails;
