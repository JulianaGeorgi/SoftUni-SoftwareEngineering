import { Link } from "react-router-dom";

export const UserGreenySnippet = ({greeny}) => {
   
    return (
        <div className="flex">
            <div className="flex-1">
                <p className="px-4 ml-2 mt-3 text-s font-bold text-gray-700 hover:underline">
                <Link to={`/greenies/${greeny.id}`}>{greeny.title}</Link>
                </p>
                <h2 className="px-4 ml-2 w-48 text-gray-400 hover:underline">
                    #{greeny.category}
                </h2>
            </div>
        </div>
    );
}
