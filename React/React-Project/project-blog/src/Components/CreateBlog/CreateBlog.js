export const CreateBlog = () => {
    return (
        <section id="contact" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Contact us</h2>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-8">

                        <form id="contact-form" action="#" method="post">
                            <div className="col-md-6 col-sm-6">
                                <input type="text" className="form-control" placeholder="Full Name" id="cf-name" name="cf-name" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <input type="email" className="form-control" placeholder="Your Email" id="cf-email" name="cf-email" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <input type="tel" className="form-control" placeholder="Your Phone" id="cf-number" name="cf-number" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <select className="form-control" id="cf-budgets" name="cf-budgets">
                                    <option>Budget Level</option>
                                    <option>$500 to $1,000</option>
                                    <option>$1,000 to $2,200</option>
                                    <option>$2,200 to $4,500</option>
                                    <option>$4,500 to $7,500</option>
                                    <option>$7,500 to $12,000</option>
                                    <option>$12,000 or more</option>
                                </select>
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <textarea className="form-control" rows="6" placeholder="Your requirements" id="cf-message" name="cf-message" required=""></textarea>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <input type="submit" className="form-control" name="submit" value="Send Message" />
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};