export const Home = () => {
    return (
        <section id="home" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <div className="home-info">
                            <h1>We make beautiful websites for all people.</h1>
                            <a href="#about" className="btn section-btn smoothScroll">Start a project</a>
                            <span>
                                CALL US (+66) 010-020-0340
                                <small>For any inquiry</small>
                            </span>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="home-video">
                            <div className="embed-responsive embed-responsive-16by9">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};