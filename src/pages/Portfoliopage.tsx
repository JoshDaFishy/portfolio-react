import * as React from 'react';
import "../styles/Portfoliopage.scss"
import GithubIcon from "../assets/Githubpage/Github.svg"
import axios from "axios"

import GithubRepositories from '../components/GithubRepositories'

// let githubData = []
// const callData = async () => {
//     axios.get("https://api.github.com/users/Conqu3red/repos")
//     .then((response) => {
//         for (let x in response.data) {
//             console.log(response.data[x].html_url)
//             githubData.push(<p>{response.data[x].html_url}</p>)
//         } 
//     })
// }
const PortfolioPage: React.FunctionComponent = () => {
    return(
        
        <div className="Container">
            <div className="Title">
                {/* <title className="Title">Portfolio</title> */}
                <h1 className="pageHeader">Portfolio</h1>
                <p className="subText">Here are my published projects</p>
            </div>
            <a href="https://github.com/JoshDaFishy"><div className="GithubAboutMe">
                <img className="GithubSource" src={GithubIcon} alt="GithubIcon"/>
                <div className="GithubInfo">
                    <p className="GithubCoName">JoshDaFishy</p>
                    <h1 className="GithubName">Github</h1>
                </div>
            </div>
            </a>
            
            <GithubRepositories/>
        
        </div>
    );
};

export default PortfolioPage;
