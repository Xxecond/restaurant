import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {Link} from 'react-scroll';

import bImage from "../assets/meal.webp"

const Home = () => {
  const animate = [
    { id:1, label:"M", delay:"[animation-delay:0s]"},
    { id:2, label:"F", delay:"[animation-delay:0.55s]"},
    { id:3, label:"F", delay:"[animation-delay:1.5s]" },
  ];

  const homeDivider = [
    {id:1, text: "Mallam, Accra" ,icon: FaMapMarkerAlt},
    {id:2, text:"andrewsampadu9@gmail.com", icon: FaEnvelope},
    {id:3, text:"0531467213", icon: FaPhone}
  ];

  return (  
    //homebox
    <section id="home" className="min-h-dvh w-full flex flex-col justify-center items-center text-white
    pt-20 relative
   ">

      <img 
        src={bImage} alt="Delicious meal background" loading="lazy" 
        decoding="async"  
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 " 
      />
     
      {/*branding*/}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70 -z-10"></div>

      <div className=" flex flex-row gap-10 md:gap-9 w-min ">
      
        <h1 className="home-heading text-5xl md:text-6xl font-medium text-left leading-snug">
          MANERS<br />FAST<br /> FOOD
        </h1>
    
        <div className="text-2xl md:text-3xl tracking-widest text-center font-bold md:font-extrabold gap-4 md:gap-8 px-15 md:px-50 flex flex-col
         justify-center leading-loose rounded-xl bg-[rgba(255,255,255,0.2)]
         shadow-[0_0_20px_rgba(75,74,74,0.4)] 
         ">
       
          {animate.map((item)=>(
            <span key={item.id} className={`animate-[color-cycle_10s_infinite] ${item.delay}`}>{item.label}</span>
          ))}
       
        </div>
      </div>
    
      <p className="home-txt text-sm md:text-base font-medium pt-5">
        Call to Place Your Order
        <br />
        <span className="text-xs md:text-sm flex justify-center font-light leading-snug">
          Explore our delicious menu
        </span>
      </p>
      
      <Link
        to="menu"
        smooth={true}
        duration={400}
        className="bg-[#cc3333] mt-5 p-2 text-sm md:text-base rounded-xl font-medium cursor-pointer
             animate-[slow-bounce_2.5s_infinite] hover:bg-[#333] hover:text-[#ffeb3b]"
      >
        Menu
      </Link>

      {/*homeDivider*/}
      <address className='not-italic absolute bottom-0 flex justify-between md:justify-around 
      text-sm font-light leading-tight md:text-base bg-gray-800 w-full'>
       
        {homeDivider.map((item) =>{
          const Icon = item.icon;
          return(
            <span key={item.id} className="flex items-center gap-1">
              <Icon />{item.text}
            </span>
          )
        })}
      </address>
    </section>
  );
};

export default Home;
