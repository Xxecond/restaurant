
import {Link} from 'react-scroll';

const Home = () => {
  const animate = [
    { id:1, label:"M", delay:"[animation-delay:0s]"},
  { id:2, label:"F", delay:"[animation-delay:0.55s]"},
{id:3, label:"F", delay:"[animation-delay:1.5s]" },
];

const homeDivider = [
  {id:1, text: "Mallam, Accra" ,icon:"fas fa-location-dot"},
  {id:2, text:"andrewsampadu9@gmail.com", icon:"fas fa-envelope"},
  {id:3, text:"0531467213", icon:"fas fa-phone"}
];

  return (  
    //homebox
    <div className
    ="min-h-screen w-full
    bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('./assets/meal.png')] 
    bg-cover bg-center flex flex-col justify-center items-center text-white
    pt-20 relative
   ">
    <div className
    =" flex flex-row gap-6 md:gap-9 w-min justify-around">
    
        <h1 className
        ="home-heading text-6xl md:font-medium text-left leading-snug font-[tahoma]">MANERS<br />FAST<br /> FOOD</h1>
    
        <div className 
        ="text-2xl text-center font-bold md:font-extrabold gap-8 px-15 md:px-50 flex flex-col
         justify-center leading-loose rounded-xl bg-[rgba(255,255,255,0.2)]
         shadow-[0_0_20px_rgba(75,74,74,0.4)] 
         ">
       
          {animate.map((item)=>(
            <span key={item.id} className={`animate-[color-cycle_10s_infinite] ${item.delay}`}>{item.label}</span>
          ))}
       
          </div>
      </div>
    
      <h6 className=
      "home-txt text-sm md:text-base font-medium pt-5">
        Call to Place Your Order
        <br />
      
        <span className
        ="text-xs md:text-sm flex justify-center font-light leading-snug">Explore our delicious menu</span>
      </h6>
      
      <Link
  to="menu"
  smooth={true}
  duration={400}
  className="bg-[#cc3333] mt-5 p-2 text-sm md:text-base rounded-xl font-medium cursor-pointer
             animate-[slow-bounce_2.5s_infinite] hover:bg-[#333] hover:text-[#ffeb3b]"
>
  Menu
</Link>

      <div className
      ='home-divider absolute bottom-0 flex justify-around 
      text-sm md:text-base bg-black w-full'>
       
        {homeDivider.map((item) =>(
<div key={item.id}>
  <i className={item.icon}></i>{item.text}</div>
       ))}

</div>
    </div>
  );
};

export default Home;
