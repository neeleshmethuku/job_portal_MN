import React from 'react'

function Navbar() {
  return (
    // <div className='h-20 flex justify-between items-center w-full text-white '>
    //   <h1 className='text-3xl pl-20 text-blue-500'><strong>Job</strong> Portal</h1>

    //     <div className="menu flex gap-6 px-12">
    //       <li className='menuList text-blue-600 hover:text-blue-600'>Home</li>
    //       <li className='menuList text-zinc-200 hover:text-blue-600'>About</li>
    //       <li className='menuList text-zinc-200 hover:text-blue-600'>Jobs</li>
    //       <li className='menuList text-zinc-200 hover:text-blue-600'>Contact</li>
    //     </div>

    // </div>
    <div className='h-20 flex justify-between items-center w-full text-white px-4 sm:px-10'>
  <h1 className='text-2xl sm:text-3xl text-blue-500'><strong>Job</strong> Portal</h1>

  <div className="hidden md:flex gap-6">
    <li className='menuList text-blue-600 hover:text-blue-600'>Home</li>
    <li className='menuList text-zinc-200 hover:text-blue-600'>About</li>
    <li className='menuList text-zinc-200 hover:text-blue-600'>Jobs</li>
    <li className='menuList text-zinc-200 hover:text-blue-600'>Contact</li>
  </div>

  {/* Mobile Menu */}
  <div className='flex md:hidden'>
    <button className="text-white focus:outline-none">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
</div>

  )
}

export default Navbar
