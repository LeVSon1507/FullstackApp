import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../hooks/useFetch';
import { LoadingRipple } from '../loading/Loading';
import './featuredProperties.css';

const FeaturedProperties = () => {
   const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');
   return (
      <div className='fp'>
         {loading ? (
            <LoadingRipple />
         ) : (
            <>
               {data.map(item => (
                  <div className='fpItem' key={item._id}>
                     <img src={item.photos[0]} alt='photos' className='fpImg' />
                     <span className='fpName'>{item.name}</span>
                     <span className='fpCity'>{item.city}</span>
                     <span className='fpPrice'>Starting from ${item.cheapestPrice}</span>
                     {item.rating && (
                        <div className='fpRating'>
                           <button>
                              {item.rating} <FontAwesomeIcon icon={faRankingStar} />
                           </button>
                           <span>Excellent</span>
                        </div>
                     )}
                  </div>
               ))}
            </>
         )}
      </div>
   );
};

export default FeaturedProperties;
