import React from "react";
import CASA from "../assets/casa.png";
import WATCH from "../assets/watch.png";
import SENTIMENT from "../assets/sentiment.webp";
import WET from "../assets/weather.png";
import ROCK from "../assets/rock.png";
import TODO from "../assets/todo.png";

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#2A2B2A] text-[#CFCFCF] pt-24"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-extrabold inline border-b-4 border-[#FFD60A]">
            Projects
          </p>
          <p className="py-6 font-semibold text-xl">
            ✦ Check out some of my recent work ✦
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${CASA})` }}
            className="shadow-lg shadow-yellow-500 group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider px-2">
                CasaCatalyst - Real Estate Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://casa-catalyst-estate.onrender.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Preview
                  </button>
                </a>
                <a
                  href="https://github.com/NihadAdnan/casa-catalyst-realEstate"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${WATCH})` }}
            className="shadow-lg shadow-yellow-500 group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider px-2">
                Watch Wonders - Ecommerce Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ruby-puzzled-chimpanzee.cyclic.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Preview
                  </button>
                </a>
                <a
                  href="https://github.com/NihadAdnan/watch-wonders"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            style={{ backgroundImage: `url(${WET})` }}
            className="shadow-lg shadow-yellow-500 group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover */}
            
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider px-2">
                Weather Detection
              </span>
              <div className="pt-8 text-center">
              <a
                  href="https://nihadadnan.github.io/Weather_Detection/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Preview
                  </button>
                </a>
                <a
                  href="https://github.com/NihadAdnan/Weather_Detection"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${ROCK})` }}
            className="shadow-lg shadow-yellow-500 group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider px-2">
                Rock Paper Scissors
              </span>
              <div className="pt-8 text-center">
              <a
                  href="https://nihadadnan.github.io/rock-paper-scissors/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Preview
                  </button>
                </a>
                <a
                  href="https://github.com/NihadAdnan/rock-paper-scissors/blob/main/rock.html"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            style={{ backgroundImage: `url(${SENTIMENT})` }}
            className="shadow-lg shadow-yellow-500 group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider px-2">
                Sentiment Analysis - Machine Learning Project
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/NihadAdnan/Sentiment_Analysis/blob/main/sentiment_from_tweet.ipynb"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${TODO})` }}
            className="shadow-lg shadow-yellow-500 group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider px-2">
                To-Do List
              </span>
              <div className="pt-8 text-center">
              <a
                  href="https://nihadadnan.github.io/to-do-list/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Preview
                  </button>
                </a>
                <a
                  href="https://github.com/NihadAdnan/to-do-list/blob/main/index.html"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

