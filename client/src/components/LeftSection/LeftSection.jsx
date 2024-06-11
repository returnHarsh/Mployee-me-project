import React from 'react'
import LeftOptions from './LeftOptions'
import LeftFooter from './LeftFooter'

const LeftSection = () => {
  return (
    <div className=' bg-white relative w-[35%] lg:w-[384px] h-[calc(100vh-65px)] lg:py-[45px] lg:pr-[50px] lg:pl-[30px] py-[10px] px-[10px] md:px-[20px] flex flex-col '>

      <LeftOptions/>

      <LeftFooter/>

    </div>
  )
}

export default LeftSection
