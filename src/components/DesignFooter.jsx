import React from "react";

const DesignFooter = () => {
  const icons = [
    "Logo (1).png",
    "Logo (2).png",
    "Logo (3).png",
    "Logo (4).png",
    "Logo (5).png",
    "Logo (6).png",
    "Logo (7).png",
  ];
  return (
    <>
      <div className="section-3 w-[1440px] h-[443px] flex justify-evenly m-8 p-8 gap-6">
        <div className="h-[433px] w-[442px]">
          <img src="./images/pana.png" />
        </div>
        <div className="h-[268px] w-[661px] mt-8 p-8">
          <h2 className="text-4xl font-bold text-[#4D4D4D] mb-4">
            {" "}
            How to design your site footer like we did
          </h2>
          <p className="text-[#717171]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>

          <button className="bg-[#4CAF4F] w-[151px] h-[52px] mt-4 text-md rounded-sm text-[#FFFFFF]">
            Learn More
          </button>
        </div>
      </div>

      {/* Cutomer's */}
      <div className="w-full h-[390px] flex justify-around p-8 mt-8  bg-[#F5F7FA]">
        <div>
          <img src="./images/image 9.png" />
        </div>
        <div className="w-[748px] h-[324px] ">
          <p className="text-[#717171] ">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="text-[#4CAF4F] font-bold mt-2">Tim Smith</h3>
          <p className="text-[#89939E]">
            British Dragon Boat Racing Association
          </p>
          <div className="flex gap-2 justify-between">
            <div className="flex gap-4 mt-2 p-2">
              {icons.map((img, index) => (
                <img key={index} src={`/images/${img}`} alt={`img-${index}`} />
              ))}
            </div>
            <div className="">
              <h3 className="text-[#4CAF4F] font-bold">Meet all customers </h3>
            </div>
          </div>
        </div>
      </div>

      {/* community update  */}
      <div>
        <div className="w-[1110p] p-4 m-8">
          <h2 className="text-center text-3xl font-bold text-[#4D4D4D]">
            Caring is the new marketing
          </h2>
          <div className="max-w-200 text-center mx-auto p-4 ">
            <p className="text-[#717171] text-sm">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>

          <div className="flex p-4 m-4 justify-center gap-4 ">
            <div className="relative text-center">
              <img src="./images/image 18.png" />
              <div className=" bg-[#F5F7FA] absolute top-50 right-4 left-4 bottom-0">
                <p className="text-[#717171] text-md font-bold">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <h3 className="text-[#4CAF4F] font-bold">Read More</h3>
              </div>
            </div>
            <div className="relative text-center">
              <img src="./images/image 19.png" />
              <div className=" bg-[#F5F7FA] absolute top-50 right-4 left-4 bottom-0">
                <p className="text-[#717171] text-md font-bold">
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <h3 className="text-[#4CAF4F] font-bold">Read More</h3>
              </div>
            </div>
            <div className="relative text-center">
              <img src="./images/image 20.png" />
              <div className=" bg-[#F5F7FA] absolute top-50 right-4 left-4 bottom-0">
                <p className="text-[#717171] text-md font-bold">
                  What are your safeguarding responsibilities and how can you manage them?
                </p>
                <h3 className="text-[#4CAF4F] font-bold">Read More</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default DesignFooter;
