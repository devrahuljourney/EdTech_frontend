import React from 'react';
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timeLineImage from "../../../assets/Images/TimelineImage.png"
const timeLine = [
    {
        logo: Logo1,
        heading: "Leadership",
        description: "Fully committed to the success of the company"
    },
    {
        logo: Logo2,
        heading: "Responsibility",
        description: "Students will always be our top priority"
    },
    {
        logo: Logo3,
        heading: "Flexibility",
        description: "The ability to switch is an important skill"
    },
    {
        logo: Logo4,
        heading: "Solve the problem",
        description: "Code your way to a solution"
    }
];

export default function TimeLineSection() {
    return (
        <div>
            <div className='flex md:flex-row flex-col gap-15 items-center mb-[5%] '>
                <div className='md:w-[45%] w-[90%] flex flex-col md:mb-[1%] mb-[10%] gap-5'>
                    {timeLine.map((element, index) => (
                        <div className='flex flex-row gap-6' key={index}>
                            <div className='w-[50px] shadow-[#00000012] shadow-[0_0_62px_0] h-[50px] bg-white flex items-center'>
                                <img src={element.logo} alt={`Logo ${index + 1}`} />
                            </div>
                            <div  >
                                <h2 className='font-semibold text-[18px] '>{element.heading}</h2>
                                <p className='text-base  ' >{element.description}</p>

                            </div>
                            
                            <div
                  className={`hidden ${
                    timeLine.length - 1 === index ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
                        </div>
                        
                    ))}
                </div>

                <div className=' relative shadow-blue-200  ' >
                <img className='shadow-white object-cover h-fit md:w-full w-[90%] mx-auto ' src={timeLineImage} alt='timeline image' />
                <div className='absolute bg-caribbeangreen-700 flex flex-row py-5 text-white uppercasepy-10 left-[50%] translate-x-[-50%] translate-y-[-50%] ' >
                    <div className='flex flex-row gap-5 items-center  border-r border-caribbeangreen-300 px-7 ' >
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300 text-sm ' >Years of Experience</p>
                    </div>
                    <div className='flex gap-5 items-center px-7'>
                    <p className='text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm ' >Type of Courses</p>         
                    </div>
                </div>
            </div>
            </div>



            
        </div>
    );
}
