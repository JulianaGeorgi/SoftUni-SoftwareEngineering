import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import { FeaturedGreeniesGrid } from '../GreeniesGrid/FeaturedGreeniesGrid';

export const Home = () => {

    const { currentUser } = useAuth();

    return (
        <div className='home-page'>
            <div className="h-screen bg-gray-50 flex items-center">
                <section
                    className="w-full bg-cover bg-center py-40"
                    style={{ backgroundImage: 'url("https://amala.earth/cdn/shop/articles/Women_Are_Building_A_Better_Planet_5_Women_Working_Towards_A_Sustainable_India.png?v=1649829499")' }}
                >
                    <div className="container mx-auto text-center text-white">
                        <h1 className="text-5xl font-medium mb-6">Welcome to Greeny</h1>
                        <p className="text-xl mb-12">
                            Get inspired anytime, anywhere. Start today.
                        </p>
                        {!currentUser ? (
                            <button className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"><Link to='/register' >SIGN UP FOR FREE <span><b>♡</b></span></Link></button>
                        )
                            :
                            (
                                <button className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"><Link to='/create' >POST GREENY <span><b>♡</b></span></Link></button>
                            )}

                    </div>
                </section>
            </div>

            <section className='text-center'>
                <div className='events-header'>
                    <h2 className='m-8 text-5xl font-bold tracking-wide'>Go greeny. Get results.</h2>
                    <h3 className='text-2xl tracking-wide'>Join 1+ million members on the top digital green platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.</h3>
                </div>
                <FeaturedGreeniesGrid/>
            </section>
        </div >

    );
};