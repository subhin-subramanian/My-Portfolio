import { about } from '../assets/Assets'

function About() {
  return (
    <div className='min-h-screen w-3/4 mx-auto my-5 sm:my-10'>
       <h1 className='!text-4xl sm:!text-5xl font-bold text-center py-5 text-shadow-lg font-recursive underline underline-offset-8 decoration-2'>My Journey Upto Now</h1>
       
       {/* For smaller screens */}
       <div className="md:hidden flex flex-col gap-5 my-5"> 
          {about.map((milestone,index)=>(
            <div key={index} className='flex items-center'>
              {/* card */}
              <div className='p-6 bg-white border-t border-gray-200 dark:bg-gray-800 shadow-lg dark:shadow-white dark:shadow-md rounded-2xl' >
              <h3 className='text-xl font-semibold text-shadow-lg flex items-center'><img src={milestone.icon} alt="icon" className='inline-block mr-2 h-5' />{milestone.title}</h3>
              <p className='mt-2'>{milestone.description}</p>
              </div>
            </div> ))}
       </div>

       {/* For bigger screens */}
       <div className="hidden md:block relative my-10">
        {/* Center line */}
        <div className="absolute top-0 left-1/2 h-full border border-3 rounded border-blue-500 -translate-x-1/2 "></div>

        <div className="flex flex-col gap-10"> 
          {about.map((milestone,index)=>(
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              {/* card */}
              <div className={`w-5/12 p-6 bg-white dark:bg-gray-800 border-t border-gray-200 shadow-lg dark:shadow-white dark:shadow-md rounded-2xl ${index%2 === 0 ? "mr-12" : "ml-12"}`} >
              <h3 className='text-xl font-semibold text-shadow-lg'>{milestone.title}</h3>
              <p className='mt-2'>{milestone.description}</p>
              </div>
              {/* icons */}
              <img src={milestone.icon} alt="icon" className='absolute left-1/2 w-12 h-12 bg-white p-1 rounded -translate-x-1/2' />
            </div> ))}
        </div>

       </div>
  
    </div>
  )
}

export default About
