import React from 'react';
import HeaderImage from "../assets/logo.png"
import { format } from "date-fns";

const today = new Date();
const Header = () => {
      return (
            <div className='flex flex-col mt-14 items-center text-center px-12 max-w-11/12 mx-auto'>
                  <img className='w-[600px]' src={HeaderImage} alt=""/>
                  <p className='tracking-widest mt-5 text-3xl'>Truth Behind Closed Doors</p>
                   <p className='mt-1 font-semibold text-xl'>{format(today, "EEEE, MMMM dd, yyyy")}</p>
            </div>
      );
};

export default Header;