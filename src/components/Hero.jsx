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
            <div className='logos flex justify-between p-4 m-4 gap-32 '>
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
    <div className='w-[1440] h-[416]'>
        <div className='w-[1440] h-[120] flex flex-col justify-center items-center font-semibold mt-8 p-4  '>
            
            <h2 className='w-[542] h-[88] text-[#4D4D4D] text-5xl'> Manage your entire community  <br/></h2>
            
            <h2 className=' font-semibold w-[542] h-[88] text-[#4D4D4D] text-5xl mt-4'>in a single system</h2>
            <p className='text-[#717171] text-lg pt-4'>Who is Nextcent suitable for?
            </p>
            
        </div>
        <div className='w-[1440] h-[280] flex  m-8 '>
            <div className=' flex flex-col gap-2  m-4 p-8 '>
                <div className='flex flex-col justify-center items-center   '>
                    <img src='/images/Icon.png' className=' flex flex-col justify-center items-center '/>
                    <h3 className='text-[#4D4D4D] font-bold text-lg'>Membership Organisations</h3>
                    <p className='text-[#717171] overflow-hidden '>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                

            </div>
            <div className=' flex flex-col gap-2 m-4 p-8'>
                <div className=' flex flex-col justify-center items-center '>
                    <img src='/images/Icon (1).png'/>
                    <h3 className='text-[#4D4D4D] font-bold text-lg'>National Associations</h3>
                    <p className='text-[#717171]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                

            </div>
            <div className='flex flex-col gap-2 m-4 p-8'>
                <div className='flex flex-col justify-center items-center '>
                    <img src='/images/Icon (2).png'/>
                    <h3 className='text-[#4D4D4D] font-bold text-lg'>Clubs And Groups</h3>
                    <p className='text-[#717171] '>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                

            </div>


        </div>

    </div>

    {/* End of community section */}

    {/* the unseen of years of spenidng three years at spending */}

    <div className='section-3 w-[1440px] h-[443px] flex justify-evenly m-8 p-8 gap-6'>
        <div className='h-[433px] w-[442px]'>
            <img src='./images/Frame 35.png'/>

        </div>
        <div className='h-[268px] w-[661px] mt-8 p-8'>
            <h2 className='text-4xl font-bold text-[#4D4D4D] mb-4'> The unseen of spending three years at Pixelgrade</h2>
            <p className='text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>

        <button className='bg-[#4CAF4F] w-[151px] h-[52px] mt-4 text-md rounded-sm text-[#FFFFFF]'>Learn More</button>
        </div>
    </div>

    {/* Achievements */}
    <div className='h-[288] w-full bg-[#F5F7FA] pt-[64px] pb-[64px] pl-[144px] pr-[144px]  flex  justify-around' >
        <div>
                <h2 className='text-4xl text-[#4D4D4D]'>Helping a local <br/><span className='text-[#4CAF4F]'>business reinvent itself</span></h2>
                <p className='text-[#18191F] text-md'>We reached here with our hard work and dedication</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='top flex justify-between gap-12'>
                <div className='flex gap-2'>
                <img src='./images/Icon (3).png'/>
                <div>
                <h2 className='text-[#4D4D4D] text-3xl font-bold'>2,245,341</h2>
                <p className='text-[#717171]'>Members</p>
                </div>
                </div>
                <div className='flex gap-2'>
                <img src='./images/Icon (4).png'/>
                <div>
                <h2 className='text-[#4D4D4D] text-3xl font-bold'>46,328</h2>
                <p className='text-[#717171]'>Clubs</p>
                </div>
                </div>
                
            </div>
            <div className='bottom flex justify-between gap-12 '>
                <div className='flex gap-2'>
                <img src='./images/Icon (5).png'/>
                <div>
                <h2 className='text-[#4D4D4D] text-3xl font-bold'>828,867</h2>
                <p className='text-[#717171]'>Event Bookings</p>
                </div>
                </div>
                <div className='flex gap-2'>
                <img src='./images/Icon (6).png'/>
                <div>
                <h2 className='text-[#4D4D4D] text-3xl font-bold'>1,926,436</h2>
                <p className='text-[#717171]'>Payments</p>
                </div>
                </div>

            </div>

        </div>

    </div>

    {/* end of achienvements */}
    </>
  )
}

export default Hero
