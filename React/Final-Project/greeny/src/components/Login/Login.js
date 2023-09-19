import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

export const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onLoginSubmitHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/profile');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <section className="h-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 dark:bg-neutral-700">
            <div className="flex-col h-full p-10 w-2/3 m-auto">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">

                                {/* <!-- Left column container--> */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">

                                        {/* <!--Logo--> */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48 pt-1 pb-12"
                                                src="/images/greeny-low-resolution-logo-color-on-transparent-background.png"
                                                alt="logo"
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Please login to your account
                                            </h4>
                                        </div>

                                        <form onSubmit={handleSubmit(onLoginSubmitHandler)}>

                                            {/* <!--EMAIL--> */}
                                            <TEInput
                                                name="email"
                                                type="text"
                                                label="Email"
                                                className="mb-4"
                                                id="email"
                                                required={true}
                                                {...register("email", {
                                                    required: "Please enter your email.",
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                        message: "Please enter a valid email."
                                                    }
                                                })}
                                                error={(errors.email)}
                                            ></TEInput>

                                            {errors.email && (
                                                <p className="text-sm text-red-600">{errors.email.message}</p>
                                            )}

                                            {/* <!--PASS--> */}
                                            <TEInput
                                                name="password"
                                                type="password"
                                                label="Password"
                                                id="password"
                                                required={true}
                                                autoComplete="off"
                                                className="mb-4"
                                                // className={`mb-4 form-control ${errors.password && "invalid"}`}
                                                {...register("password", {
                                                    required: "Please enter your password."
                                                })}
                                                error={(errors.password)}
                                            ></TEInput>

                                            {errors.password && (
                                                <p className="text-sm text-red-600">{errors.password.message}</p>
                                            )}

                                            {/* <!--Submit form --> */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="px-10 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                    type="submit"
                                                >
                                                    Log in
                                                </button>

                                                {/* <!--Forgot password link--> */}
                                                {/* <a href="#!">Forgot password?</a> */}
                                            </div>

                                            {/* <!--Register button--> */}
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Don't have an account?</p>
                                                <TERipple rippleColor="light">
                                                    <button
                                                        type="button"
                                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                    >
                                                        <Link to="/register">Register</Link>
                                                    </button>
                                                </TERipple>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* <!-- Right column container with background and description--> */}
                                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-earthDay bg-contain xxl:bg-cover bg-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};
export default Login;