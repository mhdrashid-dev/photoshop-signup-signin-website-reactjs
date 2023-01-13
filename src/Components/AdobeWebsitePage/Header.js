import React,{useState} from 'react'
import Logo from '../../Assets/Adobelogo.svg'

function Header() {    

  return (
    <>
        <div className='w-full h-[10vh] md:h-[7vh] 2xl:container 2xl:mx-auto'>
            <div className="content w-full h-full flex justify-between items-center p-4 md:px-6 md:py-1 lg:px-4 2xl:px-8">
                <div className="mobile-navbar lg:hidden">
                    <button><i class="fa-solid fa-bars text-black md:text-xl lg:text-base"></i></button>
                </div>
                <div className="logo w-1/5 lg:w-[10%]  h-full flex justify-center items-center font-roboto">
                    <img src={Logo} alt="" className='w-1/3 md:w-1/5 mr-1 md:mr-2' />
                    <h1 className='text-red-500 font-bold md:text-xl lg:text-base'>Adobe</h1>
                </div>
                <div className="account-sec flex justify-center items-center">
                    <button className='hidden lg:block text-black mr-5'><i class="fa-solid fa-magnifying-glass"></i></button>
                    <button className='text-xs font-medium lg:font-normal font-roboto md:text-sm'>Sign In</button>
                </div>
            </div>            
        </div>        
        <div className='pc-search w-full h-[10vh] lg:h-[5vh] xl:h-[8vh] fixed top-16 left-auto px-10 hidden lg:hidden justify-center items-center'>
            <div className="input-sec w-full lg:w-2/3 lg:mx-auto p-1 md:p-2 lg:p-1 xl:p-2  rounded-md border border-[rgba(0,0,0,.3)] flex justify-between">
                <input type="text" className='w-full bg-transparent focus:outline-none' placeholder='Search' />
                <button><i class="fa-solid fa-magnifying-glass text-[rgba(0,0,0,.7)]"></i></button>
            </div>
        </div>
    </>
  )
}

export default Header
