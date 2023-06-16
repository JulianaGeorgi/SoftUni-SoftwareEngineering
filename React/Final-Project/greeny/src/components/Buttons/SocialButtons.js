import { Link } from "react-router-dom";

export const SocialButtons = () => {
    return (
        <ul className="socials">
            <li><Link to="https://www.facebook.com/greeny" className="fa fa-facebook"></Link></li>
            <li><Link to="https://www.twitter.com/greeny" className="fa fa-twitter"></Link></li>
            <li><Link to="https://www.instagram.com/greeny" className="fa fa-instagram"></Link></li>
            <li><Link to="https://www.linkedin.com/greeny" className="fa fa-linkedin"></Link></li>
        </ul>
    );
};