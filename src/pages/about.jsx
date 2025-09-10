import { Link } from "react-scroll"
import aboutImage from "../assets/serve.jpg"


function About() {
  return (
<div>
      <span id="about" className=
    "absolute left-1/2 -translate-x-1/2 text-white text-base md:text-lg font-medium text-green-900 md:pt-8 pt-4 z-5">ABOUT US
    </span>
  <div className="flex min-h-screen">
    <div className="md:w-1/2 w-screen text-white bg-gray-800 text-center pt-10">
         <p className="px-5 py-15 text-sm md:text-base">
          Welcome to <span className="font-semibold">MANERS FAST FOOD</span>, where food meets passion. 
          Since opening our doors in 2021, we’ve been dedicated to serving authentic Ghanaian dishes 
          made with fresh ingredients, bold flavors, and a touch of home. 
        </p>
<div className="md:flex">
  <div className="md:w-1/2 w-max mx-auto pb-8 md:pb-0"> 
   <h2 className="text-base md:text-lg font-medium mb-4 underline">Working Hours</h2>
      <ul className="space-y-3 text-sm md:text-base">
        <li className="flex items-center gap-2">
          <span className="text-[#ffeb3b]">✔</span>
        Open Daily: 
        <span>8:00 AM – 10:00 PM</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#ffeb3b]">✔</span>
          Dine-In & takeaway: 
        <span>All Day</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#ffeb3b]">✔</span> 
                  Home - Delivery: 
        <span>8:00 AM – 9:30 PM</span>
        </li>
      </ul>
      </div>
    <div className="w-full mx-auto w-max md:w-1/2 md:border-l-2  md:pl-3">
      <h2 className="text-base md:text-lg font-medium mb-4 underline ">Why Choose Us</h2>
      <ul className="space-y-3 text-sm md:text-base">
        <li className="flex items-center gap-2">
          <span className="text-[#ffeb3b]">✔</span> Quick and Reliable Delivery
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#ffeb3b]">✔</span> Friendly & Fast Customer Service
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#ffeb3b]">✔</span> Call Anytime to Place an Order
        </li>
      </ul>
</div>
</div>
<p className="px-5 py-9 text-sm md:text-base">
          Whether you’re here for a quick lunch, family dinner, or group celebration, 
          we strive to create an experience that blends warm hospitality with 
          unforgettable meals. Our chefs bring together tradition and creativity 
          to make every dish special.
        </p>
              <button className
              ="menu-btn block mx-auto py-1 px-4 mb-8 text-sm md:text-base
              font-medium bg-[#cc3333] text-white
              rounded-lg transition-all  cursor-pointer
              hover:bg-[#333] hover:text-[#ffeb3b]">
                <Link to="Contact" smooth={true} duration={400}>Contact Us</Link>
              </button>
        
       </div>
         <div className="hidden md:block w-1/2">
      <img src={aboutImage} alt="about-img" className="w-full h-full object-cover" />
      </div>

  </div>

</div>)}

export default About;