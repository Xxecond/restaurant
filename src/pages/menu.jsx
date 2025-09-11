import {useState} from 'react';
import {Link} from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

import dishCover from '../assets/food.webp';
import drink from '../assets/drink.webp';

import jollof from '../assets/jollof.webp';
import indomie from '../assets/noodles.webp';
import friedrice from '../assets/friedRice.webp';
import waakye from '../assets/waakye.webp';
import kenkey  from '../assets/kenkey.webp';
import beans  from '../assets/bean.webp';

import coke from '../assets/coke.webp';
import malt from '../assets/malt.webp';
import guinness from '../assets/guinn.webp';
import hennessy from '../assets/henn.webp';
import smirnoff  from '../assets/smirn.webp';
import redBull  from '../assets/red.webp';

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

  const currentBg = showBeverages ? drink : dishCover;
  const currentItems = showBeverages ? beverages : dishes;

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100 && !showBeverages) {
      setShowBeverages(true);
    } else if (info.offset.x > 100 && showBeverages) {
      setShowBeverages(false);
    }
  };

  return (
    <section id="menu" className="h-auto w-full bg-cover bg-center overflow-hidden relative">
      {/*background */}
      <img src={currentBg} alt="bg-image" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/70 to-black/70 -z-10" />
      <div className="absolute inset-0  bg-gradient-to-b from-black/70 to-black/70 -z-10"></div>
      
      {/*Menu title*/}
      <h1 className="w-max mx-auto text-base md:text-lg font-medium text-white md:pt-8 pt-4 relative z-5">
        {showBeverages ? "Our Beverages" : "Our Dishes"}
      </h1>

      {/* Left button */}
      {showBeverages && (
        <button
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black text-white text-2xl rounded-full opacity-70 hover:opacity-100 z-5 my-auto block"
          onClick={() => setShowBeverages(false)}
        >
          {"<"}
        </button>
      )}

      {/* Right button */}
      {!showBeverages && (
        <button
          className="absolute top-1/2 right-3 translate-y-1/2 bg-black text-white text-2xl rounded full opacity-70 hover:opacity-100 my-auto block z-5"
          onClick={() => {setShowBeverages(true); setShowCokePic(true);}}
        >
          {">"}
        </button>
      )}

      {/* Menu Grid*/}
      <motion.ul
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10" 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          {currentItems.map((item) => (
            <motion.li
              key={item.name}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl pb-2"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.9 }}
            >
              <article>
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="w-full h-50 object-fill" />
                <p className="text-white text-center text-base md:text-lg font-medium mt-4">
                  {item.name}
                </p>
                <p className="text-center text-sm md:text-base font-semibold text-[#cc3333]">
                  {item.price}
                </p>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Menu Button*/}
      <button className="menu-btn block mx-auto py-1 px-4 mb-8 text-sm md:text-base font-medium bg-[#cc3333] text-white rounded-lg transition-all cursor-pointer hover:bg-[#333] hover:text-[#ffeb3b]">
        <Link to="about" smooth={true} duration={400}>about Us</Link>
      </button>
    </section>
  );
};

export default Menu;
