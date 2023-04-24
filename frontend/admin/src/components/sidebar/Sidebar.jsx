import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext, useState } from 'react';
import ModalCM from '../commonModal/ModalCM';
const Sidebar = () => {
   const { dispatch } = useContext(DarkModeContext);
   const [modalIsOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
   const onOpenModal = () => {
      setIsOpen(true);
   };
   const onClickYes = () => {
      localStorage.removeItem('user');
      window.location.reload(false);
      navigate('/login');
   };
   return (
      <>
         <div className='sidebar'>
            <div className='top'>
               <Link to='/' style={{ textDecoration: 'none' }}>
                  <span className='logo'>LVSbookingadmin</span>
               </Link>
            </div>
            <hr />
            <div className='center'>
               <ul>
                  <p className='title'>MAIN</p>
                  <li>
                     <DashboardIcon className='icon' />
                     <span>Dashboard</span>
                  </li>
                  <p className='title'>LISTS</p>
                  <Link to='/users' style={{ textDecoration: 'none' }}>
                     <li>
                        <PersonOutlineIcon className='icon' />
                        <span>Users</span>
                     </li>
                  </Link>
                  <Link to='/hotels' style={{ textDecoration: 'none' }}>
                     <li>
                        <StoreIcon className='icon' />
                        <span>Hotels</span>
                     </li>
                  </Link>
                  <Link to='/rooms' style={{ textDecoration: 'none' }}>
                     <li>
                        <CreditCardIcon className='icon' />
                        <span>Rooms</span>
                     </li>
                  </Link>
                  <li>
                     <LocalShippingIcon className='icon' />
                     <span>Delivery</span>
                  </li>
                  <p className='title'>USEFUL</p>
                  <li>
                     <InsertChartIcon className='icon' />
                     <span>Stats</span>
                  </li>
                  <li>
                     <NotificationsNoneIcon className='icon' />
                     <span>Notifications</span>
                  </li>
                  <p className='title'>SERVICE</p>
                  <li>
                     <SettingsSystemDaydreamOutlinedIcon className='icon' />
                     <span>System Health</span>
                  </li>
                  <li>
                     <PsychologyOutlinedIcon className='icon' />
                     <span>Logs</span>
                  </li>
                  <li>
                     <SettingsApplicationsIcon className='icon' />
                     <span>Settings</span>
                  </li>
                  <p className='title'>USER</p>
                  <li>
                     <AccountCircleOutlinedIcon className='icon' />
                     <span>Profile</span>
                  </li>
                  <li>
                     <ExitToAppIcon className='icon' />
                     <button className='logoutBtn' onClick={onOpenModal}>
                        Logout
                     </button>
                  </li>
               </ul>
            </div>
            <div className='bottom'>
               <div className='colorOption' onClick={() => dispatch({ type: 'LIGHT' })}></div>
               <div className='colorOption' onClick={() => dispatch({ type: 'DARK' })}></div>
            </div>
            <ModalCM
               title={'Do you want to logout?'}
               modalIsOpen={modalIsOpen}
               setIsOpen={setIsOpen}
               onClickYes={onClickYes}
            />
         </div>
      </>
   );
};

export default Sidebar;
