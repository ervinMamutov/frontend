import { useState } from 'react';
import axios from 'axios';
import './Logout.css';

const Logout = () => {
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (confirm) {
      const confirmLogout = async () => {
        const res = await axios.post('http://localhost:3002/log-out');
        setMessage('Goodby. See you next time');
      };
      confirmLogout();
    } else {
      setMessage('Good idea.');
    }
  };
  const handlerYes = (e) => {
    const value = e.target;
    const buttonYes = value.innerText;
    if (buttonYes) {
      setConfirm(true);
    }
  };
  const handlerNo = (e) => {
    const value = e.target;
    const buttonNo = value.innerText;
    if (buttonNo) {
      setConfirm(false);
    }
  };
  return (
    <div className="logout-box">
      <p>{message}</p>
      <form className="logout-form" onSubmit={(e) => handlerSubmit(e)}>
        <p>Are you sure?</p>
        <button type="submit" onClick={(e) => handlerYes(e)}>
          Yes
        </button>
        <button type="submit" onClick={(e) => handlerNo(e)}>
          No
        </button>
      </form>
    </div>
  );
};

export default Logout;
