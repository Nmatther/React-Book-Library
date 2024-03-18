import { useState, useEffect } from "react";
import { fetchBooksById, reserveBook} from "../API";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleBook({token}) {
    const { id } = useParams();
    const navigate = useNavigate();

   const [book, setBook] = useState({});

   async function getSingleBook(){
      const book = await fetchBooksById(id)
      setBook(book)
    } 
   useEffect(() => {
      
       getSingleBook();
      }, []);
    
   
   return (
   <div className="Single-Book-Container">
      <div className="card">
         <h3 className="bookTitle">{book.title}</h3>
         <img className="image" src={book.coverimage}/>
         <div className="Book-Info">
         <span className="info" id="Book">{book.author}</span><br/>
            { book.available ? ( <p className="pbook">Available</p>) : (<p className="pbook">Not Available</p>)}
            <span className="Book-Info">{book.description}</span>
         </div>
         <div className="Button">
            <Link to="/">
               <button className="Book-Card-Button">Home</button>
            </Link>
            <button disabled={ !token || !book.available} className= "Book-Card-Button" onClick={async ()=>{
               await reserveBook(id, token);
               getSingleBook();
            }}>
               {book.available ? "Reserve Book" : "Book Not Available"}
            </button>
            
         </div>
     </div>
   </div>
    );
}

export default SingleBook