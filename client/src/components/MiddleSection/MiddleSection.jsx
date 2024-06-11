import React, { useContext, useState } from 'react'
import { Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {fourBlocks , bullets as bulletsData} from "../../data/data.js"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from 'axios';
import { UserContext } from '../../context/UserContext.jsx';

const MiddleSection = () => {

    const[clickedId , setClickedId] = useState(1);
    const[bullets , setBullts] = useState(bulletsData);

    const {setUser} = useContext(UserContext);
    
    const handleExpand = (e , bullet) =>{

        const newBullets = bullets.map(newBullet=>{
           return newBullet.id == bullet.id ? {...newBullet , expand : !newBullet.expand} : newBullet
        })

        setBullts(newBullets);
    }



    

    return (
        <div className='scroller mt-[20px] flex-1 px-[20px] mb-[10px] overflow-scroll'>


            <div>
                <p className='text-[#A2A3A7] text-[18px]'>Experience : Less than 2 years</p>
            </div>


            <div className='flex gap-[10px] max-w-[90%]'>
                <div style={{ boxShadow: "0px 4px 4px 0px #0000001A" }} className='bg-white border-[1px] border-[#E8E7EC] rounded-[20px] p-[20px] gap-[20px] flex items-center'  >

                    {/* progress bar */}
                    <div className='relative'>

                        <div className='relative rotate-[210deg] '>
                            <CircularProgress
                                size="100px"
                                value={40}
                                color="#E33629"
                                thickness="7px"
                                capIsRound
                            >
                                {/* Empty CircularProgressLabel to maintain structure */}
                                <CircularProgressLabel></CircularProgressLabel>
                            </CircularProgress>
                        </div>

                        <div className='absolute top-0 flex justify-center items-center h-[100%] w-[100%]'>
                            <p className='text-[25px] font-[700]'>40%</p>
                        </div>


                    </div>


                    <div className='flex-1'>
                        <p className='text-[#E33629] text-[12px] lg:text-[14px]'>Ohh No !! Needs impreovement. Your resume just scored 14 out of 100. You need 21 points to reach orange zone atleast.</p>
                    </div>

                </div>

{/* side svgs of download and share */}
                <div className='flex flex-col justify-center items-center gap-[10px]'>

{/* download svg container */}
                    <div  style={{boxShadow : "0px 4px 4px 0px #0000000D"}} className=' cursor-pointer flex justify-center items-center bg-[#FFEED5] h-[45px] w-[45px] rounded-full'>
                    <img src="./images/download.svg" alt="download" />
                    </div>

{/* share svg container */}
                    <div style={{boxShadow : "0px 4px 4px 0px #0000000D"}} className=' cursor-pointer h-[45px] w-[45px] rounded-full flex justify-center items-center bg-[#FFEED5]'>
                    <img src="./images/share.svg" alt="share" />
                    </div>

                </div>

            </div>


            {/* 4 blocks */}
            <div className='flex mt-[22px] justify-center items-center gap-[10px] lg:gap-[20px]'>
                {fourBlocks.map(block=>{
                    return <div onClick={()=>setClickedId(block.id)}  style={{boxShadow: "0px 4px 4px 0px #0000000D"}} className={` ${clickedId == block.id ? 'border-[1px] border-[#FF9800] text-[#FF9800] '  : ''} bg-white rounded-[10px]  flex flex-col justify-center items-center p-[5px] lg:p-[10px] lg:gap-[10px] gap-[5px] cursor-pointer relative transition-all duration-75`} key={block.id}>
                        <img src={block.img} alt={block.img} />
                        {clickedId == block.id && <> <img className=' absolute -bottom-4 right-5 transition-all duration-75' src="./images/mini-drop.svg" alt="mini-drop" /> </>}
                        <p className=' text-[10px] md:text-[14px] lg:text-[16px]'> {block.title} </p>
                    </div>
                })}

            </div>

            {/* bullet points */}
            <div className='flex flex-col mt-[20px] '>

                {bullets.map(bullet=>{
                    return <div onClick={(e)=>handleExpand(e,bullet)} key={bullet.id} className={` ${bullet.id == 1 ? "rounded-tl-[15px] rounded-tr-[15px]" : ' ' }  flex flex-col bg-white p-[20px] border-[1px] border-[#E8E7EC] gap-[5px] cursor-pointer  `}>

                        {/* top header */}
                        <div className='  flex gap-[8px] justify-center items-center'>

                            <img className='w-[19px]' src={bullet.img} alt={bullet.img} />
                            <p className='flex-1 text-[14px] lg:text-[16px]'> {bullet.title} </p>

                            {/* <img onClick={(e)=> handleBulletExpand(e , bullet.id) } className={` ${bulletExpand == bullet.id ? "w-[12.5px]" : "w-[8px]"}  ml-auto  cursor-pointer `} src={` ${bulletExpand == bullet.id ? "./images/down.svg" : "./images/right-arrow.svg"} `} alt="arrow" /> */}

                            {/* {bulletExpand == bullet.id ? <MdKeyboardArrowRight className='cursor-pointer' size={"25px"}  /> :   <MdKeyboardArrowDown className='cursor-pointer' size={"25px"}   /> } */}
                            {bullet.expand == true ? <MdKeyboardArrowDown size={"25px"} /> : <MdKeyboardArrowRight size={"25px"} /> }
                            
                          

                        </div>

                        {/* bottom description */}
                        <div className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${bullet.expand ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`} >
                            <p className=' text-[12px] lg:text-[14px] font-[400] '> {bullet.desc} </p>
                        </div>


                    </div>
                })}

            </div>



        </div>
    )
}

export default MiddleSection
