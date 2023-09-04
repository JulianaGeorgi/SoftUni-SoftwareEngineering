import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

import { AuthProvider } from './contexts/AuthContext';
import { Logout } from './components/Logout/Logout';
import { CreateGreeny } from './components/CreateGreeny/CreateGreeny';



function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Navigation />

        <main>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<CreateGreeny />} />
            <Route path='/logout' element={<Logout />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
