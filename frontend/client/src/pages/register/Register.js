import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { AuthContext } from "../../context/AuthContext";
import "./Register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [validateErr, setValidateErr] = useState({
    phoneValidateErr: "",
    emailValidateErr: "",
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (ValidateEmail(credentials.email) === false) {
      setValidateErr({
        emailValidateErr: "You have entered an invalid email address!",
      });
    }
    if (ValidatePhone(credentials.phone) === false) {
      setValidateErr({
        phoneValidateErr: "You have entered an invalid phone number!",
      });
    }
    if (ValidatePhone(credentials.phone) && ValidateEmail(credentials.email)) {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/register", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/login");
        alert("Create account success!");
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    }
  };
  const ValidatePhone = (phone) => {
    if (
      phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    ) {
      return true;
    }
    return false;
  };
  const ValidateEmail = (email) => {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    }
    return false;
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        {validateErr.emailValidateErr ? (
          <div style={{ color: "yellow" }}>{validateErr.emailValidateErr}</div>
        ) : (
          <></>
        )}
        <input
          type="number"
          placeholder="Phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        {validateErr.phoneValidateErr ? (
          <div style={{ color: "yellow" }}>{validateErr.phoneValidateErr}</div>
        ) : (
          <></>
        )}
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        <button disabled={loading} onClick={handleLogin}>
          I have account!
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
