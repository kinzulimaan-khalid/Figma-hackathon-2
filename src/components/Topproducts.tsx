import React from 'react'
import Image from 'next/image';

const Topproducts = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold">Top Picks For You</h1>
        <p className="text-2xl ">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Product Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-64 h-64 relative">
            <Image
              src="/Trenton modular sofa_3 1.png" 
              alt="Trenton Modular Sofa"
              width={287} height={287}
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">Trenton modular sofa_3</h3>
          <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-64 h-64 relative">
            <Image
              src="/Granite dining table with dining chair 1.jpg" 
              alt="Granite Dining Table"
              width={287} height={287}
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">Granite dining table with dining chair</h3>
          <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-64 h-64 relative">
            <Image
              src="/Outdoor bar table and stool 1.jpg" 
              alt="Outdoor Bar Table"
              width={287} height={287}
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">Outdoor bar table and stool</h3>
          <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-287 h-287 relative">
            <Image
              src="/Plain console with teak mirror 1.jpg" 
              alt="Plain Console" width={287} height={287}
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">Plain console with teak mirror</h3>
          <p className="text-gray-600 mt-2">Rs. 25,000.00</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="text-black underline">View More</button>
      </div>
    </div>
  );
}

export default Topproducts