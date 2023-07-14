// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

      <div className="w-full h-20 flex items-center justify-between bg-[#EBEBEB]  px-10 py-2">

        <div className="left flex items-center ">
          <Image src='/img/Seasoned Senior logo-03 1.png' width='120' height='60' />
          <span className="ml-5 text-sm hidden md:block text-[#020202]">Senior Home Care Agency</span>

        </div>
        <div className="left flex items-center">
          <button className='text-[#CB5A6F] font-meduim text-base font-bold  mx-5' >Login</button>
          <button className=' rounded bg-[#CB5A6F] text-base font-bold  px-8 py-1 text-[#FFF]'>Apply</button>

        </div>





      </div>
      <div className=" hidden md:block">

      <nav className="w-full h-10  flex items-center justify-between bg-[#FFF] py-2 px-10">


        <Link className='text-lg font-normal text-[#020202] ' href='/'>About</Link>

        <Link className='underline text-[#CB5A6F] text-lg font-normal ' href='/services'>Services</Link>
        <Link  className='text-lg font-normal text-[#020202] ' href='/'>Senior Events</Link>
        <Link  className='text-lg font-normal text-[#020202] ' href='/'>Specialized Care</Link>
        <Link  className='text-lg font-normal text-[#020202] ' href='/'>How it Works</Link>
        <Link  className='text-lg font-normal text-[#020202] ' href='/'>Schedule a Meeting</Link>



      </nav>
      </div>




      <nav className="bg-[#FFF]   md:hidden">
        <div className="w-full ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">

             
            </div>
            <div className="-mr-2 flex">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-3 rounded-md text-[#CB5A6F] hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
              >
                {isMenuOpen ? (
                  <ClearIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          {isMenuOpen && (
           
              <div className="flex flex-col justify-betwee">

              <Link className='text-lg font-normal text-[#020202] ' href='/'>About</Link>

              <Link className='underline text-[#CB5A6F] text-lg font-normal ' href='/services'>Services</Link>
              <Link  className='text-lg font-normal text-[#020202] ' href='/'>Senior Events</Link>
              <Link  className='text-lg font-normal text-[#020202] ' href='/'>Specialized Care</Link>
              <Link  className='text-lg font-normal text-[#020202] ' href='/'>How it Works</Link>
              <Link  className='text-lg font-normal text-[#020202] ' href='/'>Schedule a Meeting</Link>


              
            </div>
          )}
        </div>
      </nav>







    </>
  );
};

export default Navbar;
