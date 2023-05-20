import { Link } from "react-router-dom";

export const Subscribe = () => {
    return (
        <section className='subscribe-block'>
            <h2>Join & get inspired</h2>
            <p>Receive weekly greenies that can inspire you to make an impact.</p>
            <form>
                <div className='input-box'>
                    <input type='text' id='email' name='subscription-email' placeholder='Type your email' />
                    <button className='button-primary'>
                    <Link to='/about'>Subscribe</Link></button>
                    <p className='mini'>By clicking 'Sign Up', you consent to Greeny using your email address to receive emails about initiatives, events, greenies and more. You can opt-out at any time.</p>
                </div>
            </form>
        </section>
    );
};