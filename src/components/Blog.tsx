import React from 'react'
import Image from 'next/image';
import { Link } from 'lucide-react';
import { IoMdTime } from "react-icons/io";

const Blog = () => {
  return (
          <div className="p-5 font-sans">
            <h1 className="text-center text-black text-3xl ">Our Blogs</h1>
            <p className="text-center text-gray-600 mt-2">
              Find a bright idea to suit your taste with our great selection
            </p>
            <div className="flex flex-wrap justify-around mt-8">
              <div className="border border-gray-300 rounded-lg p-4 w-1/3 max-w-xs">
                <Image src="/Blog-1.png" alt="Blog 2" width={393} height={393} className='w-full rounded-md' />
                <h3 className="text-gray-800 text-lg font-semibold mt-3">
                  Going all-in with millennial design
                </h3>
                <Link href="#" className="text-black underline mt-2 inline-block">Read More</Link>
                <p className="text-gray-500 text-sm mt-1">5 min | 12th Oct 2022</p>
            
              </div>
              <div className="border border-gray-300 rounded-lg p-4 w-1/3 max-w-xs">
              <Image src="/Blog-2.png" alt="Blog 3" width={393} height={393} className='w-full rounded-md' />
                <h3 className="text-gray-800 text-lg font-semibold mt-3">
                  Going all-in with millennial design
                </h3>
                <Link href="#" className="text-black underline mt-2 inline-block">Read More</Link>
                <p className="text-gray-500 text-sm mt-1">5 min | 12th Oct 2022</p>
                
              </div>
              <div className="border border-gray-300 rounded-lg p-4 w-1/3 max-w-xs">
              <Image src="/Blog-3 (2).png" alt="Blog 3" width={393} height={393} className='w-full rounded-md' />
                <h3 className="text-gray-800 text-lg font-semibold mt-3">
                  Going all-in with millennial design
                </h3>
                <Link href="#" className="text-black underline mt-2 inline-block">Read More</Link>
                <p className="text-gray-500 text-sm mt-1"> <IoMdTime />
                    5 min | 12th Oct 2022</p>
                
              </div>
            </div>
          </div>
        );
      }
    

export default Blog