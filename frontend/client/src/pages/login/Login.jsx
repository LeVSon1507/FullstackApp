import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import { AuthContext } from '../../context/AuthContext';
import './login.css';


const Login = () => {
   const [credentials, setCredentials] = useState({
      username: undefined,
      password: undefined,
   });


    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleClick = async e => {
      e.preventDefault();
      dispatch({ type: 'LOGIN_START' });
      try {
         const res = await axios.post('/auth/login', credentials);
         dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
         navigate('/');
      } catch (err) {
         dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
      }
   };

   const handleRegister = () => {
      navigate('/register');
   };
   return (
      <div className='loginForm'>
         <div className='lContainer'>
            <input
               type='text'
               placeholder='Username'
               id='username'
               onChange={handleChange}
               className='lInput'
            />
            <input
               type='password'
               placeholder='Password'
               id='password'
               onChange={handleChange}
               className='lInput'
            />
            <button disabled={loading} onClick={handleClick} className='lButton'>
               Login
            </button>
            <button disabled={loading} onClick={handleRegister} className='lButtonForgot'>
               Don't have an account?
            </button>
            {error && <span className='lErrorMessage'>{error.message}</span>}
         </div>
      </div>
   );
};

export default Login;
