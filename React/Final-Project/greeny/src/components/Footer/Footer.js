import { Link } from "react-router-dom";
import { SocialButtons } from "../Buttons/SocialButtons";

export const Footer = () => {
    return (
        <>
            {/* Site footer */}
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="http://scanfcode.com/category/c-language/">C</a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/category/front-end-development/">
                                        UI Design
                                    </a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/category/back-end-development/">
                                        PHP
                                    </a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/category/java-programming-language/">
                                        Java
                                    </a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/category/android/">Android</a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/category/templates/">Templates</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/contact/">Contact Us</a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/contribute-at-scanfcode/">
                                        Contribute
                                    </a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">
                                Copyright © 2023 All Rights Reserved by Greeny.
                                {/* <a href="#">Scanfcode</a>. */}
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <SocialButtons />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};