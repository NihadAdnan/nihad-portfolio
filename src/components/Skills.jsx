import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/react.png'
import NODE from '../assets/node.png'
import ML from '../assets/ml.jpg'
import GIT from '../assets/github.png'
import MONGO from '../assets/mongo.png'
import PYTHON from '../assets/python.png'
import SQL from '../assets/sql.png'
import EXPRESS from '../assets/express.png'
import PHP from '../assets/php.png'

export default function Skills() {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#2A2B2A] text-[#CFCFCF]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-extrabold inline border-b-4 border-[#FFD60A]'>Skills</p>
                <p className='py-6 font-semibold text-xl'>✦ These are the technologies I've worked with ✦</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="css icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt="js icon"/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT} alt="react icon"/>
                    <p className='my-4'>REACT JS</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={EXPRESS} alt="express icon"/>
                    <p className='my-4'>EXPRESS JS</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MONGO} alt="mongo icon"/>
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NODE} alt="node icon"/>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PYTHON} alt="python icon"/>
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ML} alt="ml icon"/>
                    <p className='my-4'>MACHINE LEARNING</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQL} alt="sql icon"/>
                    <p className='my-4'>MY SQL</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GIT} alt="git icon"/>
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-yellow-500 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PHP} alt="php icon"/>
                    <p className='my-4'>PHP</p>
                </div>
            </div>
        </div>
    </div>
  )
}
