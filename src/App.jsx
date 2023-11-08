import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/page/Home';
import Login from './components/page/Login';

const App = () => {
  return (
    <div className="main__container">
      <Header title="Books store" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
