import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithubSquare,
  FaUserTie,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-scroll";
import pdf from "../assets/Nihad_Adnan_Resume.pdf";

export default function Navbar() {
  const [navBar, setNavBar] = useState(false);
  const handleClick = () => setNavBar(!navBar);

  return (
    <div className="relative">
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 z-20 bg-[#2A2B2A] text-neutral-300">
        <Link to="contact" smooth={true} duration={900}>
          <div>
            <img
              src={Logo}
              alt="logo"
              className="lgo"
              style={{ width: "40px" }}
            />
          </div>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex text-xl">
          <li>
            <Link to="home" smooth={true} duration={500}>
              <p className="hover:scale-125 duration-300">Home</p>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
            <p className="hover:scale-125 duration-300">About</p>
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
            <p className="hover:scale-125 duration-300">Skills</p>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
            <p className="hover:scale-125 duration-300">Projects</p>
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
            <p className="hover:scale-125 duration-300">Contact</p>
            </Link>
          </li>
        </ul>

        {/* Hamburger */}

        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!navBar ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}

        <ul
          className={
            !navBar
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#2A2B2A] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-5xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-5xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-5xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-5xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-5xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Socials */}

        <div className="hidden md:flex fixed  flex-col top-[35%] left-0">
          <ul>
            <li className="flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#032174]">
              <a
                className="flex justify-between items-center w-full text-neutral-300"
                href="https://www.linkedin.com/in/nihad-adnan-shah-5b99611b8/"
                target="_blank"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3A5A40]">
              <a
                className="flex justify-between items-center w-full text-neutral-300"
                href="https://github.com/NihadAdnan"
                target="_blank"
              >
                GitHub <FaGithubSquare size={30} />
              </a>
            </li>
            <li className="flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#370617]">
              <a
                className="flex justify-between items-center w-full text-neutral-300"
                href={`mailto:nihad.adnan.shah@g.bracu.bd?subject=&body=`}
                target="_blank"
              >
                E-Mail <MdEmail size={30} />
              </a>
            </li> 
            <li className="flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#495057]">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full text-neutral-300"
              >
                Resume <FaUserTie size={30} />
              </a>
            </li>
            </ul>
            </div>
      
      </div>
    </div>
  );
}
