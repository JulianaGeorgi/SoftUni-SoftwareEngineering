import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";

export const Register = () => {

    const navigate = useNavigate();
    const { signup } = useAuth();

    const form = useForm(
        {
            mode: "onChange",
            defaultValues: {
                name: "",
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
            await signup(formData.email, formData.password);
            navigate('/');
        } catch (err) {
            alert(`Registration failed - ${err.code - err.message}`);
        };
    }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-forest">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-champagne shadow-md sm:max-w-md sm:rounded-lg opacity-90">
                    <div>
                        <h3 className="text-4xl font-bold text-font-dark text-center">
                            Join Greeny
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit(onRegisterSubmitHandler)} noValidate>

                        {/* NAME */}
                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    type="text"
                                    name="name"
                                    id="name"
                                    {...register("name",
                                        {
                                            required: "Name is required.",
                                        })}
                                />
                                <p className="text-sm text-red-600">{errors.name?.message}</p>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    type="email"
                                    name="email"
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
                                />
                                <p className="text-sm text-red-600">{errors.email?.message}</p>
                            </div>
                        </div>

                        {/* USERNAME */}
                        <div className="mt-4">
                            <label
                                htmlFor="username"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Username
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    type="text"
                                    id="username"
                                    {...register("username", // same as name={name} ref={ref} onChange={onChange} onBlur={onBlur}
                                        {
                                            required: "Username is required.",
                                            minLength: {
                                                value: 3,
                                                message: "Username has to be longer than 3 symbols."
                                            }
                                        })}
                                />
                                <p className="text-sm text-red-600">{errors.username?.message}</p>
                            </div>
                        </div>

                        {/* PASS */}
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    type="password"
                                    name="password"
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
                                />
                                <p className="text-sm text-red-600">{errors.password?.message}</p>
                            </div>
                        </div>

                        {/* REPEAT PASS */}
                        <div className="mt-4">
                            <label
                                htmlFor="repeatPassword"
                                className="block text-m font-medium text-font-dark undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    type="password"
                                    name="repeatPassword"
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
                                />
                                <p className="text-sm text-red-600">{errors.repeatPassword?.message}</p>
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
                                disabled={!isDirty || !isValid}
                                type="submit"
                                className="inline-block bg-watermelon-red text-m text-white py-3 px-10 rounded-full shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <DevTool control={control} />

                </div>
            </div>
        </div>
    );
}