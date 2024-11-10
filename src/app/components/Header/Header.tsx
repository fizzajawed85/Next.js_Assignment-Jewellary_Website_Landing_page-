import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="bg-[#A29875] w-full h-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 md:px-6">
      
      <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
        <Image alt="Manzzari Logo" src="/logo.svg" width={242} height={87} />
      </div>
    </div>
  ) 
}

export default Header
