import React from 'react'
import HighLighText from './HighLighText'
import img1 from "../../../assets/Images/Know_your_progress.png"
import img2 from "../../../assets/Images/Compare_with_others.png"
import img3 from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './Button'

export default function LearningLanguageSection() {
  return (
    <div className='mt-[130px]  '>
      <div className='flex flex-col gap-5 items-center ' >
      <div className='text-4xl font-semibold text-center'>
      Your swiss knife for
            <HighLighText text={"learning any language"} />
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </div>
      </div>
      <div className='flex md:flex-row flex-col items-center mt-5  ' >
         <img src={img1} alt='know your progress' className='object-contain md:-mr-32   ' />
         <img src={img2} alt='compare with other' className='object-contain' />
         <img src={img3} alt='plan your progress' className='object-contain md:-ml-36 ' />

      </div>
      <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="">Learn More</div>
            </CTAButton>
          </div>
      </div>
    </div>
  )
}
