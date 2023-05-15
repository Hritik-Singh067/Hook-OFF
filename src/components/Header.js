import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import Login from './login';
function Header() {
    return (
        <header>
            {/* Top nav */}
            <div className="flex items-center bg-black p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                </div>
                {/* Search */}
                <div className="hidden sm:flex items-center h-10 w-15 rounded-md ml-2 flex-grow cursor-pointer bg-black-400 ">
                    <SearchIcon className=" text-white h-12 p-4" />
                    <input className="h-full  flex-shrink rounded-md focus:outline-none px-2 background: rgba(0,0,0,0.5);" type="text" />
                </div>
                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <button className="bg-blue-500 h-10 w-20 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600">
                            <a className="font-extrabold md:text-sm" onClick={Login}>Sign Up</a>
                        </button>


                    </div>

                    <div className="relative link flex items-center">
                        <span className="absolute bottom-5 left-7 md:right-7 h-4 w-4 bg-yellow-100 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-7" />
                        <p className="hidden md:inline  md:text-sm mt-2">Cart</p>
                    </div>

                </div>

            </div>

            {/* Bottom nav */}
            <div>
                <div className="flex items-center space-x-3 p-2 pl-6 bg-black text-white text-sm">


                    <p className="link">Business</p>

                    <p className="link hidden lg:inline-flex">Electronics</p>
                    <p className="link hidden lg:inline-flex">Food & Grocery</p>

                </div>
            </div>

        </header>
    )
}

export default Header
