import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  }
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!token && <li><Link to="/login">Login</Link></li> }
        {!token && <li><Link to="/Createuser">Registration</Link></li> }
        {token && <li><Link to="/account"> My Account</Link></li> }
        {token && <li onClick={logOut}> Log Out</li> }
      </ul>
    </nav>
  );
}

export default NavBar;