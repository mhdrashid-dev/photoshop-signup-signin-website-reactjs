import React from 'react'

import WhiteLogo from '../Assets/adobe_logo_white.svg';
import Signup from '../Components/AccountPage/Signup';


function AccountPage() {
  return (
    <div className='w-full h-screen bg-white md:bg-hero bg-center bg-cover flex justify-center items-center 2xl:justify-end'>
      <div className="contianer mx-auto p-5 w-full h-full md:py-40 md:px-32 lg:py-5 lg:px-5 2xl:p-32 flex justify-center items-center 2xl:justify-between">
        <div className="logo-main-sec hidden w-1/2 h-full 2xl:flex justify-center items-center">
          <div className="content h-1/2 flex flex-col justify-center items-start">
              <img src={WhiteLogo} alt="" />
              <h1 className='my-5 text-white font-semibold text-xl'>Sign in or Create an account</h1>
          </div>
        </div>
        <Signup></Signup>        
      </div>
    </div>
  )
}

export default AccountPage
