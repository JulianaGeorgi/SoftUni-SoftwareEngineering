import { Fragment, useEffect, useState } from "react";

import * as userService from './services/userService';

import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Search } from "./components/Search.js";
import './App.css';
import { UserList } from "./components/UserList.js";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
      .then(setUsers)
      .catch(err => {
        console.log('Error' + err);
      });
  }, []);

  return (
    <Fragment>

      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users = {users} />
        </section>
      </main>
      <Footer />

    </Fragment>
  );
}

export default App;