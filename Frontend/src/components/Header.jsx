
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
    <div className='bg-gradient-to-l from-[#d4d7da] h-16 flex flex-row justify-between shadow-sm'>

      {/* Header logo*/}
      <Link to={'/'} className='items-center flex px-5 sm:px-20'><span className='font-bold text-4xl text-shadow-2xs'>Subhin.M.S</span></Link>

      <div className="flex pr-20">
        
        {/* Navbar for large screens*/}
        <nav className="hidden sm:flex gap-15 text-xl font-bold items-center py-3">
          <Link to={'/'}>Home</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/blogs'}>Blogs</Link>
          <Link to={'/services'}>Services</Link>
          <Link to={'/about'}>About</Link>
        </nav>

        {/* Navbar toggle switch for small screens*/}
        {navOpen && <IoMdClose className='sm:hidden text-2xl border-2 p-1  rounded-md text-[#4349b3] my-auto' onClick={()=>setNavOpen(!navOpen)}/>}
        {!navOpen && <FaBars className='sm:hidden text-2xl border-2 p-1  rounded-md text-[#4349b3] my-auto 'onClick={()=>setNavOpen(!navOpen)}/>}

        {/* Navbar for small screens*/}
        {navOpen && 
        <nav className="sm:hidden flex flex-col font-semibold text-[17px] items-center gap-5 py-5 bg-white z-10">
          <Link to={'/'}>Home</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/blogs'}>Blogs</Link>
          <Link to={'/about'}>About</Link>
        </nav>}

        <button className='cursor-pointer my-auto text-xl' onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IoSunnyOutline className='!text-[#060b64]'/>:<IoMoonOutline/>}
        </button>
      </div>

    </div>
  )
}

export default Header
