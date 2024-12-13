
import React from 'react'
import Image from 'next/image';

const Products = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-605 h-562 relative">
            <Image src="/Granite square side table 1.png" alt="Granite square side table" width={605} height={562} objectFit="cover"
              className="rounded-lg shadow-lg" />
          </div>
          <h3 className="text-lg font-semibold mt-2">Side table</h3>
          <button className="text-sm text-black mt-2 underline">View More</button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className=" relative">
            <Image src="/Cloud sofa three seater + ottoman_3 1.png"  alt="Cloud sofa three seater " width={605} height={562}objectFit="cover"
             className="rounded-lg shadow-lg"/>
          </div>
          <h3 className="text-lg font-semibold mt-2">Side table</h3>
          <button className="text-sm text-black mt-2 underline">View More</button>
        </div>
      </div>
    </div>
  );
}

    
    

export default Products

