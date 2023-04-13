import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as blogPostServices from "../../../services/blogPostServices.js"

export const EditPost = ({ onEditBlogPostSubmit }) => {

    const { blogPostId } = useParams();
    const [blogPost, setBlog] = useState({});

    useEffect(() => {
        blogPostServices.getOne(blogPostId)
            .then(result => {
                setBlog(result);
            })
    }, [blogPostId]);

    const [values, setValues] = useState({
        username: '',
        email: '',
        postTitle: blogPost.postTitle,
        topic: blogPost.topic,
        blogPostContent: blogPost.blogPostContent,
        _id: blogPostId,
    });

    const onChangeHandler = (e) => {
        console.log(values);
        setValues({ ...values, [e.target.name]: e.target.value })
        console.log(values);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onEditBlogPostSubmit(values, blogPost._id);
    };

    return (
        <section id="edit-container">

            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Edit your blog post</h2>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-8">

                        <form id="contact-form" onSubmit={onSubmit}>
                            <div className="col-md-6 col-sm-6">
                                <input defaultValue={blogPost.username} onChange={onChangeHandler} type="text" className="form-control" placeholder="Your username" id="username" name="username" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <input defaultValue={blogPost.email} onChange={onChangeHandler} type="email" className="form-control" placeholder="Your Email" id="email" name="email" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <input defaultValue={blogPost.postTitle} onChange={onChangeHandler} type="text" className="form-control" placeholder="Your blog post title" id="postTitle" name="postTitle" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <select defaultValue={blogPost.topic} onChange={onChangeHandler} className="form-control" id="topic" name="topic">
                                    <option>Topic</option>
                                    <option>Marketing</option>
                                    <option>SEO</option>
                                    <option>CMS Admin</option>
                                    <option>Business Development</option>
                                    <option>Consulting </option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <textarea defaultValue={blogPost.blogPostContent} onChange={onChangeHandler} className="form-control" rows="6" placeholder="Your blog post content" id="blogPostContent" name="blogPostContent" required=""></textarea>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <input type="submit" className="form-control" name="submit" defaultValue="Send post" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};