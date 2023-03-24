import { Fragment } from "react";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Search } from "./components/Search.js";
import './App.css';
import { UserList } from "./components/UserList.js";

function App() {
  return (
    <Fragment>

      <Header />
      <main className="main">
        <section class="card users-container">
          <Search />
          <UserList/>
        </section>
      </main>
      <Footer />

    </Fragment>
  );
}

export default App;