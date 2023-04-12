export const OurWork = () => {
    return (
        <section id="work" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Our work</h2>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="work-thumb">
                            <a href="images/work-image1.jpg" className="image-popup">
                                <img src="images/work-image1.jpg" className="img-responsive" alt="Work" />

                                <div className="work-info">
                                    <h3>Clean &amp; Minimal</h3>
                                    <small>Product Design</small>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="work-thumb">
                            <a href="images/work-image2.jpg" className="image-popup">
                                <img src="images/work-image2.jpg" className="img-responsive" alt="Work" />

                                <div className="work-info">
                                    <h3>Studio Bag</h3>
                                    <small>Branding</small>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="work-thumb">
                            <a href="images/work-image3.jpg" className="image-popup">
                                <img src="images/work-image3.jpg" className="img-responsive" alt="Work" />

                                <div className="work-info">
                                    <h3>Frame Design</h3>
                                    <small>Photography</small>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="work-thumb">
                            <a href="images/work-image4.jpg" className="image-popup">
                                <img src="images/work-image4.jpg" className="img-responsive" alt="Work" />

                                <div className="work-info">
                                    <h3>Paint Work</h3>
                                    <small>Art, Design</small>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};