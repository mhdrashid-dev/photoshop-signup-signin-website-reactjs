import React from 'react';
import HomeBG from '../../Assets/Home.jpg'
import Logo from '../../Assets/photoshoplogo.svg'

function Home() {
  return (
    <div className='w-full min-h-[100vh] md:min-h-[60vh] lg:min-h-[80vh] bg-[rgb(245,245,245)] lg:relative lg:bg-transparent lg:flex lg:justify-start lg:items-center'>
      <div className="img-sec h-[270px] w-full bg-black lg:h-[87vh] lg:absolute lg:top-0 lg:left-0 -z-10">
        <img src={HomeBG} alt=""  className='h-full object-cover md:h-[270px] md:w-full lg:h-full'/>
      </div>
      <div className="content p-5 md:px-16 lg:h-full lg:container lg:mx-auto lg:flex lg:flex-col">
        <div className="photoshop-logo hidden lg:block lg:w-[4.5%] lg:order-1">
          <img src={Logo} alt="" />
        </div>
        <div className="heading my-4 lg:order-2">
          <h1 className='text-3xl md:text-4xl font-roboto font-bold text-[rgb(0,0,0,.8)] xl:text-5xl'>Starting with <br className='block md:hidden'/> Photoshop.<br className='block md:hidden lg:block'/>Amazing will <br className='hidden md:block lg:hidden'/> follow</h1>
        </div>
        <div className="button-sec font-roboto my-5 font-bold md:my-7 lg:my-4 order-4">
          <button className='border-2 rounded-full border-[rgba(0,0,0,.8)] text-[rgba(0,0,0,.8)] mr-7 px-5 py-1 lg:px-8 lg:py-2'>Buy now</button>
          <button className='rounded-full bg-blue-600 text-white border-2 border-blue-600 mr-7 px-5 py-1 lg:px-8 lg:py-2'>Free trail</button>
        </div>
        <div className="plans-sec font-roboto my-4 md:my-5 order-5 lg:mt-3">
          <p className='text-sm md:text-base'>See plans for students and teachers or small and <br className='block md:hidden'/> medium business.</p>
        </div>
        <div className="price-info my-3 order-3">
          <p className='font-roboto text-xl font-medium text-[rgba(0,0,0,.8)] xl:text-2xl'>Gorgeous images, rich graphics <br  className='block md:hidden'/> and incredible art — <br className='hidden lg:block' /> you can do it <br  className='block md:hidden'/> all <br className='hidden md:block'/> with Photoshop. Starting at <br className='block md:hidden' /> ₹797.68/mo incl. GST.</p>
        </div>
      </div>      
    </div>
  )
}

export default Home
