import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <div className="logo">
               <a href="/home"><img src="/images/greeny-low-resolution-logo-color-on-transparent-background.png" alt="Greeny" /></a> 
            </div>
            <div className="socials-section">
            <Link to="https://www.facebook.com/greeny" className="fa fa-facebook"></Link>
            <Link to="https://www.twitter.com/greeny" className="fa fa-twitter"></Link>
            <Link to="https://www.instagram.com/greeny" className="fa fa-instagram"></Link>
            <Link to="https://www.linkedin.com/greeny" className="fa fa-linkedin"></Link>
            </div>
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