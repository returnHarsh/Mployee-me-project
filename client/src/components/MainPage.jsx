import React from 'react'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'
import MiddleSection from './MiddleSection/MiddleSection'

const MainPage = () => {
  return (
    <div className='h-[calc(100vh-65px)] flex bg-[#F6F6F6]'>
        <LeftSection/>
        <MiddleSection/>
        <RightSection/>
        
    </div>
  )
}

export default MainPage
