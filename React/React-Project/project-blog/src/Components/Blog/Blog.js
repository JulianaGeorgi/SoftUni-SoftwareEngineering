export const Blog = () => {
    return (
        <div className="col-md-6 col-sm-6">
            <div className="media blog-thumb">
                <div className="media-object media-left">
                    <a href="blog-detail.html"><img src="images/blog-image4.jpg" className="img-responsive" alt=""/></a>
                </div>
                <div className="media-body blog-info">
                    <small><i className="fa fa-clock-o"></i> December 10, 2017</small>
                    <h3><a href="blog-detail.html">minimalist design trend in 2018.</a></h3>
                    <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                    <a href="blog-detail.html" className="btn section-btn">View Detail</a>
                </div>
            </div>
        </div>
    );
};