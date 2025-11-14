import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import ClassImage from "../../assets/class.png"
import playgroundImage from "../../assets/playground.png"

const QZone = () => {
      return (
            <div className='bg-base-200 p-3'>
                 <h2 className='font-bold mb-5 space-y-5 '>QZone</h2> 
                 <div className='flex items-center flex-col'>
                  <img src={swimmingImage} alt="" />
                  <img src={ClassImage} alt="" />
                  <img src={playgroundImage} alt="" />

                 </div>
            </div>
      );
};

export default QZone;