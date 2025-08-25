
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';

function Header() {
    const [navOpen,setNavOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className='px-15 h-16 flex flex-row justify-between dark:shadow-[#E3E3E6] '>

      <nav className='bg-white dark:bg-black fixed top-5 left-1/2 transform -translate-x-1/2 shadow-lg shadow-blue-500 rounded-full 
      px-3 sm:px-10 py-3 flex gap-8 justify-center items-center z-50 hover:transform hover:translate-y-[5px] duration-200'>
        <Link to={'/'} className='text-[#060b64] dark:text-white text-sm sm:text-lg font-medium hover:!text-blue-500 transition'>Home</Link>
        <Link to={'/projects'} className='text-[#060b64] dark:text-white text-sm sm:text-lg font-medium hover:!text-blue-500 transition'>Projects</Link>
        <Link to={'/services'} className='text-[#060b64] dark:text-white text-sm sm:text-lg font-medium hover:!text-blue-500 transition'>Services</Link>
        <Link to={'/about'} className='text-[#060b64] dark:text-white text-sm sm:text-lg font-medium hover:!text-blue-500 transition'>About</Link>
      </nav>

      <button className='fixed top-5 right-2 cursor-pointer text-xl rounded-full shadow-md shadow-blue-500' onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IoSunnyOutline className='!text-white'/>:<IoMoonOutline/>}
      </button>
        

        {/* Navbar toggle switch for small screens*/}
        {/* {navOpen && <IoMdClose className='sm:hidden text-2xl border-2 p-1  rounded-md text-[#4349b3] my-auto' onClick={()=>setNavOpen(!navOpen)}/>}
        {!navOpen && <FaBars className='sm:hidden text-2xl border-2 p-1  rounded-md text-[#4349b3] my-auto 'onClick={()=>setNavOpen(!navOpen)}/>} */}

        {/* Navbar for small screens*/}
        {/* {navOpen && 
        <nav className="sm:hidden flex flex-col font-semibold text-[17px] items-center gap-5 py-5 bg-white z-10">
          <Link to={'/'}>Home</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/blogs'}>Blogs</Link>
          <Link to={'/about'}>About</Link>
        </nav>} */}

       
  

    </div>
  )
}

export default Header
