import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/images/greeny_3.JPG" alt="Greeny" />
            </div>
            <div class="socials-section">
            <Link to="https://www.facebook.com/greeny" class="fa fa-facebook"></Link>
            <Link to="https://www.twitter.com/greeny" class="fa fa-twitter"></Link>
            <Link to="https://www.instagram.com/greeny" class="fa fa-instagram"></Link>
            <Link to="https://www.linkedin.com/greeny" class="fa fa-linkedin"></Link>
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/greenies">Greenies</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/contact">Login</Link></li>
                <li className="button-primary"><Link to="/signup" >SIGN-UP <span><b>♡</b></span></Link></li>
            </ul>
        </nav>
    );
};