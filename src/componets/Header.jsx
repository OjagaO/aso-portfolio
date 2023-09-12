import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { SiBookstack, SiGithub, SiZenn } from "react-icons/si";

const Header = () => {
    let handleClickSp = function () {
        const openBtn = document.getElementById("btn-area");
        const spHeader = document.getElementById("open-hd");
        openBtn.classList.toggle("swich");
        spHeader.classList.toggle("swich");
    };

    return (
        <div className="side-header">
            <nav className="side-bar">
                <div className="header-logo-box">
                    <Link className="index-link header-list-logo target" to="/aso-portfolio/">
                        <img className="header-logo" src="./images/logo/toukalogo4.png" alt="logo"></img>
                    </Link>
                    <Link className="about-link header-list-item target to_a" to="/aso-portfolio/about">
                        <img className="mono-logo" src="./images/logo/image.man.png" alt="logo"></img>
                        <p className="header-list-item__title">About</p>
                    </Link>
                    <Link className="works-link header-list-item target to_w" to="/aso-portfolio/work">
                        <img className="mono-logo" src="./images/logo/image.notepc.png" alt="logo"></img>
                        <p className="header-list-item__title">Works</p>
                    </Link>
                    <Link className="contact-link header-list-item target to_c" to="/aso-portfolio/contact">
                        <img className="mono-logo" src="./images/logo/image.phone.png" alt="logo"></img>
                        <p className="header-list-item__title">Contact</p>
                    </Link>
                    <div className="sns-pc">
                        <ul className="sns-link-box">
                            <li className="sns-link">
                                <Link to="https://zenn.dev/h_aso" target="_blank">
                                    <SiZenn />
                                </Link>
                            </li>
                            <li className="sns-link">
                                <Link to="https://zenn.dev/h_aso" target="_blank">
                                    <SiGithub />
                                </Link>
                            </li>
                            <li className="sns-link">
                                <Link to="https://zenn.dev/h_aso" target="_blank">
                                    <SiBookstack />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger">
                        <div className="hamburger-btn">
                            <div id="btn-area" onClick={handleClickSp}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="open-hd">
                            <Link className="open-item target to_a" to="/aso-portfolio/about">
                                <img className="mono-logo" src="./images/logo/image.man.png" alt="logo"></img>
                                <p className="">About</p>
                            </Link>
                            <Link className="open-item target to_w" to="/aso-portfolio/work">
                                <img className="mono-logo" src="./images/logo/image.notepc.png" alt="logo"></img>
                                <p className="">Works</p>
                            </Link>
                            <Link className="open-item target to_c" to="/aso-portfolio/contact">
                                <img className="mono-logo" src="./images/logo/image.phone.png" alt="logo"></img>
                                <p className="">Contact</p>
                            </Link>
                            <div className="sns-sp">
                                <ul className="sns-link-box">
                                    <li className="sns-link">
                                        <Link to="https://zenn.dev/h_aso" target="_blank">
                                            <SiZenn />
                                        </Link>
                                    </li>
                                    <li className="sns-link">
                                        <Link to="https://github.com/OjagaO" target="_blank">
                                            <SiGithub />
                                        </Link>
                                    </li>
                                    <li className="sns-link">
                                        <Link to="https://zenn.dev/h_aso" target="_blank">
                                            <SiBookstack />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
