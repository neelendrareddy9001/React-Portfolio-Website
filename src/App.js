import {  Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './compnents/Header';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      
        <>
          <Header/>
          <Container>
          <AnimatePresence>
          <Routes loccation={location} key={location.pathname>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          </AnimatePresence>
         </Container>
      </>
    </div>
  );
}

export default App;
