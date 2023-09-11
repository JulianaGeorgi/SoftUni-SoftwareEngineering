import { Link } from "react-router-dom";
import { useGreeny } from "../../../contexts/GreenyContext";

export const Event = () => {

    const { greenies } = useGreeny();

    return (

        <div className='events-item-grid'>
            {greenies.map((greeny) => (
                <div className="event-item" key={greeny.id}>
                    <figure className="event-img">
                        <img alt={greeny.name} src={greeny.imageUrl} />
                    </figure>
                    <div className="description">
                        <h3>{greeny.name}</h3>
                        <p>{greeny.content}</p>
                    </div>
                    <button className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                        <Link to={`/greenies/${greeny.id}`}>PARTICIPATE <span><b>♡</b></span></Link>
                    </button>
                </div>
            ))}

            {/* <div className='event-item'>
                <figure className='event-img'>
                    <img alt='community cleaning streets' src='https://hips.hearstapps.com/hmg-prod/images/plant-for-the-earth-royalty-free-image-1635783818.jpg' />
                </figure>
                <div className="description">
                    <h3>Plant trees in Setubal</h3>
                    <p>Trees help to clean the air we breathe. Through their leaves and bark, they absorb harmful pollutants and release clean oxygen for us to breathe.</p>
                </div>
                <button className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"><Link to='#' >PARTICIPATE <span><b>♡</b></span></Link></button>
            </div>

            <div className='event-item'>
                <figure className='event-img'>
                    <img alt='community cleaning streets' src='https://www.asa.org.uk/static/e62f1276-4d5b-4748-ac9984ab72d4a049/news_detail_5bb4b0e96686ba966ab7dc98c4695a68_4a7c7e45a350/Recycle-Image.png' />
                </figure>
                <div className="description">
                    <h3>Recycle better</h3>
                    <p>Learn practical tips on how to improve your recycling habits.By reducing, reusing, recycling and buying items made to last, you can lower the amount of waste you create.</p>
                </div>
                <button className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"><Link to='#' >PARTICIPATE <span><b>♡</b></span></Link></button>
            </div>

            <div className='event-item'>
                <figure className='event-img'>
                    <img alt='community cleaning streets' src='https://img.freepik.com/free-photo/close-up-hands-holding-book-exchange-sign_23-2148882770.jpg?w=2000' />
                </figure>
                <div className="description">
                    <h3>Book exchange</h3>
                    <p>Bring a book that you would like to exchange.</p>
                </div>
                <button className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"><Link to='#' >PARTICIPATE <span><b>♡</b></span></Link></button>
            </div>

            <div className='event-item'>
                <figure className='event-img'>
                    <img alt='community cleaning streets' src='https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/home-and-garden/gardening/garden-wildlife/beginners-guide-to-beekeeping.jpg' />
                </figure>
                <div className="description">
                    <h3>Beekeeping introduction</h3>
                    <p>Learn how to be a beekeeper. This course is suitable for complete beginners as well as participants with some beekeeping experience.</p>
                </div>
                <button className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"><Link to='#' >PARTICIPATE <span><b>♡</b></span></Link></button>
            </div>

            <div className='event-item'>
                <figure className='event-img'>
                    <img alt='community cleaning streets' src='https://www.ecoandbeyond.co/wp-content/uploads/2019/08/impact-of-food-wastage-apples-rotting-1230x615-c-default.jpg' />
                </figure>
                <div className="description">
                    <h3>Food economics - e-learning</h3>
                    <p>Learn about the impact of our foods.</p>
                </div>
                <button className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"><Link to='#' >PARTICIPATE <span><b>♡</b></span></Link></button>
            </div> */}

        </div>
    )
}