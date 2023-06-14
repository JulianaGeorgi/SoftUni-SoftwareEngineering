import { Link } from "react-router-dom";
import { SocialButtons } from "../Buttons/SocialButtons";

export const Navigation = () => {

    // const toggle = document.querySelector(".toggle");
    // const menu = document.querySelector(".menu");
    // /* Toggle mobile menu */
    // function toggleMenu() {
    //     if (menu.classList.contains("active")) {
    //         menu.classList.remove("active");

    //         // adds the menu (hamburger) icon 
    //         toggle.querySelector("a").innerHTML = `<i className="fas fa-bars"></i>`;
    //     } else {
    //         menu.classList.add("active");

    //         // adds the close (x) icon 
    //         toggle.querySelector("a").innerHTML = `<i className="fas fa-times"></i>`;
    //     }
    // }
    // /* Event Listener */
    // toggle.onClick("click", toggleMenu, false);

    // const items = document.querySelectorAll(".item");
    // /* Activate Submenu */
    // function toggleItem() {
    //     if (this.classList.contains("submenu-active")) {
    //         this.classList.remove("submenu-active");
    //     } else if (menu.querySelector(".submenu-active")) {
    //         menu.querySelector(".submenu-active").classList.remove("submenu-active");
    //         this.classList.add("submenu-active");
    //     } else {
    //         this.classList.add("submenu-active");
    //     }
    // }
    // /* Event Listeners */
    // for (let item of items) {
    //     if (item.querySelector(".submenu")) {
    //         item.onClick("click", toggleItem, false);
    //         item.onClick("keypress", toggleItem, false);
    //     }
    // }

    return (
        <div className="pagetop">
            <div className="logo">
                <Link to="/"><img src="/images/greeny-low-resolution-logo-color-on-transparent-background.png" alt="Greeny" /></Link>
            </div>
            <SocialButtons />
            <nav className="topnav">
                <ul className="main-nav">
                    <li className="item"><Link to="/">Home</Link></li>
                    <li className="item has-submenu">
                        {/*TODO: Greenies should not be a link */}
                        <a tabIndex="0" href="/#">Greenies</a>
                        <ul class="submenu">
                            <li className="subitem"><a href="/">Home</a></li>
                            <li className="subitem"><a href="/">Under 5 Minutes</a></li>
                            <li className="subitem"><a href="/">Habit-changers</a></li>
                            <li className="subitem"><a href="/">Big Steps</a></li>
                        </ul>
                    </li>
                    <li className="item"><Link to="/events">Events</Link></li>
                    <li className="item"><Link to="/about">About</Link></li>
                    <li className="item"><Link to="/contact">Contact</Link></li>
                    <li className="item"><Link to="/login">Login</Link></li>
                    <li className="toggle"><a href="/"><i className="fas fa-bars"></i></a></li>
                    <li className="item">
                        <button className="btn button-primary"><Link to="/signup" >SIGN-UP <span><b>♡</b></span></Link></button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};