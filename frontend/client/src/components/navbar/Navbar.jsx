import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoadingHeart } from "../loading/Loading";
import { ModalCM } from "../commonModal/ModalCM";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onClickYes = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
    navigate("/");
  };

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
        <div className="loadingHeart">
          <LoadingHeart />
        </div>
        {user ? (
          <div style={{ display: "flex" }}>
            {user.username}
            <button className="navButton" onClick={onOpenModal}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleRegister}>
              Register
            </button>
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
      <ModalCM
        title={"Do you want to logout?"}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        onClickYes={onClickYes}
      />
    </div>
  );
};

export default Navbar;
