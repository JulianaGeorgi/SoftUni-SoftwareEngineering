import './App.css';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from './components/PrivateRoutes/PrivateRoutes';

import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { GreeniesGrid } from './components/GreeniesGrid/GreeniesGrid';
import { CreateGreeny } from './components/CreateGreeny/CreateGreeny';
import { GreenyDetails } from './components/GreenyDetails.js/GreenyDetails';
import { EditGreeny } from './components/EditGreeny/EditGreeny';
import { UserProfile } from './components/UserProfile/UserProfile';
import { CommentSection } from './components/GreenyDetails.js/CommentSection/CommentSection';

import { AuthProvider } from './contexts/AuthContext';
import { GreenyProvider } from './contexts/GreenyContext';
import { CommentProvider } from './contexts/CommentContext';

import { allGreeniesTitle } from './utils/constants';
import { ScrollToTop } from './utils/ScrollToTop';


function App() {

  return (
    <AuthProvider>
      <GreenyProvider>
        <CommentProvider>
          <div className="App">
            <Navigation />

            <main>
              <Routes>

                <Route element={<PrivateRoutes />}>
                  <Route path='/create' element={<CreateGreeny />} />
                  <Route path='/greenies/:greenyId/edit' element={<EditGreeny />} />
                  <Route path='/logout' element={<Logout />} />
                  <Route path='/profile' element={<UserProfile />} />
                  <Route path='/register' element={<Register />} />
                </Route>

                <Route path='/' element={<Home />} />
                <Route path='/greenies' element={<GreeniesGrid title={allGreeniesTitle} />} />
                <Route path='/greenies/:greenyId' element={<GreenyDetails />} />
                <Route path='/greenies/:greenyId/comments' element={<CommentSection />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />


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