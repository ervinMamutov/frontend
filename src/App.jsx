import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/page/Home';
import Register from './components/page/Register';
import Login from './components/page/Login';
import Logout from './components/page/Logout';

const App = () => {
  return (
    <div className="main__container">
      <Header title="Books store" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/log-out" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default App;
