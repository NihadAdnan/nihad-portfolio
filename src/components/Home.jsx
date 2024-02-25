import { FaArrowRight,FaUserTie } from "react-icons/fa";
import { Link } from 'react-scroll'
import pdf from "../assets/Nihad_Adnan_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#2A2B2A]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FFD60A] py-1 font-bold text-2xl'>Hi, I'm </p>
            <h1 className='text-4xl sm:text-7xl font-extrabold text-[#CFCFCF]'>
              Nihad Adnan Shah
            </h1>
            <h3 className='text-3xl sm:text-6xl font-bold text-[#989898]'>
              A {' '} 
              <span>
                <Typewriter 
                 words={['full stack web developer', 'machine learning enthusiast',]}
                 loop={false}
                 cursor
                 cursorStyle='|'
                 typeSpeed={70}
                 deleteSpeed={50}
                 delaySpeed={1500}/>
              </span>
  
            </h3>
            
            <p className='text-[#989898] py-5 max-w-[700px] text-lg font-semibold'>As a passionate full-stack web developer immersed in MERN stack technologies, I harbor a profound interest in the realm of machine learning.</p>
            <div>

          <div className="flex flex-col gap-3">

          <Link to='projects' smooth={true} duration={700}>
                <button className='text-[#CFCFCF] group text-xl border-2 px-6 py-6 my-2 font-bold flex items-center hover:bg-[#FFD60A]
             hover:border-[#FFD60A]
             hover:text-black font-bold'>View Projects
                <span className='group-hover:rotate-90 duration-300'><FaArrowRight className='ml-3'/></span>
                </button>
                </Link>

                <a href={pdf} target="_blank">
                <button className='text-[#CFCFCF] group text-xl border-2 px-6 py-6 my-2 font-bold flex items-center hover:bg-[#FFD60A]
             hover:border-[#FFD60A]
             hover:text-black font-bold md:hidden'>Resume
                <span><FaUserTie className='ml-3'/></span>
                </button>
                </a>          
             </div>
  

            

  
          
              
            </div>
        </div>
    </div>
  )
}













