import insta from '../assets/images/insta.jpg';
import linkdn from '../assets/images/linkdn.png';
import git from '../assets/images/git.png';
import youtube from '../assets/images/youtube.png';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className="">

      <div className='flex flex-col md:flex-row gap-15 px-10 py-5 border-t-5 rounded-xl justify-between'>

        <div>
          <h2 className='font-bold'>Address</h2>
          <ul className='text-sm sm:text-base mt-2'>
            <li>Moorthattil House, PO Nannammukku South,</li>
            <li>Pin Code:679575, Malappuram District,</li>
            <li>Kerala-India.</li>
          </ul>
        </div>

        <div>
          <h2 className='font-bold'>Contact Me</h2>
          <ul className='text-sm sm:text-base mt-2'>
            <li className='flex items-center gap-3'><FaPhone className='text-xs'/>+91 9645283333</li>
            <li className='flex items-center gap-3'><FaWhatsapp className='text-xs'/>+91 9645283333</li>
            <li className='flex items-center gap-3'><MdEmail className='text-xs'/>subhinsubramanian@gmail.com</li>
          </ul>
        </div>

        <div className="">
          <span className='font-bold text-xl flex mb-5'>Socials</span>
          <div className="flex gap-5">
            <a href='https://github.com/subhin-subramanian' target='_blank' rel='noopener noreferrer'><img src={git} alt="git" className='h-10 rounded-lg'/></a>
            <a href='https://in.linkedin.com/in/subhin-ms-433a54167?trk=people-guest_people_search-card' target='_blank' rel='noopener noreferrer'><img src={linkdn} alt="linkedIn" className='h-10 rounded-xl'/></a>
            <a href='https://www.instagram.com/subhin_ms' target='_blank' rel='noopener noreferrer'><img src={insta} alt="instagram" className='h-10 rounded-xl'/></a>   
            <a href='https://www.youtube.com/@Subhin_Dev' target='_blank' rel='noopener noreferrer'><img src={youtube} alt="youtube" className='h-10 rounded-xl'/></a>  
          </div>
        </div>

      </div>

      <p className='flex items-center gap-1 text-blue-500 dark:text-white text-xs italic font-semibold justify-center pb-3 text-shadow-2xs'><MdCopyright/>Copyrights reserved for subhinMS@2025</p>

    </div>
  )
}
export default Footer
