import React, { useState, useEffect } from "react";
import HeaderAvatar from "../pics/Avatar profile.jpg"
import MailLogo from "../pics/Mail.jpg"
import PhoneLogo from "../pics/Phone.jpg"


const Header = () => {

    return (
        <div 
            className="header-container header"
        >
            <div className="header-content">
                <img src={HeaderAvatar} alt="avatar" className="header-avatar" />
                <div className="header-info">
                    <div className="header-username">
                        Ricardo Cooper
                    </div>
                    <div className="header-buttons">
                        <div 
                                className="header-button message"
                            >
                                <img src={MailLogo} alt="mail button" className="" />
                                <span>Message</span>
                        </div>
                        <div 
                                className="header-button call"
                            >
                                <img src={PhoneLogo} alt="call button" className="" />
                                <span>Call</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;