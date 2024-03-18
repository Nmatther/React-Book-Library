import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchBooks } from '../API';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchItem, setSearchItem] = useState('')


  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

  }

  useEffect(() => {
    async function fetchData() {
      const { books } = await fetchBooks();
      setBooks(books);
    }
    fetchData();
  }, [])

  return (
    <div className="home-container">
      <h1>Online Book Library</h1>
      <div className="SearchBar">
        <input type="text" value={searchItem} onChange={handleInputChange} placeholder="Type to Search Book Title" />
      </div>
      <p>Take a look at our books:</p>
      <div className="Book-Container">
        {filteredBooks.map(book => (
          <li className="bookCard" key={book.id}>
            <h2><Link to={`/book/${book.id}`}>{book.title}</Link></h2>
            <img className= "coverImg" src={book.coverimage} alt={book.title} />
            <p>By: {book.author}</p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Home;