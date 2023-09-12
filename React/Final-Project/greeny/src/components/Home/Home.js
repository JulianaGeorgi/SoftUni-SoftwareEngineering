import { Link } from 'react-router-dom';
import { Event } from '../Events/Event/Event';
import { Greeny } from '../Greenies/Greeny';
import { Subscribe } from '../Subscribe/Subscribe';
import { useAuth } from '../../contexts/AuthContext';

export const Home = () => {

    const { currentUser } = useAuth();

    return (
        <div className='home-page'>
            <header className='home-header'>
                <h1>#1 Green App.</h1>
                <h1>Get inspired anytime, anywhere. Start today.</h1>
                <h3>Track your impact.</h3>
                {!currentUser ? (
                    <button className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"><Link to='/signup' >SIGN UP FOR FREE <span><b>♡</b></span></Link></button>
                )
                    :
                    (
                        <button className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"><Link to='/signup' >POST A GREENY <span><b>♡</b></span></Link></button>
                    )}
            </header>

            <section className='events-block'>
                <div className='events-header'>
                    <h2>Go greeny. Get results.</h2>
                    <h3>Join 1+ million members on the top digital green platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.</h3>
                </div>
                {/* <div className='activities-item-grid'> */}
                <Event />
                {/* </div> */}
            </section>

            <section className='greenies-block'>
                <div className='greenies-header'>
                    <h2>Unlimited Greenies.</h2>
                    <h3>Never get bored. Get results with short & effective actions you can do anywhere.</h3>
                </div>
                <div className='greenies-grid'>
                    <Greeny />
                </div>
            </section>

            <Subscribe />
        </div >

    );
};