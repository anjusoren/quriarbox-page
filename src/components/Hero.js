import React from 'react'
import deliveryImage from "../images/transport-image/drawkit-transport-scene-5.svg"
const Hero = () => {
  return (
    <main className=" w-screen h-screen md:w-11/12 pt-3 md:m-auto">
      <div className="pt-3 md:flex md:justify-center md:content-center">
      <section className="md:w-1/2 md:h-screen">
        <img className="w-3/4 h-3/4 m-auto md:w-11/12"
        src={deliveryImage} alt="courier arrived "/>
      </section>
      <section className="w-3/4 m-auto pt-8 md:w-1/2 md:h-3/4 md:ml-8">
        <h1 className="text-3xl md:text-4xl">A trusted provider of</h1>
        <h1 className=" text-3xl font-bold md:text-4xl">courier services.</h1>
        <p className="text-sm pt-1 pb-2 md:pt-2 md:pb-3 md:text-base">We deliver your products safely to your home in a reasonable time.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600
        p-2 md:px-5 md:py-2  text-white rounded"> Get started </button>
      </section>
      
    </div>
    </main>
  )
}

export default Hero
