import { useState } from "react";
import { projects } from '../assets/Assets.js';
import ProjectCard from "../components/ProjectCard.jsx";

function Projects() {
  const [category,setCategory] = useState('all');

  const handleCategoryChange=(e)=>{
    setCategory(e.target.value)
  }
  
  return (
    <div className='min-h-screen px-5 md:px-10 lg:px-20 py-5 sm:py-10 flex flex-col gap-5 sm:gap-10'>
      <h1 className='!text-4xl sm:!text-5xl font-bold text-center py-5 text-shadow-lg font-recursive underline underline-offset-8 decoration-2'>My Projects</h1>

      {/* Category selection for large screens */}
      <div className="hidden md:flex flex-col sm:flex-row justify-center gap-5 text-xs">
        <button value='all' onClick={handleCategoryChange} className={`${category === 'all' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>All</button>
        <button onClick={handleCategoryChange} value='HCJ' className={`${category === 'HCJ' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>HTML,CSS,JavaScript</button>
        <button onClick={handleCategoryChange} value='R&T' className={`${category === 'R&T' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>React & Tailwind CSS</button>
        <button onClick={handleCategoryChange} value='MERN' className={`${category === 'MERN' ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' : 'bg-white border border-blue-500 text-blue-500'}`}>MERN Stack</button>
      </div>

      {/* Category selection for small screens */}
      <div className="flex md:hidden items-center gap-3 justify-center">
        <label htmlFor="category_name" className="text-sm font-bold">Category:</label>
        <select id="category_name" name="category_name" onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value="HCJ">HTML,CSS,JavaScript</option>
          <option value="R&T">React & Tailwind CSS</option>
          <option value="MERN">MERN Stack</option>
        </select>
      </div>

      {/* Project cards for all categories */}
      {category === 'all' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 place-items-center">
          {projects.map((project) => {
            return <ProjectCard key={project._id} project={project} />
          })}
        </div>
      )}
      {/* Project cards for HCJ category */}
      {category === 'HCJ' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 place-items-center">
          {projects.filter(project => project.category === 'HCJ').map((project) => {
            return <ProjectCard key={project._id} project={project} />
          })}
        </div>
      )}
      {/* Project cards for R&T category */}
      {category === 'R&T' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 place-items-center">
          {projects.filter(project => project.category === 'R&T').map((project) => {
            return <ProjectCard key={project._id} project={project} />
          })}
        </div>
      )}
      {/* Project cards for MERN category */}
      {category === 'MERN' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 place-items-center">
          {projects.filter(project => project.category === 'MERN').map((project) => {
            return <ProjectCard key={project._id} project={project} />
          })}
        </div>
      )}
    </div>
  )
}

export default Projects
