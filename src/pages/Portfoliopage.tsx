import * as React from 'react';
import "../styles/Portfoliopage.scss"



const PortfolioPage: React.FunctionComponent = () => {
    return(
        <div className="Container">
            <div className="Title">
                {/* <title className="Title">Portfolio</title> */}
                <h1 className="pageHeader">Portfolio</h1>
                <p className="subText">Here are my published projects</p>
            </div>
            <div className="backgroundSquare">
                
            </div>
        </div>
    );
};

export default PortfolioPage;
