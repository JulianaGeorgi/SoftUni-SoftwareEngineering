import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext.js";
import { useForm } from "../../hooks/useForm.js";

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler } = useForm({ // passing the initialValues that we want to control
        email: "", // the name of the property has to match the name attribute of the field!!!!
        password: "",
    }, onLoginSubmit);

    return (

        <section id="contact" data-stellar-background-ratio="0.5" >

            <div >
                <div >


                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-sm-12">
                                <div className="section-title">
                                    <h2>Hydro Co</h2>
                                </div>

                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade in active" id="sign_in">
                                        <form method="POST" onSubmit={onLoginSubmit} >
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email" 
                                                placeholder="Email"
                                                value={values.email}
                                                onChange={changeHandler} />
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="Password"
                                                value={values.password}
                                                onChange={changeHandler} />
                                            <input type="submit" className="form-control" name="submit" value="Login" />
                                            <a href="https://www.facebook.com/templatemo">Forgot your password?</a>
                                        </form>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};