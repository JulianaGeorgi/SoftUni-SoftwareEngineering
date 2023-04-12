import { useState
 } from "react";
export const CreateBlog = ({onCreateBlogPostSubmit}) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        postTitle: '',
        topic: '',
        blogPostContent: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateBlogPostSubmit(values);
    };

    return (
        <section id="contact" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Create a blog post</h2>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-8">

                        <form id="contact-form" onSubmit={onSubmit}>
                            <div className="col-md-6 col-sm-6">
                                <input value={values.username} onChange={onChangeHandler} type="text" className="form-control" placeholder="Your username" id="username" name="username" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <input value={values.email} onChange={onChangeHandler} type="email" className="form-control" placeholder="Your Email" id="email" name="email" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <input value={values.postTitle} onChange={onChangeHandler} type="text" className="form-control" placeholder="Your blog post title" id="postTitle" name="postTitle" required="" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <select value={values.topic} onChange={onChangeHandler} className="form-control" id="topic" name="topic">
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
                                <textarea value={values.blogPostContent} onChange={onChangeHandler} className="form-control" rows="6" placeholder="Your blog post content" id="blogPostContent" name="blogPostContent" required=""></textarea>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <input type="submit" className="form-control" name="submit" value="Send post" />
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};