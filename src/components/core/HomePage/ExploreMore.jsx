import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighLighText from './HighLighText';
import CourseCard from './CourseCard';

const tabName = [
    "free",
    "New to Coding",
    "Most Popular",
    "Skill paths",
    "Career paths"
]
export default function ExploreMore() {
    const [currentTab, setCurrentTab] = useState(tabName[0]);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCards = (value) => {
        const result = HomePageExplore.find((course) => course.tag.toLowerCase() === value.toLowerCase());

        if (result && result.courses) {
            setCurrentTab(value);
            setCourses(result.courses);
            setCurrentCard(result.courses[0].heading);
        } else {
            // Handle the case where result or result.courses is undefined
            console.error("Invalid result or result.courses");
        }
    };
  return (
    <div className='  ' >
        <div className=" text-4xl md:w-[100%] w-[70%]  mx-auto   font-semibold text-center my-10  ">
          Unlock the
          <HighLighText text={"Power of Code"} />
          <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
        
        <div className='flex md:flex-row flex-col  md:rounded-full bg-richblack-800   mb-5 border-richblack-400 mt-5 px-1 py-1 border-2 ' >
            {
                tabName.map((element,index) => {
                    return (
                        <div className={` text-[16px] flex flex-row items-center f gap-2 ${ currentTab === element ? "bg-richblack-400 text-richblack-5 font-medium " : "text-richblack-400 " } md:rounded-full  transition-all duration-200 cursor-pointer hover:bg-richblue-200 hover:text-richblack-5 md:px-7 md:py-2 p-2  `} key={index} onClick={() => setMyCards(element)} >
                            {element}
                        </div>
                    )
                })
            }
        </div>
        <div className=' h-[150px]  '></div>

        <div className='flex md:flex-row flex-col absolute gap-10 justify-between w-full items-center -ml-[22%] md:translate-y-[-20%] md:translate-x-0 translate-x-[20%] translate-y-[-10%] ' >
            {
                courses.map((element,index) => {
                    return (
                        <CourseCard key = {index} cardData = {element} currentCard = {currentCard} setCurrentCard ={setCurrentCard} />
                    )
                })
            }
        </div>
        
    </div>
  )
}
