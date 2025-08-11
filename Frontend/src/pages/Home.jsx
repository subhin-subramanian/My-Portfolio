
import coverPic from '../assets/images/coverPic.jpg'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import insta from '../assets/images/insta.jpg';
import linkdn from '../assets/images/linkdn.png';
import git from '../assets/images/git.png';
import youtube from '../assets/images/youtube.png';
import { useState } from 'react';

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

    <div className="flex flex-col md:flex-row p-5 px-10 gap-10 mx-auto justify-center min-h-screen items-center">
      <div className="min-w-[220px] sm:min-w-[280px] max-w-xs aspect-square overflow-hidden shadow-2xl rounded-2xl hover:scale-110 transition-all">
        <img src={coverPic} alt="ProfilePic" className='w-full h-full rounded-2xl  ' />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <span className='font-bold text-xl text-blue-500'>Hi, I'm <span className='text-[#060b64] dark:text-white text-3xl'>Subhin.MS</span> starting as a <span className='text-[#060b64] dark:text-white text-3xl'> MERN Stack Developer</span></span>
        <div className="flex gap-4">
          <button onClick={()=>setHireModal(!hireModal)} className='button_1 shadow-xl dark:!border-blue-500'>Hire Me</button>
          <a href='/RESUME.pdf' download className='button_2 shadow-xl dark:!border-blue-500'>Download CV</a>
        </div>
        <p className='text-shadow-lg'>I'm a passionate MERN Stack Developer skilled in building modern, full-stack web applications using MongoDB, Express.js, React, and Node.js. I love solving real-world problems through clean, efficient code and intuitive user interfaces. Currently exploring new technologies and working on personal projects to sharpen my skills.
        Let’s build something great together 👋!
        </p>
        <div className="flex gap-10 text-4xl">
          <span className='text-xl text-blue-500 font-bold flex items-center gap-2'>Find me on other platforms <FaArrowRight /></span>
          <a href='https://github.com/subhin-subramanian' target='_blank' rel='noopener noreferrer'><img src={git} alt="git" className='h-10 rounded-lg'/></a>
          <a href='https://in.linkedin.com/in/subhin-ms-433a54167?trk=people-guest_people_search-card' target='_blank' rel='noopener noreferrer'><img src={linkdn} alt="linkedIn" className='h-10 rounded-xl'/></a>
          <a href='https://www.instagram.com/subhin_ms' target='_blank' rel='noopener noreferrer'><img src={insta} alt="instagram" className='h-10 rounded-xl'/></a>   
          <a href='https://www.youtube.com/@Subhin_Dev' target='_blank' rel='noopener noreferrer'><img src={youtube} alt="youtube" className='h-10 rounded-xl'/></a> 
          
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
