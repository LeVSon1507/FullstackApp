import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { LoadingHeart } from '../loading/Loading';
import { ModalCM } from '../commonModal/ModalCM';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
   const navigate = useNavigate();
   const { user } = useContext(AuthContext);
   const [modalIsOpen, setIsOpen] = React.useState(false);

   const handleLogin = () => {
      navigate('/login');
   };
   const handleRegister = () => {
      navigate('/register');
   };
   const onOpenModal = () => {
      setIsOpen(true);
   };
   const onClickYes = () => {
      localStorage.removeItem('user');
      window.location.reload(false);
      navigate('/');
   };

   return (
      <div className='navbar'>
         <div className='navContainer'>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
               <span className='logo'>LVSBOOKING</span>
            </Link>

            {user ? (
               <div className='user-name-container'>
                  <span className='user-name'>
                     {user.username}
                     <FontAwesomeIcon icon={faUser} id='iconUser' />
                  </span>
                  <button className='nav-button' onClick={onOpenModal}>
                     Logout
                  </button>
               </div>
            ) : (
               <div className='navItems'>
                  <button className='navButton' onClick={handleRegister}>
                     Register
                  </button>
                  <button className='navButton' onClick={handleLogin}>
                     Login
                  </button>
               </div>
            )}
         </div>
         <ModalCM
            title={'Do you want to logout?'}
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            onClickYes={onClickYes}
         />
      </div>
   );
};

export default Navbar;
