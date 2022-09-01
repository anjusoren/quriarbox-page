import React from 'react'
import map from "./find-us-assets/marker.png"
import marker from "./find-us-assets/002-map.png"
import clock from "./find-us-assets/006-clock.png"
import mail from "./find-us-assets/001-email.png"
import phone from "./find-us-assets/007-telephone.png"
import fbIcon from "./find-us-assets/004-facebook.png"
import instaIcon from "./find-us-assets/003-instagram.png"
import twitterIcon from "./find-us-assets/005-twitter-sign.png"

const FindUs = () => {
  return (
    <div className="pb-10">
      <div className="text-center pb-3 ">
        <h3 className=" font-semibold text-orange-500 text-lg md:text-xl">FIND US</h3>
        <h3 className="font-bold text-xl md:text-2xl ">Access us easily</h3>
      </div>


        <div className="flex flex-col gap-4 md:flex-row
        md:w-3/4 md:m-auto md:justify-evenly md:bg-slate-300">
            <img className="w-3/4 h-3/4 m-auto rounded"
            src={map} alt="Map"/>
            {/* address-section */}
            <div className="pt-3  w-3/4 m-auto md:pl-6">
                <h2 className="text-xl pb-3">Contact with us</h2>
                <div className="flex gap-2 place-items-center pb-2">
                    <img className="h-6 w-6"
                    src={marker} alt="marker"/>
                    <p>2277 Lorem Ave, San Diego, CA 22553</p>
                </div>
                <div className="flex gap-2 place-items-center pb-2">
                    <img className="h-6 w-6"
                    src={clock} alt="clock"/>
                    <div>
                        <p>Monday - Friday : 10 am - 10pm</p>
                        <p>Sunday: 11 am - 9 pm</p>
                    </div> 
                </div>
                <div className="flex gap-2 place-items-center pb-2">
                <img className="h-6 w-6"
                src={mail} alt="mail"/>
                <p>info@quriarbox.com</p>
                </div>

                 {/* social - section */}
            <div className="flex place-items-center gap-2 pb-3">
                <img className="h-6 w-6"
                src={fbIcon} alt="faceboo Icon"/>
                <img className="h-6 w-6"
                 src={instaIcon} alt="instagram icon"/>
                <img className="h-6 w-6"
                src={twitterIcon} alt="twitter icon"/> 
            </div>
            </div>
            
           
        </div>

        {/* footer section */}
        <div className="flex justify-center place-items-center gap-1
        bg-orange-500 hover:bg-orange-600 text-white p-2 w-3/4 m-auto rounded
        md:mt-4 md:m-auto md:w-1/2">
            <img className="h-6 w-6"
            src={phone} alt="phone"/>
            <h3 className="text-normal font-semibold"
            >Call us to delivery 123-456789</h3>
        </div>
    </div>
  )
}

export default FindUs
