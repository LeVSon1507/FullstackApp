import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <img
          src="https://saintvictorlagrandmaison.com/wp-content/uploads/2022/07/17dcf4ba715b51b8c23baeb707c38ad7.png"
          alt="logo"
          style={{ width: 100, height: 100, borderRadius: 20 }}
        />
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">LVSBOOKING</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
