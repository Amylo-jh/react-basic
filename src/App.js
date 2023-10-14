import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';
import Param1 from './component/Param1';
import Param2 from './component/Param2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/comp1' element={<Comp1 />}></Route>
          <Route path='/comp2' element={<Comp2 />}></Route>
          <Route path='/comp3' element={<Comp3 />}></Route>
          <Route path='/param/:id' element={<Param1/>} />
          <Route path='/param/:q=?&page=?' element={<Param2/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
