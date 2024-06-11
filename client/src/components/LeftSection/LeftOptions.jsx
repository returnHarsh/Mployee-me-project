import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const LeftOptions = () => {

  const[scanExpand , setScanExpand] = useState(false);

  return (
    <div className='flex flex-col gap-[10px]'>

      <ul className='flex flex-col justify-center lg:gap-[10px]  gap-[5px]'>

        <li className=' lg:text-[16px] text-[14px] w-[100%] p-[10px] h-[40px] bg-[#222C4D] text-white text-center flex justify-center items-center rounded-[10px]'>
          RESUME SCAN
        </li>

        <li onClick={()=> setScanExpand(!scanExpand)} className=' cursor-pointer  w-[100%] p-[10px] lg:h-[44px] rounded-[10px] text-[#FF9800] border-[1px] border-[#FF9800] flex justify-center items-center gap-[12px] lg:gap-[17px] '>

          <img src="./images/resume-scan.svg" alt="" />
          <p className='flex-1 lg:text-[16px] text-[14px]'> Scan my resume </p>

          {scanExpand ? <MdKeyboardArrowRight size={"20px"} /> : <MdKeyboardArrowDown size={"20px"} /> }
          

        </li>

{/* accordion */}
<div className={` ${scanExpand ? "opacity-100" : "max-h-0  overflow-hidden opacity-0" }  flex flex-col lg:gap-[10px] gap-[5px] justify-center transition-all duration-500 ease-in-out `}>
<li className=' w-[100%] flex lg:gap-[17px] gap-[12px] p-[10px] lg:h-[44px] items-center '>
          <img src="./images/recent-scan.svg"  alt="recent-scan" />
          <p className='lg:text-[16px] text-[14px]'>Recent Scans</p>
        </li>

        <li className=' w-[100%] flex  lg:gap-[17px] gap-[12px] p-[10px] lg:h-[44px] items-center '>
          <img src="./images/recent-scan.svg"  alt="previous-scan" />
          <p className='lg:text-[16px] text-[14px]'>Previous Scans</p>
        </li>
</div>
        

        <li className=' w-[100%] flex lg:gap-[17px] gap-[12px] p-[10px] lg:h-[44px] items-center '>
          <img src="./images/getCredits.svg" alt="" />
          <p className='lg:text-[16px] text-[14px]'> Get Credits </p>

        </li>

      </ul>

    </div>
  )
}

export default LeftOptions
