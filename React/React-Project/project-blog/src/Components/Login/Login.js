export const Login = () => {
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
                                        <form action="#" method="post">
                                            <input type="email" className="form-control" name="email" placeholder="Email" required />
                                            <input type="password" className="form-control" name="password" placeholder="Password" required />
                                            <input type="submit" className="form-control" name="submit" value="Submit Button" />
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