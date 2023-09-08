import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { TERipple } from "tw-elements-react";

import { postServices } from "../../../services/postServices";

export const GreenyDetails = () => {

    const params = useParams();
    const id = params.greenyId;

    const [currentGreeny, setCurrentGreeny] = useState({});

    useEffect(() => {
        async function getCurrentGreeny() {
            try {
              const currentGreeny = await postServices().getGreenyById(id);
              const date = new Date(currentGreeny.timestamp);
              const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${date.getFullYear()}`;
              setCurrentGreeny({...currentGreeny, timestamp:formattedDate});
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
        getCurrentGreeny();
    }, [id]);

    return (
        <div className="max-w-screen-xl mx-auto">
             {currentGreeny && (
            <main className="mt-10">
                <div
                    className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                    style={{ height: "24em" }}
                >
                    <div
                        className="rounded-md absolute left-0 bottom-0 w-full h-full z-10"
                        style={{
                            backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
                        }}
                    />
                    <img
                        src={currentGreeny.imageUrl}
                        className="rounded-md absolute left-0 top-0 w-full h-full z-0 object-cover"
                    />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <a
                            href="#"
                            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                        >
                            Nutrition
                        </a>
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            {currentGreeny.title}
                        </h2>
                        <div className="flex mt-3">
                            <img
                                src="https://randomuser.me/api/portraits/men/97.jpg"
                                className="h-10 w-10 rounded-full mr-2 object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-200 text-sm">
                                    {" "}
                                    {currentGreeny.author}{" "}
                                </p>
                                <p className="font-semibold text-gray-400 text-xs"> {currentGreeny.timestamp} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 mb-12 mx-auto lg:px-0 mt-12 text-gray-700 max-w-screen-md text-lg leading-relaxed">
                    <p>{currentGreeny.content}</p>
                </div>
            </main>)}
            {/* BUTTONS */}
            <div className="flex flex-row justify-center gap-3">
                        <div className="mb-12 pb-1 pt-1 text-center">
                            <TERipple rippleColor="light">
                                <button
                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                    type="button"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                    }}
                                >
                                    Edit
                                </button>
                            </TERipple>
                        </div>
                        <div className="mb-12 pb-1 pt-1 text-center">
                            <TERipple rippleColor="light">
                                <button
                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                    type="button"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                    }}
                                >
                                    Delete
                                </button>
                            </TERipple>
                        </div>
                    </div>
        </div>

    )
}

