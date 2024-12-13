import React from 'react'
import Image from 'next/image';
const Herosection = () => {
  return (
    <div className='w-full md: h-[900px] bg-[#f3df9d]'>
      
           
            {/* Main Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center p-6 lg:p-10">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 lg:text-center">
          <h1 className="text-w-[440px] md:text-4xl font-bold">Rocket single seater</h1>
          <button className="mt-6 text-black px-4 py-2 underline">Shop Now</button>
        </div>
        
       {/* Image Section */}
       <div className=" ml-auto" >
          <Image src="/Rocket single seater 1.png" alt="Rocket single seater" width={853} height={1000} />
        </div>
      </section>
    </div>
        

  )
}

export default Herosection