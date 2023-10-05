import { useLocation } from 'react-router-dom';

import { useGreeny } from '../../contexts/GreenyContext';

import { allGreeniesTitle } from '../../utils/constants';

import { Greeny } from '../Greeny/Greeny';
import { Search } from '../common/Search';


export const GreeniesGrid = () => {

    const { greenies, searchInput } = useGreeny();
    const location = useLocation();

    const filteredGreenies = greenies.filter((greeny) => {
        //if no input the return all original greenies
        if (searchInput === '') {
            return greeny;
        }
        else {
            return greeny.title.toLowerCase().includes(searchInput)
        }
    })

    return (
        <>
            {location.pathname === "/greenies" &&
                <Search />
            }
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 tracking-wide capitalize lg:text-4xl dark:text-white">
                        {allGreeniesTitle}
                    </h1>
                    <div className="grid grid-cols-4 gap-8 mt-12 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3">
                        {filteredGreenies.length < 1
                            ? <p className='text-lg tracking-wide'>There are no Greenies that match your search.</p>
                            : filteredGreenies.reverse().map((greeny) => (
                                <Greeny key={greeny.id} greeny={greeny} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}