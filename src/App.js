import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/skills' element={<Skills />} />
          <Route path='home/skills/project' element={<Project />} />
          <Route path='home/skills/project/contact' element={<Contact />} />
          <Route path='home/skills/project/contact/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}       

export default App;
