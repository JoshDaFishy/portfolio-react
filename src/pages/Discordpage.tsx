import * as React from 'react';
import "../styles/Discordpage.scss"
import discordPFP from "../assets/Discordpage/DiscordPFP.jpg"
import battlenetIcon from "../assets/Discordpage/Battlenet.svg"
import twitchIcon from "../assets/Discordpage/Twitch.svg"
import youtubeIcon from "../assets/Discordpage/Youtube.svg"
import steamIcon from "../assets/Discordpage/Steam.svg"

const Discord: React.FunctionComponent = () => {
    return (
        <div className="Container">
            <div className="backgroundsquare">
                <div className="accountinfo">
                    <img className="discordPFPclass" src={discordPFP} alt="Discord" />
                    <div className="discordusername-container">
                        <h1 className="discordusername">JoshDaFishy<span className="discordtag">#0935</span></h1>
                    </div>
                </div>
                <div className="connection">
                    <img className="ConnectionIcon" src={battlenetIcon} alt="BattleNetIcon"/>
                    <div className="ConnectionInfo">
                        <p>EPICMAN#21809</p>
                        <p className="ConnectionName">Battle.NET</p>
                    </div>
                </div>
                <div className="connection">
                    <img className="ConnectionIcon" src={twitchIcon} alt="TwitchIcon"/>
                    <div className="ConnectionInfo">
                        <p>JoshDaFishy</p>
                        <p className="ConnectionName">Twitch</p>
                    </div>
                </div>
                <div className="connection">
                    <img className="YoutubeIcon" src={youtubeIcon} alt="YoutubeIcon"/>
                    <div className="ConnectionInfo">
                        <p>JoshDaFishy</p>
                        <p className="ConnectionName">Youtube</p>
                    </div>
                </div>
                <div className="connection">
                    <img className="ConnectionIcon" src={steamIcon} alt="SteamIcon"/>
                    <div className="ConnectionInfo">
                        <p>JoshDaFishy ( Mentor.gg ) </p>
                        <p className="ConnectionName">Steam</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discord;
