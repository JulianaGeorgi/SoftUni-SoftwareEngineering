import { useGreeny } from '../../contexts/GreenyContext';
import { Greeny } from '../Greeny/Greeny';

export const GreeniesGrid = ({title}) => {

    const { greenies } = useGreeny();

    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 tracking-wide capitalize lg:text-4xl dark:text-white">
                    {title}
                </h1>
                <div className="grid grid-cols-4 gap-8 mt-12 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3">
                    {greenies.map((greeny) =>(
                    <Greeny key={greeny.id} greeny={greeny}/>
                    ))}

                </div>
            </div>
        </section>
    )
}