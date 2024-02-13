import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#2A2B2A] text-[#CFCFCF]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-extrabold inline border-b-4 border-[#FFD60A]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-semibold">
            <p>
              Welcome to my digital haven! Delighted to have you here. Feel free
              to explore the website and join me
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">
              I am passionate about building softwares that improves lives
              around me. My area of expertise is building websites with the MERN stack. what would you do if you had a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
