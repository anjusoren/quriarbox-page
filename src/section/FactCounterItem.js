import React from 'react'


const FactCounterItem = ({icon,count,content}) => {
  return (
    <div className="flex flex-col justify-center w-1/5 m-auto">
      <div className="w-6 h-7">
        <img src={icon} alt=""/> </div>
        <h3 className="text-orange-500 font-bold text-xl">{count}</h3>
        <h3 className="text-normal block text-small">{content}</h3>
     
    </div>
  )
}

export default FactCounterItem
