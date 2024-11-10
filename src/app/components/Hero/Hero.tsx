import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="min-h-screen py-[40px] flex flex-col lg:flex-row items-center lg:items-start">
      <div className=" lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-20 m-16 mt-0  justify-center pl md:w-[496px] space-y-3">
        <div className="font-bold text-3xl md:text-4xl mt-10 lg:mt-20 text-center lg:text-left font-[LibraBodoni]">
          <h1>IMPECCABLE</h1>
          <h1>CRAFTSMANSHIP AND</h1>
          <h1>FINESSE</h1>
        </div>
    
        <div className="mt-4 text-center text-[#787054] w-[902px] font-semibold text-sm text-[21px] md:text-left md:w-[496px] lg:w-[902] lg:text-left font-[LibraBodoni] mb-0">
          <p>An example of intricate workmanship and detail, elegant</p>
          <p>necklaces and long and short chains form a part of our</p>
          <p>desirable collection.</p>
        </div>

        <button className="mt-8 lg:mt-10 hover:bg-[#b8aa75] text-lg font-[LibraBodoni] p-10px bg-[#A29875] rounded-lg text-white h-[50px] w-[200px] md:w-[250px] lg:w-[288px]">Explore Now</button>
        
      </div>

      <div className=" flex w-[308.1px] md:w-[400px] lg:w-[462px] h-auto mt-10 lg:mt-0 lg:ml-16 pr-12 ">
         <Image alt="Hero Image" src="/hero.svg" height={610} width={410} /> 
      </div>

    </div>
  )
}

export default Hero
