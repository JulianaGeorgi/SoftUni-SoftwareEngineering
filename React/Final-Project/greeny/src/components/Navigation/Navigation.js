import { Link } from "react-router-dom";
import { SocialButtons } from "../Buttons/SocialButtons";

export const Navigation = () => {
    return (
        <nav>
            <div className="logo">
                <a href="/home"><img src="/images/greeny-low-resolution-logo-color-on-transparent-background.png" alt="Greeny" /></a>
            </div>
            <SocialButtons/>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/greenies">Greenies</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li className="button-primary"><Link to="/signup" >SIGN-UP <span><b>♡</b></span></Link></li>
            </ul>
        </nav>
    );
};