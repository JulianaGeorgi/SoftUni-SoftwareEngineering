import { Link } from 'react-router-dom';
import { Activity } from '../Activities/Activity/Activity';
import { Category } from '../Category/Category';

export const Home = () => {
    return (
        <section className='home-block'>
            <div className='home-top-block'>
                <header className='home-header'>
                    <h1>#1 Green App.</h1>
                    <h1>Get inspired anytime, anywhere. Start today.</h1>
                    <p>Track your impact.</p>
                    <button className='button-primary mrg-left'><Link to='/signup' >SIGN UP FOR FREE <span><b>♡</b></span></Link></button>
                </header>
            </div>

            <div className='activities-block'>
                <div className='activities-header'>
                    <h2>Go greeny. Get results.</h2>
                    <p>Join 1+ million members on the top digital green platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.</p>
                </div>
                <div className='activities-item-grid'>
                    <Activity />
                </div>
            </div>

            <div className='categories-block'>
            <div className='categories-header'>
                    <h2>Unlimited opportunities.</h2>
                    <p>Never get bored. Get results with short & effective actions you can do anywhere.</p>
                </div>
                <div className='categories-item-grid'>
                    <Category />
                </div>
            </div>
        </section>
        
    );
};