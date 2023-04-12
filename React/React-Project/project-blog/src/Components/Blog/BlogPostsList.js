import { BlogPost } from "./BlogPost/BlogPost.js";

export const BlogPostsList = ({ blogPosts }) => {
     return (
          <section id="blog" data-stellar-background-ratio="0.5">
               <div className="container">
                    <div className="row">

                         <div className="col-md-12 col-sm-12">
                              <div className="section-title">
                                   <h2>Our Blog</h2>

                              </div>
                         </div>
                    </div>
                    {blogPosts.map(x =>
                         <BlogPost key={x._id} {...x} />
                    )}

                    {blogPosts.length === 0 && (
                         <h3 className="no-articles">No blog posts.</h3>
                    )}
               </div>
          </section>

     );
};