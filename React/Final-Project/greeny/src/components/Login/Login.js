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
            navigate('/');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <section className="h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="flex-col h-full p-10 w-3/4 m-auto">
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
                                                className="mx-auto w-48 pt-1"
                                                src="/images/greeny-low-resolution-logo-color-on-transparent-background.png"
                                                alt="logo"
                                            />
                                            <h4 className="mb-12 mt-12 pb-1 text-4xl font-bold text-font-dark">
                                                Welcome back
                                            </h4>
                                        </div>

                                        <form onSubmit={handleSubmit(onLoginSubmitHandler)}>
                                            <p className="mb-4">Please login to your account</p>
                                            {/* <!--Username input--> */}
                                            <TEInput
                                                id="email"
                                                name="email"
                                                type="text"
                                                className="mb-4"
                                                required={true}
                                                {...register("email", {
                                                    required: "Please enter your email.",
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                        message: "Please enter a valid email."
                                                    }
                                                })}
                                                error={(errors.username)}
                                            ></TEInput>

                                            {errors.username && (
                                                <p className="text-sm text-red-600">{errors.email.message}</p>
                                            )}

                                            {/* <!--Password input--> */}
                                            <TEInput
                                                id="password"
                                                name="password"
                                                type="password"
                                                required={true}
                                                autoComplete="off"
                                                className={`mb-4 form-control ${errors.password && "invalid"}`}
                                                {...register("password", {
                                                    required: "Please enter your password."
                                                })}
                                                error={(errors.password)}
                                            ></TEInput>
                                            
                                            {errors.password && (
                                                <p className="text-sm text-red-600">
                                                    {errors.password.message}
                                                </p>
                                            )}

                                            {/* <!--Submit button--> */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <TERipple rippleColor="light" className="w-full">
                                                    <button
                                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                        type="submit"
                                                        style={{
                                                            background:
                                                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                        }}
                                                    >
                                                        Log in
                                                    </button>
                                                </TERipple>

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
                                                        <Link to="/signup">Register</Link>
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

    // return (
    //     <>
    //         <h1>Log In</h1>
    //         <form onSubmit={handleSubmit(onLoginSubmitHandler)}>

    //             {/* EMAIL */}
    //             <div>
    //             <label htmlFor="email">Email</label>
    //             <input
    //                 id="email"
    //                 name="email"
    //                 type='email'
    //                 required={true}
    //                 {...register("email", {
    //                     required: "Email is Required!!!",
    //                     pattern: {
    //                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //                         message: "Invalid email address",
    //                     }
    //                 })}
    //                 error={(errors.email)}
    //             // onKeyUp={() => { trigger("email") }}
    //             ></input>
    //             {errors.email && (
    //                 <small className="text-danger">{errors.email.message}</small>
    //             )}
    //             </div>

    //             {/* PASS */}
    //             <div>
    //                 <label>Your password</label>
    //                 <input
    //                     name='password'
    //                     id="password"
    //                     type='password'
    //                     autoComplete='off'
    //                     className={`form-control ${errors.password && "invalid"}`}
    //                     required={true}
    //                     {...register("password", {
    //                         required: "You must specify a password",
    //                         // pattern: {
    //                         //     value: '^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=. (.*.[\W]){1,})(?!.*\s).{8,}$',
    //                         //     message: "Password should contain at least one number and one special character"
    //                         // },
    //                         // minLength: {
    //                         //     value: 8,
    //                         //     message: "Password must be more than 8 characters"
    //                         // },
    //                         // maxLength: {
    //                         //     value: 20,
    //                         //     message: "Password must be less than 20 characters"
    //                         // },
    //                     })}
    //                     // onKeyUp={() => { trigger("password") }}
    //                     error={(errors.password)}
    //                 ></input>
    //                 {errors.password && (
    //                     <small className="text-danger">
    //                         {errors.password.message}
    //                     </small>
    //                 )}
    //             </div >

    //             <button type="submit">Submit</button>
    //         </form >
    //     </>
    // );
};
export default Login;