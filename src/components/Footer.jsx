import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const icons  = ["Social Icons.png","Social Icons1.png","Social Icons2.png","Social Icons.png"
  ];

  return (
    <>
      <div className="footerr flex  flex-col ">
        <div className="w-full h-[300px] bg-[#F5F7FA] ">
          <h1 className="text-4xl text-[#263238] text-center font-bold p-8 w-120 block mx-auto">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <button className="bg-[#4CAF4F] text-[#FFFFFF] text-center p-2 rounded-md mx-auto block">
            Get a Demo
          </button>
        </div>
      </div>

      {/* foooter */}
      <div className="w-full  h-[328px] bg-[#263238] flex justify-around ">
        <div className="left p-8 m-8 flex flex-col gap-4 ">
          <img src="./images/Logo.png" className="invert brightness-0" />
          <h4 className="text-[#F5F7FA]">
            Copyright &copy; {year} Nexcent Ltd.
          </h4>
          <p className="text-[#F5F7FA]">All rights reserved</p>
          <div className="socila_links flex gap-4">
            {icons.map((img,index)=>(
              <img key={index} src={`/images/${img}`} alt={`img-${index}`}/>
            ))}

          </div>
        </div>
        <div className="right flex gap-16 justify-evenly p-8 m-8">
          <div className="company flex  flex-col gap-2">
            <h4 className="text-[#FFFFFF] font-bold ">
              Company
            </h4>
            <ul className="text-[#F5F7FA] text-sm flex flex-col gap-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Testimonial</li>
            </ul>

          </div>
          <div className="support flex  flex-col gap-2 ">
             <h4 className="text-[#FFFFFF] font-bold">
              Support
            </h4>
            <ul className="text-[#F5F7FA] text-sm flex flex-col gap-2">
              <li>Help Center</li>
              <li>Terms of Services</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>

          </div>
          <div className="stay flex flex-col gap-4 ">
            <h4 className="text-[#FFFFFF] font-bold">Stay up to date</h4>
            <input type="email" placeholder="Your email  address" className="border-2 bg-[#FFFFFF]"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
