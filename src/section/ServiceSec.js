import React from 'react'
import ServiceCards from './ServiceCards'
import briefcase from "./service-images/002-briefcase.png"
import homeIcon from "./service-images/001-shop.png"
import bagIcon from "./service-images/003-school-bag.png"

const ServiceSec = () => {
  return (
    <section className='pt-12 md:pt-1'>
        <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-500 
            md:text-4xl md:pb-2">SERVICES</h3>
            <h3 className="text-2xl font-bold md:text-2xl md:pb-2">Our services for you</h3>
        </div>
        <div className="p-8 md:flex md:gap-8 md:w-10/12 md:m-auto">
        <ServiceCards 
        icon={briefcase}
        title="Business Services"
        para="We give you completely reliable delivery of goods.
        We will take full responsibility of the deliveries."
        item1="Corporate goods"
        item2="Shipment"
        item3="Accesories"
        />
        <ServiceCards 
        icon={homeIcon}
        title="Statewide Services"
        para="Offering home delivery around the city, where
        your products will be at your doorstep within 48-72 hours."
        item1="Personal items"
        item2="Parcels"
        item3="Documents"
        />
        <ServiceCards
        icon={bagIcon}
        title="Personal Services"
        para="You can trust us to safely deliver your most sensitive
        documents to the specific area in a short time."
        item1="Gifts"
        item2="Package"
        item3="Documents"
        />
        </div>
    </section>
  )
}

export default ServiceSec
