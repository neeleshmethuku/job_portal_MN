import React from 'react'
import { AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from "react-icons/ai";


function Footer() {
  return (
    <div className='footer p-10 sm:p-5 mx-10 mb-4 bg-black rounded-md gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-auto items-start md:items-center justify-between'>
    <div className="">
        <div className="logoDiv">
            <h1 className='text-[25px] pb-6 text-white'><strong>Job</strong> Portal</h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
            We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
    </div>

    <div className="grid">
        <span className='text-[18px] font-semibold pb-6 text-white'>
            Useful Links
        </span>
        <div className="grid gap-3">
            <li className='text-white opacity-[.7] hover:opacity-[1] cursor-pointer'>Home</li>
            <li className='text-white opacity-[.7] hover:opacity-[1] cursor-pointer'>About</li>
            <li className='text-white opacity-[.7] hover:opacity-[1] cursor-pointer'>Jobs</li>
            <li className='text-white opacity-[.7] hover:opacity-[1] cursor-pointer'>Contact</li>
        </div>
    </div>

    <div className="grid">
        <span className='text-[18px] font-semibold pb-6 text-white'>
        Contact Info
        </span>
        <small className="text-[14px] text-white">
            jobportalmn@gmail.com
        </small>
        <div className="flex gap-4 py-4">
            <AiFillLinkedin className='icon bg-white text-blue-600 rounded-full p-1 h-[35px] w-[35px]'/>
            <AiFillInstagram  className='icon bg-white text-blue-600 rounded-full p-1 h-[35px] w-[35px]'/>
            <AiFillTwitterSquare className='icon bg-white text-blue-600 rounded-full p-1 h-[35px] w-[35px]'/>
        </div>
    </div>
</div>

  )
}

export default Footer
