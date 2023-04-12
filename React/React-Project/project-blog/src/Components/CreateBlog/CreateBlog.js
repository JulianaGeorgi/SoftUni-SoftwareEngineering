export const CreateBlog = () => {
    return (
        <section id="contact" data-stellar-background-ratio="0.5">
            <div class="container">
                <div class="row">

                    <div class="col-md-12 col-sm-12">
                        <div class="section-title">
                            <h2>Contact us</h2>
                            <span class="line-bar">...</span>
                        </div>
                    </div>

                    <div class="col-md-8 col-sm-8">

                        <form id="contact-form" action="#" method="post">
                            <div class="col-md-6 col-sm-6">
                                <input type="text" class="form-control" placeholder="Full Name" id="cf-name" name="cf-name" required="" />
                            </div>

                            <div class="col-md-6 col-sm-6">
                                <input type="email" class="form-control" placeholder="Your Email" id="cf-email" name="cf-email" required="" />
                            </div>

                            <div class="col-md-6 col-sm-6">
                                <input type="tel" class="form-control" placeholder="Your Phone" id="cf-number" name="cf-number" required="" />
                            </div>

                            <div class="col-md-6 col-sm-6">
                                <select class="form-control" id="cf-budgets" name="cf-budgets">
                                    <option>Budget Level</option>
                                    <option>$500 to $1,000</option>
                                    <option>$1,000 to $2,200</option>
                                    <option>$2,200 to $4,500</option>
                                    <option>$4,500 to $7,500</option>
                                    <option>$7,500 to $12,000</option>
                                    <option>$12,000 or more</option>
                                </select>
                            </div>

                            <div class="col-md-12 col-sm-12">
                                <textarea class="form-control" rows="6" placeholder="Your requirements" id="cf-message" name="cf-message" required=""></textarea>
                            </div>

                            <div class="col-md-4 col-sm-12">
                                <input type="submit" class="form-control" name="submit" value="Send Message" />
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};