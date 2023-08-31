import { useAuth } from "../../contexts/AuthContext";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onLoginSubmit = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            alert(error);
        }
    };

    // const { currentUser } = useAuth();

    // useEffect(() => {
    //     if (currentUser) {
    //         navigate('/');
    //     } 
    // }, [navigate, currentUser] );
   

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit(onLoginSubmit)}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type='email'
                    required={true}
                    {...register("email", {
                        required: "Email is Required!!!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        }
                    })}
                    error={(errors.email)}
                // onKeyUp={() => { trigger("email") }}
                ></input>
                {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                )}

                <div>
                    <label>Your password</label>
                    <input
                        name='password'
                        id="password"
                        type='password'
                        autoComplete='off'
                        className={`form-control ${errors.password && "invalid"}`}
                        required={true}
                        {...register("password", {
                            required: "You must specify a password",
                            // pattern: {
                            //     value: '^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=. (.*.[\W]){1,})(?!.*\s).{8,}$',
                            //     message: "Password should contain at least one number and one special character"
                            // },
                            // minLength: {
                            //     value: 8,
                            //     message: "Password must be more than 8 characters"
                            // },
                            // maxLength: {
                            //     value: 20,
                            //     message: "Password must be less than 20 characters"
                            // },
                        })}
                        // onKeyUp={() => { trigger("password") }}
                        error={(errors.password)}
                    ></input>
                    {errors.password && (
                        <small className="text-danger">
                            {errors.password.message}
                        </small>
                    )}
                </div >
                <button type="submit">Submit</button>
            </form >
        </>
    );
};
export default Login;