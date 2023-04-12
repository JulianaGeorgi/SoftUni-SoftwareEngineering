import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as blogPostServices from '../../services/blogPostServices.js';

export const BlogPostDetails = () => {

    const { blogPostId } = useParams();
    const [blogPost, setBlog] = useState({});

    useEffect(() => {
        blogPostServices.getOne(blogPostId)
            .then(result => {
                setBlog(result);
            })
    }, [blogPostId]);



    return (
        <div>
            <section id="blog-header" data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-offset-1 col-md-5 col-sm-12">
                            <h2>{blogPost.postTitle}</h2>
                        </div>

                    </div>
                </div>
            </section>

            <section id="blog-detail" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-offset-1 col-md-10 col-sm-12">
                            <div className="blog-detail-thumb">
                                <div className="blog-image">
                                    <img src="images/blog-detail-image.jpg" className="img-responsive" alt="Blog" />
                                </div>
                                <h2>{blogPost.topic}</h2>
                                <p>{blogPost.blogPostContent}</p>

                                <div className="blog-ads">
                                    <h4>Blog Sample Advertising</h4>
                                </div>

                                <div className="blog-social-share">
                                    <h4>Share this article</h4>
                                    <a href="https://www.facebook.com/templatemo" className="btn btn-primary"><i className="fa fa-facebook"></i>facebook</a>
                                    <a href="/#" className="btn btn-success"><i className="fa fa-twitter"></i>twitter</a>
                                    <a href="/#" className="btn btn-danger"><i className="fa fa-google-plus"></i>google plus</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};