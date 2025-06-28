import React from 'react'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className='flex  flex-col w-full h-full items-center justify-center gap-3'>
        <div>
            <p className='text-white flex h-full items-center text-3xl gap-2 font-semibold'>Health<span className='text-green-600'>Wise</span></p>
        </div>
        <div>
            <p className='text-white'>Your personal health assistant for natural remedies.</p>
        </div>
        <div className='mt-30 text-white bg-blue-500 px-3 py-2 rounded-4xl cursor-pointer'>
            <Link to="/register">Get Started</Link>
        </div>
    </div>
  )
}

export default LandingPage