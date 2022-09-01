import React from 'react'
import FactCounterItem from './FactCounterItem'
import award from "./counter-images/003-trophy.png"
import map from "./counter-images/002-placeholder.png"
import man from "./counter-images/004-man.png"
import truck from "./counter-images/001-truck.png"
import briefcase from "./counter-images/005-briefcase.png"

const FactCounter = () => {
  return (
    <div className="grid grid-cols-5 w-11/12 m-auto md:w-3/4 md:m-auto md:gap-4">
      <FactCounterItem icon={award} count="26+" content="Awards won"/>
      <FactCounterItem icon={map} count="65+" content="States covered"/>
      <FactCounterItem icon={man} count="689K+" content="Happy Clients"/>
      <FactCounterItem icon={truck} count="130M+" content="Goods delivered"/>
      <FactCounterItem icon={briefcase} count="26+" content="Business hours"/>
    
    </div>
  )
}

export default FactCounter
