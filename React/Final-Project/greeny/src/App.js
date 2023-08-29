import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/signup' element={<Register/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
