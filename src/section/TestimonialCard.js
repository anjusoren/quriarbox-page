import React from 'react'

import {testimonialData} from "./testimonial-asset/testimonialData"


const TestimonialCard = () => {
    const datap = testimonialData.map(data => 
        <div className=" bg-slate-200 drop-shadow-md rounded  p-4">
      <div className="w-72">
        <main> 
        <h1 className="font-semibold text-orange-500
        text-lg">{data.title}</h1>
        <p className="text-gray-500 pt-1">{data.description}</p>
        </main>
        <footer className="pt-2 flex justify-between align-center text-sm">
            <div>
                <h4>{data.rating}
                <span className="text-sm font-light text-orange-400">{" "}star</span></h4>
                
            </div>
            <div className="flex gap-1.5">
                <div className="">
                <h3 className="font-semibold">{data.profile}</h3>
                <h4 className="text-gray-500">{data.designation}</h4>
                </div>
                <img className="w-10 h-10 rounded-full"
                src={data.profilepic} alt="profile pic" />
            </div>
        </footer>
      </div>
    </div>
        )
  return (
    <div className=" ml-8 mr-8
    flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
        {datap}
    </div>
  )
}

export default TestimonialCard
