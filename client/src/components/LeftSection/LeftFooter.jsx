import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { MdLogout } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { LiaSignInAltSolid } from "react-icons/lia";
import axios from 'axios';
import { Link } from 'react-router-dom';

const LeftFooter = () => {

    const {user , setUser} = useContext(UserContext);

    const handleLogout = async()=>{
        try{

            const res = await axios({
                url : "/api/user/logout",
                method : "post",
            })

            setUser(null);
            localStorage.removeItem("user");

        }catch(error){
            console.log(error.message);
        }
    }

    return (
        <div className=' flex justify-center items-center mt-auto w-[100%]'>

            <div className=' flex flex-col gap-[12px] lg:gap-[15px]  w-[100%]'>

                <p className='text-[#A2A3A7] py-[5px] px-[10px] lg:text-[16px] text-[14px]'> Help & Support  </p>

                <ul className='flex flex-col gap-[5px] '>

                    <li className=' flex gap-[17px] py-[5px] px-[10px]'>
                        <img  src="./images/contact-us.svg" alt="contact-us" />
                        <p className='  text-[14px] flex-1  ' >Contact Us</p>
                    </li>

                    <li className='flex gap-[17px] py-[5px] px-[10px]'> 
                    <img src="./images/about-us.svg" alt="about-us" />
                    <p className='custom-text-left-footer flex-1'> About Us </p>

                    </li>

                    <li className='flex gap-[17px] py-[5px] px-[10px]'> 
                    <img src="./images/terms.svg" alt="terms" />
                    <p className='custom-text-left-footer flex-1'> Terms of service </p>
                    </li>

                    <li className='flex gap-[17px] py-[5px] px-[10px]'> 
                    <img src="./images/privacy.svg" alt="privacy" />
                    <p className='custom-text-left-footer  flex-1'> Privacy Policy </p>
                    </li>

                   <div className='flex flex-col gap-2 w-[100%] md:w-[60%] '>

                    {user && <button onClick={handleLogout} className=' w-[100%] flex  justify-center items-center  gap-2 bg-blue-400 text-white p-1 rounded-[5px] cursor-pointer shadow-md  '>Logout <MdLogout size={"20px"}  /> </button>}

                    {!user && <>

                    <Link to={"/login"} > <button className='bg-green-400 w-[100%] flex justify-center items-center gap-2 text-white p-[4px] rounded-[5px] cursor-pointer shadow-md'>Login <CiLogin size={"22px"} />  </button> </Link>
                    <Link to={"/signup"}> <button className='bg-blue-400 w-[100%] flex justify-center items-center gap-2  text-white p-[4px] rounded-[5px] cursor-pointer shadow-md'>Signup <LiaSignInAltSolid size={"22px"} /> </button> </Link>
                        
                    </>}
                    
                    
                   </div>

                </ul>

                <p style={{boxShadow : "0px 4px 4px 0px #0000001A"}} className=' lg:text-[16px] text-[14px] p-[10px] w-[100%] border-[1px] border-[#A2A3A7] rounded-[5px]'> Credits Available : <span className='text-[#FF9800] lg:text-[16px] text-[14px] '> 8510 </span> </p>

                <div style={{boxShadow: "0px 4px 4px 0px #0000001A"}} className=' w-[100%] p-[10px] rounded-[5px] border-[1px] border-[#FF9800] bg-[#FFFBF5] flex items-center gap-[14px] '>
                    <img src="./images/buy-credits.svg" alt="" />
                    <p className='lg:text-[16px] text-[14px]'>BUY MORE CREDITS</p>
                </div>

            </div>

        </div>
    )
}

export default LeftFooter
