import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </BrowserRouter> */}
      <Navbar/>
    </div>
  );
}

export default App;
