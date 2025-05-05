import React from 'react'

const Hero = () => {

    
  return (
    <>
    <div className='containe flex justify-evenly  p-8 w-[1440] h-[599] bg-[#F5F7FA]'>
      <div className='content p-16 m-2 flex-col gap-6'>
        <h1 className='text-[#4CAF4F] text-5xl'><span className='text-[#000000] text-5xl'>Lessons and insights</span><br/> from 8 years</h1>
        <p className='text-[#717171] mt-2'>Where to grow your business as a photographer: site or social media?</p>
        <button className='bg-[#4CAF4F] mt-8 text-white p-2'>Register</button>
      </div>
      <div className='content-img'>
        <img src='/images/Illustration.png'width={391} height={407}/>

      </div>
    </div>

    {/* clients section */}

    <div className='w-[1440] h-[190] mt-4'>
        <div className='w-[1110] h-[76] flex-col justify-center items-center flex'>
                <h1 className='text-[#4D4D4D] text-5xl'>Our Clients</h1>
                <p className='text-[#717171] text-lg mt-4'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='w-[1152] h-[98] flex justify-evenly gap-8 mb-4'>
            <div className='logos flex justify-between p-4 m-4 gap-32'>
            <img src='/images/Logo (1).png' alt="logo 1" width={40} height={40}/>
            <img src='/images/Logo (2).png' alt="logo 1" width={40} height={40}/>
            <img src='/images/Logo (3).png' alt="logo 1" width={40} height={40}/>
            <img src='/images/Logo (4).png' alt="logo 1" width={40} height={40}/>
            <img src='/images/Logo (5).png' alt="logo 1" width={40} height={40}/>
            <img src='/images/Logo (6).png' alt="logo 1" width={40} height={40}/>
            <img src='/images/Logo (7).png' alt="logo 1" width={40} height={40}/>
           
            </div>
        </div>


    </div>


    {/* community section  */}
    <div className='w-[1440] h-[416] '>
        <div className='w-[1440] h-[120] flex flex-col justify-center items-center font-semibold mt-8 p-4'>
            <h2 className='w-[542] h-[88] text-[#4D4D4D] text-5xl'> Manage your entire community  <br/></h2>
            
            <h2 className=' font-semibold w-[542] h-[88] text-[#4D4D4D] text-5xl mt-4'>in a single system</h2>
            <p className='text-[#717171] text-lg pt-4'>Who is Nextcent suitable for?
            </p>
        </div>
        <div className='w-[1440] h-[280] flex  m-8'>
            <div className=' flex flex-col justify-center items-center    '>
                <div className='flex flex-col justify-center items-center   '>
                    <img src='/images/Icon.png' className=' flex flex-col justify-center items-center '/>
                    <h3 className='text-[#4D4D4D] font-bold text-lg'>Membership Organisations</h3>
                </div>
                <p className='text-[#717171] overflow-hidden '>Our membership management software provides full automation of membership renewals and payments</p>

            </div>
            <div className=' flex flex-col gap-2 '>
                <div className=' flex flex-col justify-center items-center '>
                    <img src='/images/Icon (1).png'/>
                    <h3 className='text-[#4D4D4D] font-bold text-lg'>National Associations</h3>
                </div>
                <p className='text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</p>

            </div>
            <div className=''>
                <div className='flex flex-col justify-center items-center  '>
                    <img src='/images/Icon (2).png'/>
                    <h3 className='text-[#4D4D4D] font-bold text-lg'>Clubs And Groups</h3>
                </div>
                <p className='text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</p>

            </div>


        </div>

    </div>
    </>
  )
}

export default Hero
