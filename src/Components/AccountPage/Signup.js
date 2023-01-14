import React from 'react';
import BlackLogo from '../../Assets/adobe_logo_black.svg';

function Signup() {
  return (
    <div className="content h-full flex flex-col justify-start items-start w-full lg:w-1/2 2xl:w-1/3 md:bg-white md:p-12 md:rounded-lg lg:py-5 xl:py-12">
        <div className="logo h-[40px] block lg:hidden">
            <img src={BlackLogo} alt="" />
        </div>
        <div className="heading">
            <h1 className='mb-2 text-[2rem] font-semibold font-roboto lg:text-2xl xl:text-[2rem]'>Create an account</h1>            
        </div>
        <div className="different-account-sec flex my-5 w-full">
            <div className="google-sign">
                <a href="https://accounts.google.com/Login"><i class="fa-brands fa-google text-4xl mx-5 text-red-600"></i></a>
            </div>
            <div className="facebook-sign">
            <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjczNjgwMjgwLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"><i class="fa-brands fa-facebook text-4xl text-blue-600 mx-5"></i></a>
            </div>
        </div>
        <h1 className='text-center w-full my-5'>Or</h1>
        <div className="about">
            <h1 className='font-semibold font-roboto text-lg'>Sign up with email</h1>
            <h1 className='font-roboto '>Already have an account? <a href="" className='text-blue-600'>Sign in</a></h1>

        </div>
        <div className='input-sec my-5 w-full lg:my-2 xl:my-5'>
            <label className='block text-xs my-2 ' htmlFor="">Username</label>
            <input className='block w-full mb-5 bg-transparent border-b-2 border-blue-600 focus:outline-none' type="text" />
            <label className='block text-xs my-2 ' htmlFor="">Email</label>
            <input className='block w-full mb-5 bg-transparent border-b-2 border-blue-600 focus:outline-none' type="text" />
            <label className='block text-xs my-2' htmlFor="">Password</label>        
            <input className='block w-full  bg-transparent border-b-2 border-blue-600 focus:outline-none' type="text" />    
        </div>
        <div className="submit-button mb-5 text-end w-full">
            <button className='bg-blue-600 px-4 py-1 rounded-full text-white font-semibold'>Continue</button>
        </div>                
  </div>
  )
}

export default Signup
