import React from 'react';
import CardOne from "../../Assets/cardimageOne.webp"
import CardTwo from "../../Assets/cardimageTwo.webp"
import CardThree from "../../Assets/cardimageThree.avif"


function About() {
  return (
    <>
    <div className='w-full min-h-[70vh] bg-white my-10 p-5'>
      <div className="content container mx-auto lg:px-32 lg:mt-10">
        <div className="heading">
            <h1 className='text-[1.3rem] text-[rgba(0,0,0,.8)] font-bold fotn-roboto md:px-5 lg:text-3xl'>Go wherever your imagination <br className='block md:hidden' /> takes you.</h1>
        </div>
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-6 lg:my-10">
          <div className="card min-h-[60vh] md:min-h-[30vh] my-7 lg:mb-0 font-roboto text-[rgba(0,0,0,.8)] md:mx-5">
            <img src={CardOne} alt="" className='w-full object-cover' />
            <h1 className='my-3 font-bold '>Remix your pics</h1>
            <p className='font-normal lg:text-sm xl:text-base'>Fix flaws and swap backgrounds in a few clicks. Add effects, mix up colours and change someone’s expression. With powerful editing tools, you can quickly give your photos the look you want.</p>
          </div>
          <div className="card min-h-[60vh] md:min-h-[30vh] my-7 lg:mb-0 font-roboto text-[rgba(0,0,0,.8)] md:mx-5">
            <img src={CardTwo} alt="" className='w-full object-cover' />
            <h1 className='my-3 font-bold '>Remix your pics</h1>
            <p className='font-normal lg:text-sm xl:text-base'>Fix flaws and swap backgrounds in a few clicks. Add effects, mix up colours and change someone’s expression. With powerful editing tools, you can quickly give your photos the look you want.</p>
          </div>
          <div className="card min-h-[60vh] md:min-h-[30vh] my-7 lg:mb-0 font-roboto text-[rgba(0,0,0,.8)] md:mx-5">
            <img src={CardThree} alt="" className='w-full object-cover' />
            <h1 className='my-3 font-bold '>Remix your pics</h1>
            <p className='font-normal lg:text-sm xl:text-base'>Fix flaws and swap backgrounds in a few clicks. Add effects, mix up colours and change someone’s expression. With powerful editing tools, you can quickly give your photos the look you want.</p>
          </div>
        </div>
      </div>            
    </div>
    <hr className='border-4 border-blue-600'/>
    </>
  )
}

export default About
