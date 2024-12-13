import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (

          <footer className="bg-gray-100 py-8 justify-around">
            <div className="container mx-auto text-center flex ">
              {/* Address Section */}
              <div className="mb-8 text-gray-500">
                <address className="not-italic">
                  400 University Drive Suite 200<br />
                  Coral Gables,<br />
                  FL 33134 USA
                </address>
              </div>
      
              {/* Links Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Links */}
                <div>
                  <h4 className="font-bold mb-4">Links</h4>
                  <ul className="space-y-2">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/shop" className="hover:underline">Shop</Link></li>
                    <li><Link href="/about" className="hover:underline">About</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link ></li>
                  </ul>
                </div>
      
                {/* Help */}
                <div>
                  <h4 className="font-bold mb-4">Help</h4>
                  <ul className="space-y-2">
                    <li><Link href="/payment-options" className="hover:underline"> Payment Options</Link></li>
                    <li><Link href="/returns" className="hover:underline">Returns</Link ></li>
                    <li><Link href="/privacy-policies" className="hover:underline">Privacy Policies</Link ></li>
                  </ul>
                </div>
      
                {/* Newsletter */}
                <div>
                  <h4 className="font-bold mb-4">Newsletter</h4>
                  <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
      
            </div>
            {/* Copyright Section */}
            <div className="border-t border-gray-300 pt-4 text-gray-500 ">
                2022 Meubel House. All rights reserved
              </div>
          </footer>
        );
      }
      
      export default Footer