import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper/modules'

import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={2}
          loop={true}
        spaceBetween={200}
        navigation={true}
        autoplay ={{
          delay:2000,
          disableOnInteraction:false,
        }}
        pagination={{
          clickable: true,
        }}
          modules={[Autoplay,FreeMode, Pagination, Navigation]}
          // breakpoints={{
          //   2: {
          //     slidesPerView: 3,
          //   },
          // }}

          
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
