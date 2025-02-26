import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaGraduationCap } from "react-icons/fa";
import { FaXTwitter, FaCartShopping } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";

const Footer = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setTooltipVisible(true);
            })
            .catch((err) => {
                console.error("Could not copy text: ", err);
            });
    };

    useEffect(() => {
        if (tooltipVisible) {
            const timer = setTimeout(() => {
                setTooltipVisible(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [tooltipVisible]);

    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-info">
                    <h3>Gravesend Spartans</h3>
                    <div className="footer-contact-info">
                        <h4>For Inquiries:</h4>
                        <a
                            href="mailto:tongj@gravesendgrammar.com"
                            className="email-button"
                        >
                            Email: <span>tongj@gravesendgrammar.com</span>
                        </a>
                        <div className="call-container">
                            <p id="callButton" href="/">
                                Call: <span>01474 331893 ext 3076</span>
                            </p>
                        </div>
                    </div>
                    <p>Church Walk, Gravesend, DA12 2PR</p>
                </div>

                <div className="footer-logos">
                    <a
                        href="https://www.instagram.com/gravesendgrammar_sport/"
                        target="_blank"
                        rel="noreferrer"
                        className="not-bridge-logo"
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href="https://x.com/GGS_Spartans"
                        target="_blank"
                        rel="noreferrer"
                        className="not-bridge-logo"
                    >
                        <FaXTwitter size={30} />
                    </a>
                    <a
                        href="https://www.youtube.com/@GGSHoops"
                        target="_blank"
                        rel="noreferrer"
                        className="not-bridge-logo"
                    >
                        <FaYoutube size={30} />
                    </a>
                    <a
                        href="https://www.gravesendgrammar.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="not-bridge-logo"
                    >
                        <FaGraduationCap size={30} />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="not-bridge-logo"
                    >
                        <GiClothes size={30} />
                    </a>
                    <a
                        href="https://www.gravesendgrammar.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="not-bridge-logo"
                    >
                        <FaCartShopping size={30} />
                    </a>
                    <a
                        href="https://www.thebridgegroup.uk.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="/assets/bridgegroupsquarelogo (1)-Photoroom.png"
                            alt="Bridge Group Logo"
                            className="bridge-logo"
                        />
                    </a>
                </div>
            </div>
            <div className="me">
                <p>Made by E S Heer © {new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer;
