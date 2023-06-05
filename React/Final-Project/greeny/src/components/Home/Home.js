import { Link } from 'react-router-dom';
import { Activity } from '../Activities/Activity/Activity';
import { Greeny } from '../Greenies/Greeny';

export const Home = () => {
    return (
        <section className='home-block'>
            <div className='home-top-block'>
                <header className='home-header'>
                    <h1>#1 Green App.</h1>
                    <h1>Get inspired anytime, anywhere. Start today.</h1>
                    <h3>Track your impact.</h3>
                    <button className='button-primary mrg-left'><Link to='/signup' >SIGN UP FOR FREE <span><b>♡</b></span></Link></button>
                </header>
            </div>

            <div className='activities-block'>
                <div className='activities-header'>
                    <h2>Go greeny. Get results.</h2>
                    <h3>Join 1+ million members on the top digital green platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.</h3>
                </div>
                <div className='activities-item-grid'>
                    <Activity />
                </div>
            </div>

            <div className='greenies-block'>
                <div className='greenies-header'>
                    <h2>Unlimited Greenies.</h2>
                    <h3>Never get bored. Get results with short & effective actions you can do anywhere.</h3>
                </div>
                <div className='greenies-grid'>
                    <Greeny />
                </div>
            </div>
        </section>

    );
};