import { Blog } from "./Blog.js";

export const BlogPostsList = () => {
     return (
          <section id="blog" data-stellar-background-ratio="0.5">
               <div className="container">
                    <div className="row">

                         <div className="col-md-12 col-sm-12">
                              <div className="section-title">
                                   <h2>Our Blog</h2>
                                   <span className="line-bar">...</span>

                              </div>
                         </div>
                    </div>
                    <Blog />
               </div>
          </section>

     );
};