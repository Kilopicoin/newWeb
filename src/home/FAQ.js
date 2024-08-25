import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const FAQItem = ({id, quest, answer}) => {
      return (
        <div className="faq-item" onClick={() => toggleFAQ(id)}>
          <div className="faq-question">
            <h3>{quest}</h3>
            <span>{activeIndex === id ? '-' : '+'}</span>
          </div>
          {activeIndex === id && (
            <div className="faq-answer">
              <p>{answer}</p>
            </div>
          )}
        </div>
      );
    };

    return (
      <div id="faq-section">
        <div className='faq-section-inside'>
          <h2 className="centerText">Frequently Asked Questions</h2>
          <div className="faq-container">
            {/* Existing FAQ Items */}

            {/* New FAQ Items */}
            <FAQItem id={1} quest={"What is Kilopi?"}
              answer={"Kilopi is a tokenized ecosystem where sustainable web3 applications are being developed by the organic team and community."}/>
            <FAQItem id={2} quest={"What does \"tokenized ecosystem\" mean?"}
              answer={"It means that the project has many applications and all of them have functions that use the token of the project."}/>
            <FAQItem id={3} quest={"What does \"sustainable web3 applications\" mean?"}
              answer={"It means that the applications are web3-based, with crucial data being stored and managed by blockchain technology. These applications are focused on long-term sustainable solutions rather than short-term trends."}/>
            <FAQItem id={4} quest={"What does \"organic community\" mean?"}
              answer={"It means that the project does not involve any fake attempts. Everything is ongoing organically, and the community is growing naturally."}/>
            <FAQItem id={5} quest={"What is a D.A.O?"}
              answer={"D.A.O stands for Decentralized Autonomous Organization, where there is no central authority."}/>
            <FAQItem id={6} quest={"What is Kilopi D.A.O?"}
              answer={"Kilopi D.A.O is the main structure where decisions are made. It consists of all community channels like Telegram, Twitter, and YouTube, and includes a core web3 application where the community can propose and comment."}/>
            <FAQItem id={7} quest={"What is the purpose of the Kilopi D.A.O?"}
              answer={"The purpose of the Kilopi D.A.O is to build a fair and sustainable decentralized autonomous organization to create sustainable decentralized applications on blockchains."}/>
            <FAQItem id={8} quest={"How can I get involved in Kilopi D.A.O?"}
              answer={"There are 4 ways. 1. You can build web3 applications, 2. You can do marketing activities, 3. You can invest, 4. You can use Ecosystem Applications"}/>
            <FAQItem id={9} quest={"What is the role of the LOP token in Kilopi D.A.O?"}
              answer={"All processes in Kilopi D.A.O require LOP tokens to make the system sustainable and prevent flooding. You can withdraw your tokens after a month without any fees."}/>
            <FAQItem id={10} quest={"How many total dApps will the Kilopi project have?"}
              answer={"The number is unlimited. The main team will start a new one every time a dApp development is finalized."}/>
            <FAQItem id={11} quest={"Can I stake my LOP tokens?"}
              answer={"Yes. For Harmony Chain, you can use Collector Application in the Ecosystem. For Binance Smart Chain, you can use \"Application Development Protocol\" or \"Marketing Protocol\" in the Ecosystem, for Solana Chain, there is only liquidity staking option on Raydium DEX."}/>
            <FAQItem id={12} quest={"Is there an exit plan from the project?"}
              answer={"No, there is no exit plan from the Kilopi project. Core team will keep educating new people and develop as many as decentralized applications until the circulation supply reaches to maximum supply."}/>
            <FAQItem id={13} quest={"I have another question!"}
              answer={"Please send an email to info@kilopi.net. We will reply back as soon as possible."}/>
          </div>
        </div>
        
      </div>
    );
}

export default FAQ;
