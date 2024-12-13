import React from 'react'
import Image from 'next/image';

function Newarrival() {
  return (
    <div className="min-h-screen bg-cream py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4">
        {/* Left Side: Image */}
        <div className="relative w-full h-96">
          <Image
            src="/Asgaard sofa 1.png" width={983} height={799}
            alt="Asgaard Sofa"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="text-center lg:text-left">
          <p className="text-gray-500 text-sm uppercase">New Arrivals</p>
          <h1 className="text-4xl font-bold mt-2">Asgaard sofa</h1>
          <button className="mt-4 px-6 py-2 bg-white border border-gray-800 text-gray-800 rounded hover:bg-gray-100">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Newarrival
