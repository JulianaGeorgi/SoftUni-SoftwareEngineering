import { Link } from "react-router-dom";

export const SocialButtons = () => {
    return (
        <ul className="flex justify-end py-1">
            <li><Link to="https://www.facebook.com/greeny" className="fa fa-facebook rounded-full py-2 px-2 text-watermelon-red hover:text-blue-500"></Link></li>
            <li><Link to="https://www.twitter.com/greeny" className="fa fa-twitter rounded-full py-2 px-2 text-watermelon-red hover:text-blue-500"></Link></li>
            <li><Link to="https://www.instagram.com/greeny" className="fa fa-instagram rounded-full py-2 px-2 text-watermelon-red hover:text-blue-500"></Link></li>
            <li><Link to="https://www.linkedin.com/greeny" className="fa fa-linkedin rounded-full py-2 px-2 text-watermelon-red hover:text-blue-500"></Link></li>
        </ul>
    );
};