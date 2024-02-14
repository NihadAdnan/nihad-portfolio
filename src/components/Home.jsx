import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react';

export default function Home() {
  const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const interval = setInterval(() => {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100);
  
        return () => clearInterval(interval);
      }
    }, [text, currentIndex]);
  
    return <span>{displayText}</span>;
  };
  


  return (
    <div name='home' className='w-full h-screen bg-[#2A2B2A]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FFD60A] py-1 font-bold text-lg'>Hi, I'm </p>
            <h1 className='text-4xl sm:text-7xl font-extrabold text-[#CFCFCF]'>
              <Typewriter text='Nihad Adnan Shah'/>
            </h1>
            <h3 className='text-3xl sm:text-6xl font-bold text-[#989898]'>
              <Typewriter text='I am a full stack web developer'/>
            </h3>
            <p className='text-[#989898] py-5 max-w-[700px] text-lg font-semibold'>As a passionate full-stack web developer immersed in MERN stack technologies, I harbor a profound interest in the realm of machine learning.</p>
            <div>
                <Link to='projects' smooth={true} duration={700}>
                <button className='text-[#CFCFCF] group text-xl border-2 px-6 py-6 my-2 font-bold flex items-center hover:bg-[#FFD60A]
             hover:border-[#FFD60A]
             hover:text-black font-bold'>View Projects
                <span className='group-hover:rotate-90 duration-300'><FaArrowRight className='ml-3'/></span>
                </button>
                </Link>
              
            </div>
        </div>
    </div>
  )
}













