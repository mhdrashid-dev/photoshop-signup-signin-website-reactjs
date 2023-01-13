import React from 'react';

function Article() {
  return (
    <div className='w-full h-[45vh] md:h-[30vh] bg-white flex justify-center items-center lg:h-[35vh]'>
      <div className="container mx-auto px-7 ">
        <div className="content text-center">
          <h1 className='my-3 font-bold text-2xl'>Try Photoshop for free.</h1>
          <p className='my-3 text-xl'>Get Photoshop for free for 7 days, then ₹1,675.60/mo incl. GST</p>
          <div className="button-sec my-8">
            <button className='font-semibold px-5 py-1 rounded-full mx-5 border-2 border-black text-[rgba(0,0,0,.7)]'>Buy now</button>
            <button className='font-semibold px-5 py-1 rounded-full mx-5 border-2 border-blue-600 bg-blue-600 text-white'>Free trail</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
