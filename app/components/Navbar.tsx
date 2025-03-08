"use client"
import { useState } from "react";
import Link from "next/link"
import { FiMenu, FiX } from "react-icons/fi";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
        <div className="px-4 py-6 flex justify-between items-center  w-full">

            <h1 className="text-2xl font-bold text-sky-500 transition duration-300 ml-6">postMe</h1>

        <ul className="hidden md:flex space-x-8">
           {["Home","Post","Profile"].map((item)=>(
            <li key={item} className="relative group">
                <Link 
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-sky-500 transition duration-300 font-medium"
                >
                {item} 
                </Link>
                  {/* Underline Effect */}
           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
           ))}
        </ul>

        <div className="hidden md:block">
            <Link href="/login">
            <button className="px-4 py-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition duration-300 mr-6">Login</button>
            </Link>
        </div>

        <button className="md:hidden text-gray-700 focus:outline-none mr-6"  onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        </div>

              {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {["Home", "Post", "Profile"].map((item) => (
              <li key={item}>
                <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-sky-500 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-sky-500 transition duration-300">
           
                  Login
         
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar