import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import MdHeader from './MdHeader';
import { UserContext } from '../../context/UserContext';

const Header = () => {

    const {user} = useContext(UserContext);

  return (
    <div className=' w-[100vw] h-[65px] py-[5px] px-[30px] flex justify-center items-center shadow-md shadow-[#0000001A] '>

        <div className='flex justify-center  items-center w-[100%] h-[100%]' >

{/* main icon */}
            <div className='w-[153px] h-[35px] flex justify-center items-center  mr-auto '>
                <Link to={"/"} > <img className='min-w-[100px]' src="./images/main-icon.svg" alt="main-icon" /> </Link>
            </div>

            {/* middle navbar section */}
            <div className='hidden md:flex  justify-center items-center flex-1 py-0 px-[2px] mx-auto'>

                <ul className=' flex justify-center items-center gap-2 lg:text-[16px]'>
                    <li className=' cursor-pointer xl:text-[16px] text-[12px]  p-[5px] md:p-[10px] text-[#FF9800] font-[600]'> Resume Scan </li>
                    <li className=' cursor-pointer xl:text-[16px] text-[12px]  p-[5px] md:p-[10px] font-[500] '> Job Recommendation </li>
                    <li className=' cursor-pointer xl:text-[16px] text-[12px]  p-[5px] md:p-[10px] font-[500] '> Resume Keywords </li>
                    <li className=' cursor-pointer xl:text-[16px] text-[12px]  p-[5px] md:p-[10px] font-[500] '> Resume Services </li>
                    <li className=' cursor-pointer xl:text-[16px] text-[12px]  p-[5px] md:p-[10px] font-[500] '> Career Blogs </li>
                </ul>                
            </div>

            <div className=' flex md:hidden flex-1'>
            <MdHeader/>
            </div>

            {/* last user profile part */}
            <div className='flex justify-center items-center'>

                <div className='rounded-[20px] lg:py-[3px] pr-0 lg:pl-[2px] bg-[#E4E4E4] flex gap-[2px] lg:gap-[9px] items-center  max-w-[140px] xl:max-w-[150px] xl:min-w-[120px]  lg:min-h-[38px]'>
                    <img className='rounded-[16px] ' src="./images/profile-pic.svg" alt="" />

{/* name container */}
                    <div className='flex flex-1 justify-center items-center  mr-2'>
                    <p className='xl:text-[16px] text-[12px] font-[500] '> {user ? user.name : "guest"} </p>
                    </div>

                </div>

            </div>

        </div>
       
    </div>
  )
}

export default Header
