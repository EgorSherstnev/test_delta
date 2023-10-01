import React, { useState, useEffect } from "react";
import HeaderAvatar from "../pics/Avatar profile.jpg"
import MailLogo from "../pics/Mail.jpg"
import PhoneLogo from "../pics/Phone.jpg"
import { getImages } from "../http/imagesAPI";

const Header = () => {

    return (
        <div 
            className="header-container header"
        >
           <div className="header-content">
            <div className="left__wifi">
                <img src={HeaderAvatar} alt="avatar" className="heder-avatar" />
                <div className="header-info">
                    <div className="header-username">
                        Ricardo Cooper
                    </div>
                    <div 
                            className="header__message-button"
                        >
                            <img src={MailLogo} alt="mail button" className="" />
                            <span>Message</span>
                    </div>
                    <div 
                            className="header__message-button"
                        >
                            <img src={PhoneLogo} alt="mail button" className="" />
                            <span>Call</span>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Header;