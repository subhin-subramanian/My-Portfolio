import { services } from "../assets/Assets"
function Services() {
  return (
    <div className='min-h-screen w-full mx-auto text-blue-800 my-5'>
      <h1 className='font-bold text-center py-5 text-shadow-lg font-recursive underline underline-offset-8 decoration-2'>Services Offering</h1>

      {/* Services Cards */}
      <div className="mt-10 dark:text-gray-400 flex flex-col gap-10">

        {services.map((service,index)=>(
          <div key={index} className={`border border-blue-200 rounded-lg p-5 rounded-2xl shadow-lg shadow-blue-200 transition-transform duration-400 hover:scale-105 hover:shadow-xl hover:shadow-indigo-200 w-3/4 mx-auto flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1?"md:flex-row-reverse":""}`}>
            <div className="">
              <h2 className="text-md font-semibold text-center p-3 mt-5 rounded-full italic dark:text-shadow-sm bg-blue-900 text-white">{service.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base p-8">
                {service.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          <img src={service.image} alt="" className="sm:w-1/3 h-60 rounded-lg shadow-md" />
          </div> ))}
        

      </div>
    </div>
  )
}

export default Services
