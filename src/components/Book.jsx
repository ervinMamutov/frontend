import './Book.css';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  return (
    <div className="book-box">
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <img className="book-img" src={book.img} alt={book.title} />
      <p>{book.description}</p>
      <h4>€ {book.price}</h4>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default Book;
