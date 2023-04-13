import { Link } from "react-router-dom";

export const BlogPost = ({
    username,
    email,
    postTitle,
    topic,
    blogPostContent,
    _id,
}) => {

    return (
        <div className="col-md-6 col-sm-6">
            <div className="media blog-thumb">
                <div className="media-object media-left">
                    <Link to={`/blogs/${_id}`}><img src="images/blog-image4.jpg" className="img-responsive" alt=""/></Link>
                </div>
                <div className="media-body blog-info">
                    <small><i className="fa fa-clock-o"></i> {username}</small>
                    <h3><Link to={`/blogs/${_id}`}>{postTitle}</Link></h3>
                    <p>{blogPostContent}</p>
                    <Link to={`/blogs/${_id}`} className="btn section-btn">View Detail</Link>
                </div>
            </div>
        </div>
    );
};