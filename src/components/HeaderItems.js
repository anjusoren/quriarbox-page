import React from 'react'

const HeaderItems = ({names}) => {
     return (
    <div className="">
        <li className="text-xl p-4 hover:text-orange-500 font-light">{names}</li>
   </div>
  )
}

export default HeaderItems
