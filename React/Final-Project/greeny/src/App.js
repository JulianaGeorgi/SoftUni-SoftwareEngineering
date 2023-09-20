import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Greeny } from './components/Greeny/Greeny';
import { CreateGreeny } from './components/CreateGreeny/CreateGreeny';
import { GreenyDetails } from './components/GreenyDetails.js/GreenyDetails';
import { EditGreeny } from './components/EditGreeny/EditGreeny';

import { ScrollToTop } from './utils/ScrollToTop';

import { AuthProvider } from './contexts/AuthContext';
import { GreenyProvider } from './contexts/GreenyContext';
import { UserProfile } from './components/UserProfile/UserProfile';
import { CommentSection } from './components/GreenyDetails.js/CommentSection/CommentSection';
import { CommentProvider } from './contexts/CommentContext';
import { allGreeniesTitle } from './utils/constants';


function App() {

  return (
    <AuthProvider>
      <GreenyProvider>
        <CommentProvider>
          <div className="App">
            <Navigation />

            <main>
              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/allgreenies' element={<Greeny title={allGreeniesTitle}/>} />
                <Route path='/greenies/:greenyId' element={<GreenyDetails />} />
                <Route path='/greenies/:greenyId/edit' element={<EditGreeny />} />
                <Route path='/greenies/:greenyId/comments' element={<CommentSection />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/create' element={<CreateGreeny />} />

                <Route path='/logout' element={<Logout />} />
                <Route path='/profile' element={<UserProfile />} />

              </Routes>
              <ScrollToTop />

            </main>
            <Footer />
          </div>
        </CommentProvider>
      </GreenyProvider>
    </AuthProvider>
  );
}

export default App;