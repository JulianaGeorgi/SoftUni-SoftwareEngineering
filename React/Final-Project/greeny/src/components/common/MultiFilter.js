import { useState, useEffect } from "react";
import { useGreeny } from "../../contexts/GreenyContext";
import { Greeny } from "../Greeny/Greeny";

export const MultiFilter = () => {

    const { greenies } = useGreeny();

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredGreenies, setFilteredGreenies] = useState(greenies);

    let filters = ["Recycle", "Reuse", "Reduce", "Knowledge"];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = greenies.filter((greeny) => greeny.category === selectedCategory);
                return temp;
            });
            setFilteredGreenies(tempItems.flat());
        } else {
            setFilteredGreenies([...greenies]);
        }
    };


    return (

        <div className=" p-10">
            <div className="w-2/3 mx-auto grid grid-cols-3 gap-6">
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`button ${selectedFilters?.includes(category) ? "bg-indigo-600 text-white py-4 px-12 rounded-full" : "bg-gray-300 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
                            }`}
                        key={`filters-${idx}`}
                    >
                        #{category}
                    </button>
                ))}
            </div>
            {selectedFilters.length > 0 && (
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-800 tracking-wide capitalize lg:text-4xl dark:text-white">
                            Greenies by category
                        </h1>
                        <div className="grid grid-cols-4 gap-8 mt-12 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3">
                            {filteredGreenies.length < 1
                                ? <p className='text-lg tracking-wide'>There are no Greenies under this category.</p>
                                : filteredGreenies.reverse().map((greeny) => (
                                    <Greeny key={greeny.id} greeny={greeny} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}