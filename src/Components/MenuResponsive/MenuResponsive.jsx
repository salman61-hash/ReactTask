import React, { useState } from 'react'

const MenuResponsive = () => {
    let [Menu, setMenu] = useState(false);
    let [Model, setModel] = useState(false);

    return (
        <div className="app h-[800px] bg-gray-100">
            <hr />
            {/* Navbar */}
            <div className="flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-xl font-bold">Logo</h1>

                {/* Hamburger Button (mobile) */}
                <button id="menu-btn"  className="md:hidden"  onClick={() => setMenu(!Menu)} >
                   {Menu ? ( <span className="text-2xl">✖</span> ) : (
                   
                        <svg  xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24"stroke="currentColor">
                             <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-lg font-medium">
                    <li className="cursor-pointer hover:text-blue-500">About</li>
                    <li className="cursor-pointer hover:text-blue-500 " onClick={()=> setModel(!Model)} >Contact</li>
                    <li className="cursor-pointer hover:text-blue-500">Home</li>
                    <li className="cursor-pointer hover:text-blue-500">Testimonial</li>
                    <li className="cursor-pointer hover:text-blue-500">Section</li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div id="menu"className={`md:hidden bg-white p-4 shadow-md ${Menu ? "block" : "hidden"}`}> 
                 
                <ul className="flex flex-col space-y-4 text-lg font-medium">
                    
                    <li className="cursor-pointer hover:text-blue-500">About</li>
                    <li className="cursor-pointer hover:text-blue-500">Contact</li>
                    <li className="cursor-pointer hover:text-blue-500">Home</li>
                    <li className="cursor-pointer hover:text-blue-500">Testimonial</li>
                    <li className="cursor-pointer hover:text-blue-500">Section</li>
                </ul>
            </div>

            {/* Show Model */}


            
            <div className={`bg-gray-400 mx-auto mt-10 p-6 rounded-xl shadow-lg w-full max-w-md ${Model ? "block" : "hidden"}`}>
                <button className="text-2xl ml-[350px]" onClick={()=>setModel(!Model)}>✖</button>
  <h1 className="text-2xl font-bold text-center text-white mb-6">
    Fill Up Form Now
  </h1>

  <form className="flex flex-col space-y-4">
    <input
      type="text"
      placeholder="Enter Your Name"
      className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      placeholder="Enter Your Email"
      className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="password"
      placeholder="Enter Your Password"
      className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="bg-white text-blue-500 font-semibold py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

        </div>
    );
};

export default MenuResponsive;
