import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { CreateGreeny } from './components/CreateGreeny/CreateGreeny';

import { AuthProvider } from './contexts/AuthContext';
import { GreenyProvider } from './contexts/GreenyContext';
import { GreenyDetails } from './components/Events/Event/GreenyDetails';



function App() {

  return (
    <AuthProvider>
      <GreenyProvider>
      <div className="App">
        <Navigation />

        <main>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/greenies/:greenyId' element={<GreenyDetails/>} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
            <Route path='/create' element={<CreateGreeny />} />
            
            <Route path='/logout' element={<Logout />} />

          </Routes>
        </main>
        <Footer />
      </div>
      </GreenyProvider>
    </AuthProvider>
  );
}

export default App;
