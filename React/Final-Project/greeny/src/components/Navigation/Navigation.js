import { Link } from "react-router-dom";
import { SocialButtons } from "../Buttons/SocialButtons";
import { useAuth } from "../../contexts/AuthContext";

export const Navigation = () => {

    const { currentUser, logout } = useAuth()

    async function handleLogout() {
        try {
            await logout();
        } catch {
            alert("Failed to log out");
        }
    }

    return (
        <div className="page-top">
            <SocialButtons />
            <div className="nav-wrap">
                <nav className="top-nav">
                    <div className="logo">
                        <Link to="/"><img src="/images/greeny-low-resolution-logo-white-on-transparent-background.png" alt="Greeny" /></Link>
                    </div>
                    <ul className="main-menu text-white">
                        <li className="item"><Link to="/">Home</Link></li>
                        <li className="item has-submenu">
                            {/*TODO: Greenies should not be a link */}
                            <a tabIndex="0" href="/#">Greenies</a>
                            <ul className="submenu">
                                <li className="subitem"><a href="/" >Home</a></li>
                                <li className="subitem"><a href="/">Under 5 Minutes</a></li>
                                <li className="subitem"><a href="/">Habit-changers</a></li>
                                <li className="subitem"><a href="/">Big Steps</a></li>
                            </ul>
                        </li>
                        <li className="item"><Link to="/events">Events</Link></li>
                        <li className="item"><Link to="/about">About</Link></li>
                        <li className="item"><Link to="/contact">Contact</Link></li>
                        <li className="toggle"><a href="/"><i className="fas fa-bars"></i></a></li>
                        {!currentUser ?
                            (
                                <div>
                                    <li className="item">
                                        <Link to="/signup" className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500">SIGN-UP <span><b>♡</b></span></Link>
                                    </li>
                                    <li className="item"><Link to="/login">Login</Link></li>
                                </div>
                            )
                            :
                            (
                                <button onClick={handleLogout}>Sign out</button>
                            )}
                    </ul>
                </nav>
            </div>
        </div>
    );
};