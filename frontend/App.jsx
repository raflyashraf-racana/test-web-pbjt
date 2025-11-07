import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Profile from './components/Profile';
import Prospect from './components/Prospect';
import About from './components/About';
import Partners from './components/Partners';
import NotFound from './src/pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/prospek" element={<Prospect />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/kemitraan" element={<Partners />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
