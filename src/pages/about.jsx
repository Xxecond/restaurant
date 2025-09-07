import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className
    =" h-min w-full bg-[#3333] flex
    flex-col justify-center text-center">
      <h1 className
      ="about-heading text-base md:text-lg text-white font-medium
      my-10 w-max mx-auto z-5">ABOUT US.</h1>
      <div className
      ="about-section mb-5">
        <h2 className="about-subtitle text-xm text-[#cc3333] mb-2">Working Hours</h2>
        <p className="about-text text-sm font-light">Open Daily: <strong className="font-semibold">8:00 AM – 10:00 PM</strong></p>
      </div>
      <div className="about-section mb-5">
        <h2 className="about-subtitle text-sm text-[#cc3333] mb-2">Why Choose Us</h2>
        <ul className="about-list list-none text-sm leading-tight font-light w-max mx-auto text-left">
          <li><span className="text-[#cc3333] mr-5">•</span>Quick and Reliable Delivery</li>
          <li><span className="text-[#cc3333] mr-5">•</span>Friendly & Prompt Customer Service</li>
          <li><span className="text-[#cc3333] mr-5">•</span>Call Anytime to Place an Order</li>
        </ul>
      </div>
      <div className
      ="about-section mb-50">
        <h2 className
        ="about-subtitle text-xm text-[#cc3333] mb-5">Connect with Us</h2>
        <div className
        ="about-icon-box flex justify-center 
              gap-4 text-lg md:text-xl mt-4">
         <a href="https://wa.me/233531467213" target="_blank" rel="noopener noreferrer" 
         className
         ="hover:text-[#cc3333] transition-colors">
          <i className="fab fa-whatsapp"></i></a>
          <a href="mailto:andrewsampadu9@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#cc3333] transition-colors">
            <i className="fas fa-envelope"></i></a>
          <a href="https://x.com/maners_999shit" target="_blank" rel="noopener noreferrer" className="hover:text-[#cc3333] transition-colors">
          <i className="fab fa-x-twitter"></i></a>
          <a href="https://www.facebook.com/Xecond.Xhooter" target="_blank" rel="noopener noreferrer" className="hover:text-[#cc3333] transition-colors">
          <i className="fab fa-facebook"></i></a>
        </div>
        <button className
      ="about-btn block mx-auto py-1 px-4 my-7 text-sm 
      md:text-base font-medium bg-[#cc3333] text-white
      rounded-lg transition-all cursor-pointer
      hover:bg-[#333] hover:text-[#ffeb3b]
">
        <Link to="home"  smooth={true} duration={400} >Home</Link>
   </button> 
      </div>
    </section>
    
  );
};

export default About;