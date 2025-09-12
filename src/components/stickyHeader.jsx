import {useEffect, useRef, useState} from 'react';
import {Link} from "react-scroll";

import Logo from '../assets/mff.webp'
function Sticky() {
  const [sticky, setSticky] = useState(false);
  const header = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setSticky(!entry.isIntersecting);
      },
      {threshold:0}
    );

    if(header.current){
      observer.observe(header.current);
    }
    return () => {
      if(header.current){
        observer.unobserve(header.current);
      }
    };
  }, []);

  const headerItems = [
    {id:1, link:"home", text:"Home"},
    {id:2, link:"menu", text:"Menu"},
    {id:3, link:"about", text:"About"},
    {id:4, link:"contact", text:"Contact"},
  ];

  return (
    <>
      {/*mainHeader*/}
      <header ref={header} className="absolute top-0 left-0 w-full z-1 bg-gray-800 p-6">
        <img src={Logo} 
         className="  hidden lg:block h-15 absolute top-3 w-auto"/>
          <img src={Logo} 
         className="lg:hidden block h-11 absolute top-2 right-3 w-auto"/>
        {/*Nav-2*/}
        <ul className="text-white flex justify-center gap-6 max-lg:hidden">
          {headerItems.map((item)=> (
            <li key={item.id}>
              <Link to={item.link} smooth={true} duration={600} className={`cursor-pointer relative after:block after:h-[3px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 text-lg hover:font-medium ${item.id ===1? "font-bold" :""}`}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      {/*stickyHeader*/}
      {sticky && (
        <div className="fixed top-0 left-0 w-full bg-[rgba(17,24,39,0.9)] p-6 z-5">
          {/*nav-3*/}
          <ul className="flex justify-end relative gap-6 text-white max-lg:hidden">
            {headerItems.map((item)=>(
              <li key={item.id}>
                <Link to={item.link} smooth={true} duration={600} className="cursor-pointer relative after:block after:h-[3px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 text-lg hover:font-medium capitalize">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Sticky;
