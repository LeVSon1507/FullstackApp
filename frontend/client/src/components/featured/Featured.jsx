import useFetch from "../../hooks/useFetch";
import { LoadingRipple } from "../loading/Loading";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=DaNang,SaiGon,HaNoi"
  );
  return (
     <div className='featured'>
        {loading ? (
           <LoadingRipple />
        ) : (
           <>
              <div className='featuredItem'>
                 <img
                    src='https://static.vinwonders.com/2022/04/cau-rong-da-nang-1-1.jpg'
                    alt=''
                    className='featuredImg'
                 />
                 <div className='featuredTitles'>
                    <h1>Đà Nẵng</h1>
                    <h2>{data[0]} Hotels</h2>
                 </div>
              </div>

              <div className='featuredItem'>
                 <img
                    src='https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/5214486810_49ccd5c42f_z-1.jpg'
                    alt=''
                    className='featuredImg'
                 />
                 <div className='featuredTitles'>
                    <h1>Sài Gòn</h1>
                    <h2>{data[1]} Hotels</h2>
                 </div>
              </div>
              <div className='featuredItem'>
                 <img
                    src='https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/ho-hoan-kiem-3-768x582.jpg'
                    alt=''
                    className='featuredImg'
                 />
                 <div className='featuredTitles'>
                    <h1>Hà Nội</h1>
                    <h2>{data[2]} Hotels</h2>
                 </div>
              </div>
           </>
        )}
     </div>
  );
};

export default Featured;
