import { Link } from "react-router-dom";

export const SocialButtons = () => {
    return (
        <div className="socials-section">
            <Link to="https://www.facebook.com/greeny" className="fa fa-facebook"></Link>
            <Link to="https://www.twitter.com/greeny" className="fa fa-twitter"></Link>
            <Link to="https://www.instagram.com/greeny" className="fa fa-instagram"></Link>
            <Link to="https://www.linkedin.com/greeny" className="fa fa-linkedin"></Link>
        </div>
    );
};