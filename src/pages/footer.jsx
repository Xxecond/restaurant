import {Link} from "react-scroll";

function Footer() {

const footNav =[
  {id:1, link:"home", text:"Home"},
{id:2, link:"menu", text:"Menu"},
{id:3, link:"about", text:"About"},
]
  return (
    <footer className
    ="
    w-full relative bottom-0 border-t-1 border-black
     text-center font-xm bg-[#3333]">
          <p>&copy; ManersSFastFood 2025 | All Rights Reserved</p>
      <ul className
      ="flex justify-center border-t-2 w-max mx-auto py-2 my-3 gap-3 ">
        {footNav.map((item)=>(
          <li key={item.id}><Link to={item.link} smooth={true} duration={600}
          className={` hover:font-medium cursor-pointer after:block after:h-[3px] after:bg-black after:w-0 
          hover:after:w-full after:transition-all after:duration-300 text-base
           md:text-lg ${item.id === 3  ? "font-medium":""}`}>{item.text}
          </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
