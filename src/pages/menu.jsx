import {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jollof from '../assets/jollof.jpg';
import indomie from '../assets/noodles.jpg';
import friedrice from '../assets/fried-rice.jpg';
import waakye from '../assets/waakye.jpg';
import Coke from '../assets/coke.jpg';
import malt from '../assets/malt.jpg';
import guinness from '../assets/guiness.jpg';
import hennessy from '../assets/hennessy.jpg';

const Menu = () => {
  const [showCocktails, setShowCocktails] = useState(false);

  const dishes = [
    { name: "Assorted Rice", price: "GH₵50", image: friedrice },
    { name: "Waakye Rice", price: "GH₵75", image: waakye },
    { name: "Assorted Jollof", price: "GH₵75", image: jollof },
    { name: "Indomie Special", price: "GH₵60", image: indomie },
  ];

  const cocktails = [
    { name: "Coke", price: "GH₵30", image: Coke },
    { name: "Malt", price: "GH₵35", image: malt },
    { name: "Guiness", price: "GH₵55", image: guinness },
    { name: "Hennessy", price: "GH₵125", image: hennessy },
  ];

  const currentItems = showCocktails ? cocktails : dishes;

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100 && !showCocktails) {
      setShowCocktails(true);
    } else if (info.offset.x > 100 && showCocktails) {
      setShowCocktails(false);
    }
  };

  return (<div id="menu">
    <div id="menu-box" style={{ position: 'relative', overflow: 'hidden' }}>
      <h2 className="menu-title">{showCocktails ? "Our Cocktails" : "Our Dishes"}</h2>

      {/* Left button */}
      {showCocktails && (
        <button
          className="side-btn left"
          onClick={() => setShowCocktails(false)}
        >
          {"<"}
        </button>
      )}

      {/* Right button */}
      {!showCocktails && (
        <button
          className="side-btn right"
          onClick={() => setShowCocktails(true)}
        >
          {">"}
        </button>
      )}

      <motion.div
        className="menu-grid"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          {currentItems.map((item) => (
            <motion.div
              key={item.name}
              className="menu-item"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={item.image} alt={item.name} className="menu-img" />
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-price">{item.price}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <a  href="#about" className="menu-btn">Contact info</a>
    </div>
    </div>);
};

export default Menu;
