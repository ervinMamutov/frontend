import axios from 'axios';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import './Home.css';
import Loader from '../Loader';
import Book from '../Book';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState('true');
  const [error, setError] = useState('');

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get('http://localhost:3002');
        if (res.status !== 200) {
          throw new Error(` Failed to fetch books with status: ${res.status}`);
        } else {
          setBooks(res.data.books);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="home__container">
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {books.length > 0 ? (
        books.map((book, index) => <Book key={index} book={book} />)
      ) : (
        <p>No Product</p>
      )}
    </div>
  );
};

Home.propTypes = {};

export default Home;
