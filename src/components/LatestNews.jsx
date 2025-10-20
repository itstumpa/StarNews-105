import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
      return (
            <div className='flex items-center gap-5 bg-base-200 p-3'>
                  <p className='text-base-100 bg-secondary px-5 font-bold py-2 '>latest</p>

                  <Marquee className='font-bold flex gap-5' pauseOnHover={true} speed={60}>
                  <p>Selena Gomez and Benny Blanco made their red-carpet debut as a married couple.</p>
                  <p>Kristen Bell shared that her pre-teen daughters told her latest red-carpet outfit was “too sexy.”</p>
                  <p>The star-loaded Academy Museum Gala 2025 unfolded in high-fashion glamour with celebrity looks making headlines.</p>
                  </Marquee>
                  
            </div>
      );
};

export default LatestNews;