import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { Header } from "./Components/Header/Header.js";
import { About } from "./Components/About/About.js";
import { Footer } from "./Components/Footer/Footer.js";
import { BlogPostsList } from "./Components/Blog/BlogPostsList.js";
import { OurWork } from "./Components/OurWork/OurWork.js";
import { CreateBlog } from "./Components/CreateBlog/CreateBlog.js";

function App() {
  return (
    <div className="App">

      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<BlogPostsList />} />
          <Route path='/work' element={<OurWork />} />
          <Route path='/create' element={<CreateBlog />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
