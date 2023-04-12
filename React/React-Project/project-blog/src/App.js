import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import * as blogServices from './services/blogPostServices.js';

import { Home } from "./Components/Home/Home.js";
import { Header } from "./Components/Header/Header.js";
import { About } from "./Components/About/About.js";
import { Footer } from "./Components/Footer/Footer.js";
import { BlogPostsList } from "./Components/Blog/BlogPostsList.js";
import { OurWork } from "./Components/OurWork/OurWork.js";
import { CreateBlog } from "./Components/CreateBlog/CreateBlog.js";
import { Register } from "./Components/Register/Register.js";
import { Login } from "./Components/Login/Login.js";

function App() {

  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        blogServices.getAll()
            .then(result => {
                setBlogPosts(result)
            })
    }, []);

    const onCreateBlogPostSubmit = async (data) => {
      const newBlogPost = await blogServices.create(data);

      setBlogPosts(state => [...state, newBlogPost]);

      navigate('/blogs');
  };


  return (
    <div className="App">

      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<BlogPostsList blogPosts={blogPosts}/>} />
          <Route path='/work' element={<OurWork />} />
          <Route path='/create' element={<CreateBlog onCreateBlogPostSubmit={onCreateBlogPostSubmit}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
