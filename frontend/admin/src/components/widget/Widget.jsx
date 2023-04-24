import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import useFetch from '../../hooks/useFetch';

const Widget = ({ type }) => {
   const { data, loading, error, reFetch } = useFetch('/users');
   console.log('🚀 ~ file: Widget.jsx:11 ~ Widget ~ data:', data);
   let dataWidget;

   //temporary
   //  const amount = data?.length;
   const diff = 20;

   switch (type) {
      case 'user':
         dataWidget = {
            title: 'USERS',
            isMoney: false,
            link: 'See all users',
            icon: (
               <PersonOutlinedIcon
                  className='icon'
                  style={{
                     color: 'crimson',
                     backgroundColor: 'rgba(255, 0, 0, 0.2)',
                  }}
               />
            ),
         };
         break;
      case 'order':
         dataWidget = {
            title: 'ORDERS',
            isMoney: false,
            link: 'View all orders',
            icon: (
               <ShoppingCartOutlinedIcon
                  className='icon'
                  style={{
                     backgroundColor: 'rgba(218, 165, 32, 0.2)',
                     color: 'goldenrod',
                  }}
               />
            ),
         };
         break;
      case 'earning':
         dataWidget = {
            title: 'EARNINGS',
            isMoney: true,
            link: 'View net earnings',
            icon: (
               <MonetizationOnOutlinedIcon
                  className='icon'
                  style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
               />
            ),
         };
         break;
      case 'balance':
         dataWidget = {
            title: 'BALANCE',
            isMoney: true,
            link: 'See details',
            icon: (
               <AccountBalanceWalletOutlinedIcon
                  className='icon'
                  style={{
                     backgroundColor: 'rgba(128, 0, 128, 0.2)',
                     color: 'purple',
                  }}
               />
            ),
         };
         break;
      default:
         break;
   }

   return (
      <div className='widget'>
         <div className='left'>
            <span className='title'>{dataWidget.title}</span>
            <span className='counter'>{/* {dataWidget.isMoney && '$'} {amount} */}</span>
            <span className='link'>{dataWidget.link}</span>
         </div>
         <div className='right'>
            <div className='percentage positive'>
               <KeyboardArrowUpIcon />
               {diff} %
            </div>
            {dataWidget.icon}
         </div>
      </div>
   );
};

export default Widget;
