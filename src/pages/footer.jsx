import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// save your generated logo here
 function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo / About */}
        <div>
          <img 
        
            alt="MFF Logo" 
            className="h-14 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed ">
            Serving authentic Ghanaian dishes with love and passion. 
            Fresh flavors, cozy vibes, and unforgettable dining experiences since 2021.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#menu" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact Us</a></li>
           </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-3 w-max ml-7 md:ml-0">
            <a href="#" className="flex items-center space-x-2 text-lg md:text-xl text-gray-300 hover:text-yellow-400">
              <FaFacebookF />
              <span className="hidden md:block">Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-lg md:text-xl text-gray-300 hover:text-yellow-400">
              <FaInstagram />
              <span className="hidden md:block">  Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-lg md:text-xl text-gray-300 hover:text-yellow-400">
              <FaTwitter />
              <span className="hidden md:block">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MFF. All rights reserved.
      </div>
    </footer>
  )
};

export default Footer;