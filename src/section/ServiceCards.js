import React from 'react'

const ServiceCards = ({icon,title,para,item1,item2,item3}) => {
  return (
   <div className="w-11/12 md:h-1/3  m-auto pb-8 md:flex md:gap-4 ">
     <div className="bg-slate-200 p-3 flex flex-col justify-self-center mt-1
                    rounded shadow-xl ">
        <div className="flex justify-center mt-1" >
            <div className="w-8 h-8 bg-orange-400 rounded-full relative "></div>
            <div><img src={icon} alt="" className="w-8 h-8 absolute -mx-4 -my-0.1"></img></div>
        </div>
        <h2 className="text-center font-bold text-lg mt-3">{title}</h2>

        <div className="text-justify w-10/12 m-auto text-gray-500 pb-3">
        <p className="mt-3">{para}</p>
        <ul className="list-disc ml-4 mt-3 marker:text-orange-500">
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
        </ul>
        </div>
        <button className="border-2 rounded border-orange-500 
        w-1/3 m-auto p-2 hover:text-white hover:bg-orange-500">Learn more</button>
    </div>
   
   </div>
  )
}

export default ServiceCards
