import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import {icons} from '../assets/Assets';

function Home() {

  const [hireModal,setHireModal] = useState(false);
  const [hireData,setHandleHireData] = useState({});
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [hireSuccess,setHireSuccess] = useState(null);

  // Function to handle hire me button
  const handleHireSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.target);
    try {
      const res = await fetch("https://formspree.io/f/mldnnezy",{
        method:'POST',
        headers:{Accept:"application/json"},
        body:formData
      })
      if(res.ok){
        setHireSuccess('Message sent successfully')
        setError('')
        setLoading(false)
        setTimeout(() => {
          setHireSuccess(null);
        }, 3000);
        setTimeout(() => {
          setHireModal(false);
        }, 5000); 
      }else{
        setError('Failed to send the message');
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (

    <div className="min-h-screen mx-auto p-5 md:p-10 flex flex-wrap items-center justify-center">
      {/* Hero Section */}  
      <div className="max-w-6xl flex flex-col md:flex-row gap-10 justify-center items-center ">
        <div className="w-60 lg:w-250 max-w-[300px] shadow-lg shadow-[#060b64] rounded-full hover:scale-110 
        transition-all duration-300 border-[#060b64]  border-2 p-1">
          <img src={icons.coverPic} alt="ProfilePic" className='w-full h-full rounded-full' />
        </div>
        <div className="flex flex-col gap-10 items-center justify-center">
          <span className='text-center text-xl text-blue-500 tracking-widest'>Hi, I'm <span className='text-[#060b64] dark:text-white text-4xl font-recursive'>Subhin.MS</span> starting as a <span className='text-[#060b64] dark:text-white text-3xl font-recursive'> MERN Stack Developer</span></span>
          <div className="flex gap-4">
            <button onClick={()=>setHireModal(!hireModal)} className='button_1 shadow-md shadow-blue-500 dark:!border-blue-500'>Hire Me</button>
            <a href='/RESUME.pdf' download className='button_2 dark:!border-blue-500 shadow-md shadow-blue-500 no-hover'>Download CV</a>
          </div>
          
          <div className="flex flex-wrap gap-6 text-4xl">
            <span className='text-[15px] text-blue-500 flex items-center gap-2  lg:tracking-widest'>Find me on other platforms <FaArrowRight /></span>

            <a href='https://github.com/subhin-subramanian' target='_blank' rel='noopener noreferrer'>
             <div className="border-2 border-[#060b64] rounded-full p-1">
              <img src={icons.git} alt="git" className='h-5 md:h-10 rounded-full shadow-lg dark:border shadow-blue-500'/>
             </div> 
            </a>
            
            <a href='https://in.linkedin.com/in/subhin-ms-433a54167?trk=people-guest_people_search-card' target='_blank' rel='noopener noreferrer'>
            <div className="border-2 border-[#060b64] rounded-full p-1">
              <img src={icons.linkdn} alt="linkedIn" className='h-5 md:h-10 rounded-full shadow-lg dark:border shadow-blue-500'/>
            </div>
            </a>
            
            <a href='https://www.instagram.com/subhin_ms' target='_blank' rel='noopener noreferrer'>
            <div className="border-2 border-[#060b64] rounded-full p-1">
              <img src={icons.insta} alt="instagram" className='h-5 md:h-10 rounded-full shadow-lg dark:border shadow-blue-500'/>
            </div>
            </a>  

            <a href='https://www.youtube.com/@Subhin_Dev' target='_blank' rel='noopener noreferrer'>
            <div className="border-2 border-[#060b64] rounded-full p-1">
              <img src={icons.youtube} alt="youtube" className='h-5 md:h-10 rounded-full shadow-lg dark:border shadow-blue-500'/>
            </div>
            </a>

          </div>

        </div>
      </div>

      {/* Skills Section */}
      <div className="overflow-hidden dark:bg-gray-100 py-4 mask-fade pause-on-hover">
        <div className="flex gap-10 animate-ribbon">
          {/* First set of icons */}
          <img src={icons.chatgpt} alt="chatgpt" className='home_band_icons'/>
          <img src={icons.cloudinary} alt="cloudinary" className='home_band_icons'/>
          <img src={icons.mongoose} alt="mongoose" className='home_band_icons'/>
          <img src={icons.node_icon} alt="node" className='home_band_icons'/>
          <img src={icons.razorpay} alt="razorpay" className='home_band_icons'/>
          <img src={icons.react_icon} alt="react" className='home_band_icons'/>
          <img src={icons.redux} alt="redux" className='home_band_icons'/>
          <img src={icons.vs} alt="vs" className='home_band_icons'/>
          <img src={icons.express_icon} alt="express" className='home_band_icons'/>
          <img src={icons.git_icon} alt="git" className='home_band_icons'/>
          <img src={icons.github} alt="github" className='home_band_icons'/>
          <img src={icons.js_icon} alt="js" className='home_band_icons'/>
          <img src={icons.json_icon} alt="json" className='home_band_icons'/>
          <img src={icons.mongodb} alt="mongodb" className='home_band_icons'/>
          <img src={icons.render_icon} alt="render" className='home_band_icons'/>
          <img src={icons.netlify} alt="netlify" className='home_band_icons'/>
        </div>
      </div>


      {hireModal && 
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm'>
          <div className="bg-white dark:bg-[#060b64] p- rounded-lg shadow-lg w-full max-w-md">
             <button onClick={()=>setHireModal(false)} className="text-gray-500 hover:text-black text-3xl ">&times;</button>
              <h2 className='text-3xl font-bold text-center'>Hire Me</h2>
              
            <form className='p-7 flex flex-col gap-3' onSubmit={handleHireSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name">Company / Person Name</label>
                <input type="text" id='name' name='name' placeholder='Enter name' className='dark:text-[#060b64]' onChange={(e)=>setHandleHireData({...hireData,[e.target.id]:e.target.value})}/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="contact">Contact Details</label>
                <input type="text" id='contact' name='contact' placeholder='Enter Email/Phone' className='dark:text-[#060b64]' onChange={(e)=>setHandleHireData({...hireData,[e.target.id]:e.target.value})}/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Type Message here</label>
                <textarea name="message" id="message" placeholder='Message' maxLength='500' className='h-40 dark:text-[#060b64]' onChange={(e)=>setHandleHireData({...hireData,[e.target.id]:e.target.value})}/>
              </div>
              <button className='bg-[#060b64] text-white hover:opacity-80 dark:border' type='submit'>{loading ? 'Sending' :'Submit'}</button>
              {error && <span className='bg-red-200 text-red-500 py-1 rounded-lg text-center'>{error}</span>}
              {hireSuccess && <span className='bg-green-200 text-green-600 py-1 rounded-lg text-center'>{hireSuccess}</span>}
            </form>

          </div>        
        </div>}

    </div>
  )
}

export default Home
