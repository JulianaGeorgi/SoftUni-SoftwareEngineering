import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div className="container">

                <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                    </button>

                    <Link to="/" className="navbar-brand">Hydro</Link>
                </div>


                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-nav-first">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blogs">Blog</Link></li>
                        <li><Link to="/create">Create a blog post</Link></li>
                        <li><Link to="/work">Our Work</Link></li>

                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/#"><i className="fa fa-facebook-square"></i></Link></li>
                        <li><Link to="/#"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link to="/#"><i className="fa fa-instagram"></i></Link></li>
                        <li className="section-btn"><Link to="/login" data-toggle="modal" data-target="#modal-form">Login</Link></li>
                        <li className="section-btn"><Link to="/register" data-toggle="modal" data-target="#modal-form">Register</Link></li>
                    </ul>
                </div>

            </div>
        </section>
    );
};