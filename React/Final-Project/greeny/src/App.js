import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path='/home' element={<Home />} />


        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
