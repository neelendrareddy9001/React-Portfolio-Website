import {  Routes, Route } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './compnents/Header';


function App() {
  return (
    <div className="App">
      
        <>
          <Header/>
          <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
         </Container>
      </>
    </div>
  );
}

export default App;
