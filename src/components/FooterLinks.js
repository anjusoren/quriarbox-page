import React from 'react'

const FooterLinks = () => {
  return (
   <div className="bg-slate-700 ">
     <div className="p-5 flex flex-col gap-4
        md:flex-row md:justify-between md:w-3/4 md:m-auto ">
      <div className="">
        <h1 className="text-orange-500 text-2xl">Quriarbox</h1>
        <p className="text-sm text-gray-500">The most trusted Courier company in your area.</p>
      </div>

      <div className="flex justify-between md:gap-4">
        <div>
            <h2 className="text-lg text-white">Other links</h2>
            <ul className="text-base text-gray-500">
                <li>Blogs</li>
                <li>Movers website</li>
                <li>Traffic Update</li>
            </ul>
        </div>

        <div>
            <h2 className="text-lg text-white">Services</h2>
            <ul className="text-base text-gray-500">
                <li>Corporate goods</li>
                <li>Artworks</li>
                <li>Documents</li>
            </ul>
        </div>

        <div>
            <h2 className="text-lg text-white">Customer Care</h2>
            <ul className="text-base text-gray-500">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Get Update</li>
            </ul>
        </div>
      </div>
    </div>

   </div>
    )
}

export default FooterLinks
