import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';

import { useState, useEffect } from 'react';

import { AuthContext } from './contexts/AuthContext';

import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(currentUser);
    })
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      <div className="App">
        <Navigation />

        <main>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Register />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
