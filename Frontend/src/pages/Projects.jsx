import { useState } from "react"
import image from '../assets/images/about.webp'

function Projects() {
  const [category,setCategory] = useState('all');
  console.log(category);
  

  const handleCategoryChange=(e)=>{
    setCategory(e.target.value)
  }
  return (
    <div className='min-h-screen'>
      <h1 className='font-bold text-center py-5 text-shadow-lg'>My Projects</h1>

      {/* Category selection for large screens */}
      <div className="hidden md:flex flex-col sm:flex-row justify-center gap-5 text-xs">
        <button value='all' onClick={handleCategoryChange} className={`${category === 'all' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>All</button>
        <button onClick={handleCategoryChange} value='HCJ' className={`${category === 'HCJ' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>HTML,CSS,JavaScript</button>
        <button onClick={handleCategoryChange} value='R&T' className={`${category === 'R&T' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>React & Tailwind CSS</button>
        <button onClick={handleCategoryChange} value='MERN' className={`${category === 'MERN' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>MERN Stack</button>
        <button onClick={handleCategoryChange} value='git' className={`${category === 'git' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>Git</button>
      </div>

      {/* Category selection for samll screens */}
      <div className="flex md:hidden items-center gap-3 justify-center">
        <label htmlFor="category_name" className="text-sm font-bold">Category:</label>
        <select id="category_name" name="category_name" onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value="HCJ">HTML,CSS,JavaScript</option>
          <option value="R&T">React & Tailwind CSS</option>
          <option value="MERN">MERN Stack</option>
          <option value="git">Git</option>
        </select>
      </div>

      {/* Project cards */}
        {(category==='all' || category==='HCJ') && 
        <div className="p-5 md:p-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          <div className="border-2 p-3 w-80 sm:w-70 md:w-80 lg:max-w-[20em] rounded-lg flex flex-col gap-4">
            <img src={image} alt="Project_image" className="w-90 h-50 rounded-lg" />
            <span className="font-bold text-xl">Card Title</span>
            <span className="border rounded-3xl w-52 px-2 text-green-500">HTML,CSS,JavaScript</span>
            <p className="text-sm">A webiste for a computer shop which always do the installation and manintenance of survelience systems. (This same project is elaborated for the client to make a fully fledged e-commerce MERN Stack app for computer sales)</p>
            <div className="flex gap-4 py-4 justify-center">
              <a id="card_button" className="dark:!border-white">Video Demo</a>
              <a id="card_button" className="dark:!border-white">GitHub</a>
              <a id="card_button" className="dark:!border-white">Go Live</a>
            </div>
          </div>

          <div className="border-2 p-3 w-80 sm:w-70 md:w-80 lg:max-w-[20em] rounded-lg flex flex-col gap-4">
            <img src={image} alt="Project_image" className="w-90 h-50 rounded-lg" />
            <span className="font-bold text-xl">Card Title</span>
            <span className="border rounded-3xl w-52 px-2 text-green-500">HTML,CSS,JavaScript</span>
            <p className="text-sm">A webiste for a computer shop which always do the installation and manintenance of survelience systems. (This same project is elaborated for the client to make a fully fledged e-commerce MERN Stack app for computer sales)</p>
            <div className="flex gap-4 py-4 justify-center">
              <a id="card_button" className="dark:!border-white">Video Demo</a>
              <a id="card_button" className="dark:!border-white">GitHub</a>
              <a id="card_button" className="dark:!border-white">Go Live</a>
            </div>
          </div>

          <div className="border-2 p-3 w-80 sm:w-70 md:w-80 lg:max-w-[20em] rounded-lg flex flex-col gap-4">
            <img src={image} alt="Project_image" className="w-90 h-50 rounded-lg" />
            <span className="font-bold text-xl">Card Title</span>
            <span className="border rounded-3xl w-52 px-2 text-green-500">HTML,CSS,JavaScript</span>
            <p className="text-sm">A webiste for a computer shop which always do the installation and manintenance of survelience systems. (This same project is elaborated for the client to make a fully fledged e-commerce MERN Stack app for computer sales)</p>
            <div className="flex gap-4 py-4 justify-center">
              <a id="card_button" className="dark:!border-white">Video Demo</a>
              <a id="card_button" className="dark:!border-white">GitHub</a>
              <a id="card_button" className="dark:!border-white">Go Live</a>
            </div>
          </div>
      
        </div>
        }

    </div>
  )
}

export default Projects
