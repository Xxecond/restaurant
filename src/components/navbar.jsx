import {Link} from "react-scroll";
import {AiOutlineClose} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useState} from 'react';

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if(!active){
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const navItems = ["home", "menu", "about", "contact"];
  return (
    <>
      {/*BurgerIcon*/}
      <button className="lg:hidden block fixed top-4 left-3 text-2xl font-black cursor-pointer text-[#cc3333] z-6" onClick={handleClick}>
        <GiHamburgerMenu />
      </button>

      {/*fullscreen Nav*/}
      <nav className={`fixed inset-0 flex justify-center items-center bg-[#b33a3a] z-6 transition-all duration-300 ${active ? "translate-x-0" : "translate-x-full"}`}>
        {/*CloseBtn*/}
        <button className="absolute top-4 left-4 text-2xl font-black text-[#fff] cursor-pointer" onClick={handleClick}>
          <AiOutlineClose />
        </button>

        {/*NavLinkBox*/}
        <ul className="flex flex-col gap-3 capitalize">
          {navItems.map((item) => (
            <li key={item}>
              <Link to={item} smooth={true} duration={500} onClick={handleClick} className={`cursor-pointer relative after:block after:h-1 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 font-thin hover:font-normal text-2xl text-white ${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}                       

export default Navbar;
