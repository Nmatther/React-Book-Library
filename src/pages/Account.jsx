import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser, returnBook } from "../API";

const Account = ({ token }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  async function getUser() {
    const user = await fetchUser({ token });
    setUser(user);
  }
  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }

    
    getUser();
  }, [token, navigate]);

  return (
    <div>
      {user && ( <>
      <h1>{user.firstname}</h1><br/>

      <p>Checked Out Books:</p>
      <div>
        <div className="Book-Container">
          {user.books &&
            user.books.map((book) => {
              return (
                <div className="bookCard" key = {user.id}>
                  <h2>{book.title}</h2>
                  <img className="coverImg" src={book.coverimage} />
                    <p>{book.author}</p>
                  <div className="Button">
                    <button
                      className="Book-Card-Button"
                      onClick={async () => {
                       await returnBook(book.id, token);
                       getUser();
                      }}
                    >
                      Return Book
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      </>
      )}
     
      
    </div>
  );
};

export default Account;
