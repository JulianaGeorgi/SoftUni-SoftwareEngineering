import { useState } from "react";

export const Register = () => {

    const [formValues, setValues] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const onSubmitHandler = (e) => {
        e.preventDefault() 
    };

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };


    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-forest">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-champagne shadow-md sm:max-w-md sm:rounded-lg opacity-90">
                    <div>
                        <h3 className="text-4xl font-bold text-font-dark text-center">
                            Join Greeny
                        </h3>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Username
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formValues.username}
                                    onChange={onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formValues.email}
                                    onChange={onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formValues.password}
                                    onChange={onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="repeatPassword"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="repeatPassword"
                                    id="repeatPassword"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={formValues.repeatPassword}
                                    onChange={onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-around mt-4">
                            <a
                                className="text-m text-font-dark underline hover:text-gray-900"
                                href="/login"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}