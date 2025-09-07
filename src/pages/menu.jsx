import {useState} from 'react';
import {Link} from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

import dishCover from '../assets/food.jpg';

import jollof from '../assets/jollof.jpg';
import indomie from '../assets/noodles.jpg';
import friedrice from '../assets/friedRice.jpg';
import waakye from '../assets/waakye.jpg';
import kenkey  from '../assets/kenkey.jpg';
import beans  from '../assets/bean.jpg';

import coke from '../assets/coke.jpg';
import malt from '../assets/malt.jpg';
import guinness from '../assets/guinn.jpg';
import hennessy from '../assets/henn.jpg';
import smirnoff  from '../assets/smirn.jpg';
import redBull  from '../assets/red.jpg';

const Menu = () => {
  
  const [showBeverages, setShowBeverages] = useState(false);
 
  const dishes = [
    { name: "Assorted Rice", price: "GH₵50", image: friedrice },
    { name: "Waakye Rice", price: "GH₵75", image: waakye },
    { name: "Assorted Jollof", price: "GH₵75", image: jollof },
    { name: "Indomie Special", price: "GH₵60", image: indomie },
    { name: "Beans and Plantain", price: "GH₵60", image: beans },
    { name: "Kenkey and Fish", price: "GH₵60", image: kenkey },
  ];

  const beverages= [
    { name: "Coke", price: "GH₵15", image: coke },
    { name: "Guinness", price: "GH₵35", image: guinness },
    { name: "Malt", price: "GH₵30", image: malt },
    { name: "Redbull", price: "GH₵30", image: redBull },
    { name: "Hennessy", price: "GH₵1,150", image: hennessy },
    { name: "Smirnoff", price: "GH₵70", image: smirnoff },
   
  ];

  const bg = {backgroundImage:showBeverages ? `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), (url(${coke})` : 
  `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url(${dishCover})`}
  const currentItems = showBeverages ? beverages : dishes;

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100 && !showBeverages) {
      setShowBeverages(true);
    } else if (info.offset.x > 100 && showBeverages) {
      setShowBeverages(false);
    }
  };

  return (<div id="menu">
    <div className="
    menu-box h-auto w-full bg-cover bg-center overflow-hidden relative"
     style={bg} >
      {/*Menu title*/}
      <h2 className
      ="w-max mx-auto text-base md:text-lg font-medium 
       text-white pt-8 relative z-5">{showBeverages ? "Our Beverages" : "Our Dishes"}</h2>

      {/* Left button */}
      {showBeverages && (
        <button
          className="
          absolute top-1/2 left-3 -translate-y-1/2 bg-black text-white text-2xl
          rounded-full opacity-70 hover:opacity-100 z-5 my-auto block"
          onClick={() => setShowBeverages(false)}
        >
          {"<"}
        </button>
      )}

      {/* Right button */}
      {!showBeverages && (
        <button
          className="
          absolute top-1/2 right-3 translate-y-1/2 bg-black text-white text-2xl
           rounded full opacity-70 hover:opacity-100 my-auto block z-5"
          onClick={() => {setShowBeverages(true); setShowCokePic(true);}}
        >
          {">"}
        </button>
      )}
{/* Menu Grid***********************************************/}
      <motion.div
        className
        ="grid sm:grid-cols-2
        lg:grid-cols-3 
        gap-5  p-10" 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          {currentItems.map((item) => (
            <motion.div
              key={item.name}
              className
              ="bg-white/10 backdrop-blur-md border border-white/20 
              rounded-xl pb-2 "
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={item.image} alt={item.name} loading="lazy" decoding="async" className
              ="
              w-full h-50  object-fill" />
              <h3 className
              ="text-white text-center text-base md:text-lg  font-medium mt-4">
                {item.name}</h3>
              <p className
              ="text-center text-sm md:text-base font-semibold text-[#cc3333]">
                {item.price}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* Menu Button*/}
      <button className
      ="menu-btn block mx-auto py-1 px-4 mb-8 text-sm md:text-base
      font-medium bg-[#cc3333] text-white
      rounded-lg transition-all  cursor-pointer
      hover:bg-[#333] hover:text-[#ffeb3b]">
        <Link to="about" smooth={true} duration={400}>Contact info</Link>
      </button>
    </div>
    </div>);
};

export default Menu;
