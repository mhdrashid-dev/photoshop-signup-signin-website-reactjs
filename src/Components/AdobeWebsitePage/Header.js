import React,{useState} from 'react'
import Logo from '../../Assets/Adobelogo.svg'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Config';
import {signOut} from 'firebase/auth'

function Header() {    

    let [mediumActive,setMediumActive]=useState(false);
    let [smallActive,setSmallActive]=useState(false);    
    let navigate=useNavigate();


    let UserSignOut=()=>{        
        signOut(auth).then(() => {        
            navigate('/');
        }).catch((error) => {
        
        });
    }

  return (
    <>
        <div className='w-full h-[10vh] md:h-[8vh]  relative'>
            <div className="content w-full h-full flex justify-between items-center p-4 md:px-6 md:py-1 lg:px-4 2xl:px-8 2xl:container 2xl:mx-auto">
                <div className="mobile-navbar lg:hidden">
                    <button onClick={()=>{setSmallActive(!smallActive)}}><i class="fa-solid fa-bars text-black md:text-xl lg:text-base"></i></button>
                </div>
                <div className="logo w-1/5 lg:w-[10%]  h-full flex justify-center items-center font-roboto">
                    <img src={Logo} alt="" className='w-1/3 md:w-1/5 mr-1 md:mr-2' />
                    <h1 className='text-red-500 font-bold md:text-xl lg:text-base'>Adobe</h1>
                </div>
                <div className="account-sec flex justify-center items-center">
                    <button className='hidden lg:block text-black mr-5' onClick={()=>{setMediumActive(!mediumActive)}}><i class="fa-solid fa-magnifying-glass"></i></button>
                    <button className='text-xs text-white font-medium lg:font-semibold font-roboto md:text-sm ' onClick={UserSignOut}><span className='rounded-full border-2 px-3 py-[.6rem] bg-blue-600'>Signout</span></button>
                </div>
            </div>  
            <div className={`pc-search w-full h-[10vh] lg:h-[8vh] absolute top-16 lg:top-10 xl:top-12  left-auto px-10 ${smallActive ? 'block' : 'hidden'} lg:${mediumActive ? 'block' : 'hidden'} justify-center items-center bg-white`}>
                <div className="input-sec w-full lg:w-2/3 lg:mx-auto p-1 md:p-2 lg:p-1 xl:p-2  rounded-md border border-[rgba(0,0,0,.3)] flex justify-between">
                    <input type="text" className='w-full bg-transparent focus:outline-none' placeholder='Search' />
                    <button><i class="fa-solid fa-magnifying-glass text-[rgba(0,0,0,.7)]"></i></button>
                </div>
            </div>          
            
        </div>        
       
    </>
  )
}

export default Header
