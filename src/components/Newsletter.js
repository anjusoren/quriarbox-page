  import React from 'react'
  
  const Newsletter = () => {
    return (
      <div className="bg-slate-900">
        <div className=" p-5 flex flex-col gap-4 
        md:flex-row md:w-3/4 md:m-auto">
        <div className="text-white">
            <h3 className="text-xl">Get an update every week</h3>
            <p className="text-sm text-gray-500
            md:w-1/2">We ensure that your product is delivered in the 
            safest possible manner, at the correct location,
            at the right time.</p>
        </div>
        <div className="flex flex-col gap-1">
           <h3 className="text-orange-500">SUBSCRIBE TO NEWSLETTER</h3> 
           <div className="flex gap-2">
            <input className="bg-slate-900 text-white border-2 rounded border-gray-500
            p-2"
            placeholder="Enter your email"/>
            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded pl-3 pr-3">Subscribe</button>
           </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default Newsletter
  