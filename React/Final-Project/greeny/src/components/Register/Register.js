import { TEInput, TERipple } from "tw-elements-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

import { DevTool } from "@hookform/devtools";

import { useAuth } from "../../contexts/AuthContext";

export const Register = () => {

    const navigate = useNavigate();
    const { signup, updateUserProfile, saveUserData } = useAuth();

    const form = useForm(
        {
            mode: "onChange",
            defaultValues: {
                // name: "",
                profilePhotoUrl: "",
                email: "",
                username: "",
                password: "",
                repeatPassword: ""
            }
        }
    );

    const { register, control, handleSubmit, formState, watch } = form; // a method that can be accessed on the form object to track the form state
    const { errors, isDirty, isValid } = formState;

    async function onRegisterSubmitHandler(formData) {
        try {
            const userId = await signup(formData.email, formData.password);

            if (!formData.profilePhotoUrl) {
                formData.profilePhotoUrl = "https://e1.pxfuel.com/desktop-wallpaper/940/647/desktop-wallpaper-the-best-16-default-pfp-aesthetic-kidcore-pfp-icon.jpg";
            }

            await updateUserProfile(formData.username, formData.profilePhotoUrl); // update the currentUser object
            await saveUserData(userId, formData.username, formData.profilePhotoUrl); // update in db
            navigate('/');
        } catch (err) {
            alert(`Registration failed - ${err.code - err.message}`);
        };
    }

    return (
        <section className="h-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 dark:bg-neutral-700">
            <div className="h-full p-10 w-2/3 m-auto">
                <div className="g-6 flex h-full w-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">

                                {/* <!-- Left column container--> */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">

                                        {/* <!--Logo--> */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48 pb-12"
                                                src="/images/greeny-low-resolution-logo-color-on-transparent-background.png"
                                                alt="logo"
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Please register an account
                                            </h4>
                                        </div>

                                        <form onSubmit={handleSubmit(onRegisterSubmitHandler)} noValidate>

                                            {/* <!--NAME--> */}
                                            {/* <TEInput
                                                type="text"
                                                label="Name"
                                                className="mb-4"
                                                id="name"
                                                {...register("name",
                                                    {
                                                        required: "Name is required.",
                                                    })}
                                            ></TEInput>
                                            <p className="text-sm text-red-600">{errors.name?.message}</p> */}

                                            {/* <!--EMAIL--> */}
                                            <TEInput
                                                type="email"
                                                label="Email"
                                                className="mb-4"
                                                id="email"
                                                {...register("email",
                                                    {
                                                        required: "Email is required.",
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                            message: "Email is not valid. Please try again."
                                                        }
                                                    },
                                                )}
                                            ></TEInput>
                                            <p className="text-sm text-red-600">{errors.email?.message}</p>

                                            {/* <!--USERNAME--> */}
                                            <TEInput
                                                type="text"
                                                label="Username"
                                                className="mb-4"
                                                id="username"
                                                {...register("username", // same as name={name} ref={ref} onChange={onChange} onBlur={onBlur}
                                                    {
                                                        required: "Username is required.",
                                                        minLength: {
                                                            value: 3,
                                                            message: "Username has to be longer than 3 symbols."
                                                        }
                                                    })}
                                            ></TEInput>
                                            <p className="text-sm text-red-600">{errors.username?.message}</p>

                                             {/* PROFILE PHOTO */}
                                             <div className="mb-6">
                                                <TEInput
                                                    type="url"
                                                    label="Profile photo link (optional)"
                                                    className="mb-2"
                                                    id="profilePhotoUrl"
                                                    {...register("profilePhotoUrl", {
                                                        pattern: {
                                                            value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                                                            message: "Invalid image URL."
                                                        }
                                                    })}
                                                    error={(errors.profilePhotoUrl)}
                                                />
                                                {errors.profilePhotoUrl && (
                                                    <p className="text-red-600 text-sm">{errors.profilePhotoUrl.message}</p>
                                                )}
                                            </div>


                                            {/* <!--PASS--> */}
                                            <TEInput
                                                type="password"
                                                label="Password"
                                                className="mb-4"
                                                autoComplete="off"
                                                id="password"
                                                {...register("password",
                                                    {
                                                        required: "Password is required.",
                                                        minLength: {
                                                            value: 6,
                                                            message: "Password has to be longer than 6 symbols."
                                                        }
                                                    }
                                                )}
                                            ></TEInput>
                                            <p className="text-sm text-red-600">{errors.password?.message}</p>

                                            {/* <!--REPEAT PASS --> */}
                                            <TEInput
                                                type="password"
                                                label="Confirm password"
                                                className="mb-4"
                                                autoComplete="off"
                                                id="repeatPassword"
                                                {...register("repeatPassword",
                                                    {
                                                        required: "Repeat password is required.",
                                                        validate: (repeatPassword) => {
                                                            if (watch('password') !== repeatPassword) {
                                                                return "Passwords do not match.";
                                                            }
                                                        },
                                                    }
                                                )}
                                            ></TEInput>
                                            <p className="text-sm text-red-600">{errors.repeatPassword?.message}</p>

                                            {/* <!--Submit form button--> */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button
                                                        disabled={!isDirty || !isValid}
                                                        className="px-10 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                        type="submit"
                                                    >
                                                        Register
                                                    </button>

                                                    {/* <!--Forgot password link--> */}
                                                    {/* <a href="#!">Forgot password?</a> */}
                                                </div>
                                            </div>

                                            {/* <!--Register button--> */}
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Have an account?</p>
                                                <Link to="/login">
                                                    <TERipple rippleColor="light">
                                                        <button
                                                            type="button"
                                                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                        >
                                                            Login
                                                        </button>
                                                    </TERipple>
                                                </Link>
                                            </div>
                                        </form>

                                        <DevTool control={control} />

                                    </div>
                                </div>

                                {/* <!-- Right column container with background image--> */}
                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-forest bg-cover xxl:bg-cover bg-center"
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}