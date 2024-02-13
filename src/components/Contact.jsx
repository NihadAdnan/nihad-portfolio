import React from 'react'

export default function Contact() {
  return (
    <div  name='contact' className='p-2 sm:w-full md:h-screen bg-[#2A2B2A] text-[#CFCFCF] flex justify-center items-center pt-36 pb-12'>
        <form action="https://getform.io/f/6ffbf7c6-d160-4ee8-9573-419a8977ed18" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
            <p className='text-4xl font-extrabold inline border-b-4 border-[#FFD60A]'>Contact</p>
            <p className='py-6 font-semibold text-xl'>✦ Submit the form provided below, or alternatively, feel free to reach out via email at <a className='hover:underline' href={`mailto:nihad08adnan@gmail.com`}>nihad08adnan@gmail.com </a> ✦</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='bg-[#CFCFCF] p-2 text-black' required/>
            <input type="email" placeholder='Email' name='email' className='bg-[#CFCFCF] my-4 p-2 text-black' required/>
            <textarea name="message" rows="10" placeholder='Message' className='bg-[#CFCFCF] p-2 text-black' required></textarea>
            <button className='text-[#CFCFCF] text-xl border-2 font-bold hover:bg-[#FFD60A]
             hover:border-[#FFD60A]
             hover:text-black font-bold px-4 py-3 my-8 mx-auto flex items-center  '>Let's Collaborate</button>
        </form>
    </div>
  )
}
