import {useEffect, useRef, useState} from 'react';
import {Link} from "react-scroll";


function Sticky(){
const [sticky, setSticky] = useState(false);
const header =useRef(null);


useEffect(() =>{
        const observer = new IntersectionObserver(
            (entries) =>{
const entry =entries[0];
            setSticky(!entry.isIntersecting);
        },
        {threshold:0});

if(header.current){
    observer.observe(header.current);
}
return ()=>{
    if(header.current){
       observer.unobserve(header.current);
    }
    };
},[]);

const headerItems = [
    {id:1, link:"home", text:"home"},
     {id:2, link:"menu", text:"menu"},
      {id:3, link:"about", text:"about"},];


return(<>
{/*mainHeader*/}
    <header ref={header} className
    ="absolute top-0 left-0 w-full z-1 bg-[#1a1a1a] p-6">
                {/*Nav-2*/}
                 <ul className=
                 "text-white flex justify-center gap-6 max-[1050px]:hidden">
                {headerItems.map((item)=> (
                    <li key={item.id}>
                        <Link to={item.link} smooth={true} duration={500}
                        className
                        ={`cursor-pointer relative after:block after:h-[3px] after:bg-white after:w-0 
                        hover:after:w-full after:transition-all after:duration-300 text-lg hover:font-medium capitalize
                ${item.id ===1? "font-bold" :""}`}>
                        {item.text}
                        </Link>
                    </li>
                ))}
             </ul>
    </header>
    {/*stickyHeader*/}
    {sticky &&(
    <div className
    ="fixed top-0 left-0 w-full bg-[rgba(23,4,4,0.9)] p-6 z-5">
                {/*nav-3*/}
                 <ul className
                 ="flex justify-end relative gap-6 text-white max-[1050px]:hidden">
                    {headerItems.map((item)=>(
                  <li key={item.id}>
                    <Link to={item.link} smooth={true} duration={500} className
                    ="cursor-pointer relative after:block after:h-[3px] after:bg-white after:w-0 
                      hover:after:w-full after:transition-all after:duration-300 text-lg hover:font-medium capitalize">
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