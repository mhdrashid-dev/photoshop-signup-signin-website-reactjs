import React from 'react'
import BlackLogo from '../Assets/adobe_logo_black.svg';
import WhiteLogo from '../Assets/adobe_logo_white.svg';


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
        <div className="content h-full flex flex-col justify-start items-start lg:w-1/2 2xl:w-1/3 md:bg-white md:p-12 md:rounded-lg lg:py-5 xl:py-12">
          <div className="logo h-[40px] block lg:hidden">
            <img src={BlackLogo} alt="" />
          </div>
          <div className="heading">
            <h1 className='mb-2 text-[2rem] font-semibold font-roboto lg:text-2xl xl:text-[2rem]'>Sign in</h1>
            <p className='mb-5 font-semibold'>New user? <a href="" className='text-blue-600'>Create an account</a></p>
          </div>
          <div className='input-sec my-5 w-full lg:my-2 xl:my-5'>
            <label className='block text-xs my-2 ' htmlFor="">Email</label>
            <input className='block w-full mb-5 bg-transparent border-b-2 border-blue-600 focus:outline-none' type="text" />
            <label className='block text-xs my-2' htmlFor="">Password</label>        
            <input className='block w-full  bg-transparent border-b-2 border-blue-600 focus:outline-none' type="text" />    
          </div>
          <div className="submit-button mb-5 text-end w-full">
            <button className='bg-blue-600 px-4 py-1 rounded-full text-white font-semibold'>Continue</button>
          </div>
          <h1 className='text-center w-full my-5'>Or</h1>
          <div className="different-account-sec my-2 w-full">
            <div className="google-sign my-5 xl:my-8 w-full flex justify-center border-2 border-[rgba(0,0,0,.7)] rounded-full py-3">
              <a href="https://accounts.google.com/Login"><i class="fa-brands fa-google mr-4"></i>Continue with Google</a>
            </div>
            <div className="facebook-sign my-5 xl:my-8 w-full flex justify-center border-2 border-blue-600 bg-blue-600 rounded-full py-3 text-white">
              <a href=""><i class="fa-brands fa-facebook mr-4"></i> Continue with Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
