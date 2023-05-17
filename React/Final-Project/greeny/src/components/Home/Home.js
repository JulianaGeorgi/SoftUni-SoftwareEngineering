import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <section className="home-section">
            <header className="top-section">
                <div className="top-section-title">
                    <h1>#1 Green App.</h1>
                    <h1>Get inspired anytime, anywhere. Start today.</h1>
                    <p>Track your impact.</p>
                    <button className="button-primary mrg-left"><Link to="/signup" >SIGN-UP FOR FREE <span><b>♡</b></span></Link></button>
                </div>
            </header>
        </section>
    );
};