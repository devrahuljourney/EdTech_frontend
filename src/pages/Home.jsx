import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import HighLighText from '../components/core/HomePage/HighLighText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import { TypeAnimation } from 'react-type-animation';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import '../App.css';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/common/ReviewSlider';

export default function Home() {
  return (
    <div>
        {/* section 1 */}

        <div className='relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-center 
              ' >
            <Link to={"/signup"} > 
               <div className=' mx-auto rounded-full mt-16 p-1 bg-richblack-800 font-bold group text-richblack-200 transition-all duration-200 hover:scale-95 w-full shadow-sm shadow-richblack-200   ' >
                 <div className='flex flex-row  items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 '>
                    <p>Become an Instructor  </p>
                    <FaArrowRight/>
                 </div>
               </div>
             </Link>
             <div className='text-center text-4xl mt-7 font-semibold  ' >
                Empower Your Future with <HighLighText text = {"Coding Skills"} />
             </div>
             <div className=' w-[90%] text-center text-lg font-bold text-richblack-300 mt-4 ' >
             With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a 
              wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
             </div>

             <div className='flex flex-row gap-7 mt-8' >
                <CTAButton active={true} linkto={"/signup"} >Learn More </CTAButton>
                <CTAButton active={false} linkto={"/login"}> Book a Demo</CTAButton>
             </div>

             <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

               {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighLighText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 gradientone absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighLighText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        <ExploreMore/>
        </div>
        <div className='h-[750px] md:h-0 ' ></div>
        {/* section 2 */}
        <div className=' bg-pure-greys-5 text-richblack-700   mt-[8%]  '>
          <div className=' homepage_bg h-[310px] ' >

            <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-5 mx-auto   '>
               <div className='h-[150px]' ></div>
               <div className='flex flex-row gap-7 text-white'> 
                <CTAButton active={true} linkto={"/signup"} >
                  <div className='flex flex-row gap-3 items-center'>
                     Explore full Catalog
                     <FaArrowRight/>
                  </div>
                </CTAButton>
                <CTAButton active={false} linkto={"/login"} >
                  <div>
                     Learn more
                  </div>
                </CTAButton>
               </div>
            </div>
          </div>

          <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7 '>
            <div className='flex md:flex-row flex-col gap-5 mb-10  mt-[95px] md:justify-start md:items-start justify-center items-center md:text-start text-center ' >
               <div className='text-4xl font-semibold'>
                  Get the Skills you need for a <HighLighText text = {"Job that is in demand"} />
               </div>
               <div className='flex flex-col gap-10 md:w-[40%] w-full md:items-start items-center '>
                   <p className='text-[16px]'>The modern StudyNotion is the dictates its own terms. Today, to be a 
competitive specialist requires more than professional skills</p>
                     <CTAButton active={true} linkto={"/signup"} > Learn more </CTAButton>
               </div>
          </div>
          <TimeLineSection/>
            <LearningLanguageSection/>
            </div>

            
            
        </div>
        {/* section 3 */}
        <div className=' w-11/12 mx-auto max-w-maxContent flex-col justify-between gap-8 bg-richblack-900 text-white items-center   ' >
          <InstructorSection/>
          <h2 className=' text-center text-4xl font-semibold mt-10 '>Review from other learner</h2>
          {/* ReviewSlider */}
          <ReviewSlider/>
        </div>
        {/* footer */}
        <Footer/>
    </div>
  )
}
