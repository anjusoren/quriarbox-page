import React from 'react'
import contactus from "./contact-us-asset/contact-us.webp"

const ContactForm = () => {
  return (
    <div className="w-11/12 m-auto flex justify-center items-center md:w-1/2 md:m-auto 
     pb-20  ">
      {/* left-side */}
      <div>
        <div>
          <img className="w-3/4 h-3/4 md:w-3/4 md:h-1/3"
          src={contactus} alt="contact-us"/>
        </div>
        <div>
            <h3 className="text-base text-orange-500 font-semibold
            md:text-lg">REQUEST A CALLBACK</h3>
            <h4 className="text-lg font-bold md:text-xl">We will contact soon!</h4>
            <p className="text-gray-500">Monday to Friday, 9am-5pm</p>
        </div>
      </div>

      {/* right-side */}
      <form className="flex flex-col gap-2 ">
        <input className="border-2 border-gray-500 hover:border-orange-500 rounded p-1
        md:w-72"
        placeholder="Name"/>
        <input className="border-2 border-gray-500 hover:border-orange-500 rounded p-1"
        placeholder="Email"/>
        <textarea className="border-2 border-gray-500 hover:border-orange-500 rounded p-1
        md:h-20"
         placeholder="Message"/>
        <button className="border-1 bg-orange-500 hover:bg-orange-600 text-white rounded p-1  ">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
