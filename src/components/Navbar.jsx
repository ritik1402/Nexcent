import React from 'react'

const Navbar = () => {
    const NavItems = ["Home","Services","Feature","Products","Testimonial","FAQ"];
  return (
    <>
    <div className='container flex justify-between w-[1440] h-[84]  p-4 px-8 items-center bg-[#F5F7FA] '>
        <div className='logo'>
            <img src='/images/Logo.png' alt="logo"  />
        </div>
        <div className='navmenu text-lg t'>
            <ul className='flex gap-8 ' >
            {NavItems.map((item,index)=>(
                <li  className="text-[#18191F]" key={index}>{item}</li>
            ))}
            </ul>
        </div>
        <div className='flex gap-8 text-lg pr-2'>
            <button className='text-[#4CAF4F] p-2 '>Login</button>
            <button className='bg-[#4CAF4F] p-2 rounded-lg text-white'>Signup</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
