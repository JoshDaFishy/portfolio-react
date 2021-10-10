import * as React from 'react';
import discord from "../assets/Homepage/Discord.svg"
import conqu3red from "../assets/Homepage/conqu3red.svg"
import email from "../assets/Homepage/Email.svg"
import reddit from "../assets/Homepage/Reddit.svg"

// const Test = () => {
//     <PortfolioPage/>
// };


const Homepage: React.FC = () => {
    return (
        <div>
            <div className="container">
                <div className="title-container">
                    <h1 className="title">👋 Hi, I’m Josh</h1>
                </div>

                <div className="text">
                    <p>I am an aspiring MERN Stack developer.</p>
                </div>
                <div className="image-container">
                    <a href="/discord"><img src={discord} alt="Discord" /></a>
                    <a href="/conqu3red"><img src={conqu3red} alt="Apple Music" className="conqu3red" /></a>
                    <a href="https://reddit.com"><img src={email} alt="Email" /></a>
                    <a href="https://reddit.com"><img src={reddit} alt="Reddit" /></a>
                </div>
                <div className="portfolioButton">
                    <a href="/portfolio"><button className="button-portfolio">Portfolio</button></a>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
