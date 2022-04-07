import logo from './logo.svg';
import './App.css';

import {Link, Route, Routes} from 'react-router-dom';

import Pegawai from './Pegawai';

function App() {
  return (
    <div className=''>
      <header>
        <Link to='/pegawai'>Pegawai</Link>
      </header>
      
      <Routes>
        <Route path='/pegawai' element={<Pegawai />}></Route>
      </Routes>
    </div>
  );
}

export default App;
