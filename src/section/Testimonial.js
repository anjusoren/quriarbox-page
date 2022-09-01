import React from 'react'
import quote from "./testimonial-asset/001-quote.png"
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    
  return (
    <main className="pt-20 pb-10">
        <div className="flex justify-center text-center gap-3">
            <img  className="w-10 h-12" 
            src={quote} alt="quote icon"/>  
            <div className="font-bold ">
                <h1 className="text-orange-500 text-lg md:text-xl">TESTIMONIAL</h1>
                <h3 className="text-xl md:text-2xl">Our Awesome Clients</h3>
            </div>
        </div>
        <div className="pt-10 pb-10 md:w-11/12 m-auto">
        <TestimonialCard/>
        </div>
    </main>
  )
}

export default Testimonial
