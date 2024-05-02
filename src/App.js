import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// projects
import Evergreen from './projects/Evergreen';
import Weather from './projects/Weather';
import Shecodes from './projects/Shecodes';
import MockPortfolio from './projects/Mock';
import Atlas from './projects/Atlas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element = {<Home />} />
        <Route path="/about" exact element = {<About />} />
        <Route path="/projects" exact element = {<Projects />} />
        <Route path="/evergreen" exact element = {<Evergreen />} />
        <Route path="/weather" exact element = {<Weather />} />
        <Route path="/shecodes" exact element = {<Shecodes />} />
        <Route path="/contact" exact element = {<Contact />} />
        <Route path="/mock" exact element = {<MockPortfolio />} />
        <Route path="/atlas" exact element = {<Atlas />} />


      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
