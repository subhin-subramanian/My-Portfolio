
function ProjectCard({ project }) {
  return (
    <div className="shadow-lg p-3 sm:p-5 w-80 sm:w-100 h-140 rounded-lg flex flex-col gap-4">
      <img src={project.image} alt="Project_image" className="w-full max-h-50 rounded-lg shadow-sm" />
      <span className="font-bold text-xl h-15">{project.title}</span>
      <span className="border rounded-3xl p-1 text-green-500 text-center tracking-wider">{project.tools}</span>
      <p className="text-sm h-25 leading-6">{project.description}</p>
      <div className="flex gap-4 py-4 justify-center">
        <a id="card_button" className="dark:!border-white !rounded-full" target="_blank" rel="noopener noreferrer"  href={project.video_link}>Video Demo</a>
        <a id="card_button" className="dark:!border-white !rounded-full" target="_blank" rel="noopener noreferrer"  href={project.github_link}>GitHub</a>
        <a id="card_button" className="dark:!border-white !rounded-full" target="_blank" rel="noopener noreferrer"  href={project.live_link}>Go Live</a>
      </div>
    </div>
  )
}

export default ProjectCard;
