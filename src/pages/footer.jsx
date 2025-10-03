import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from '../assets/mff.webp';

const quickLinks = [
  { id: 1, link: "#home", text: "Home" },
  { id: 2, link: "#menu", text: "Menu" },
  { id: 3, link: "#about", text: "About" },
  { id: 4, link: "#contact", text: "Contact" },
]

const socials = [
  { id: 1, link: "https://facebook.com", icon: FaFacebookF, text: "Facebook" },
  { id: 2, link: "https://instagram.com", icon: FaInstagram, text: "Instagram" },
  { id: 3, link: "https://x.com/maners_999shit", icon: FaTwitter, text: "Twitter" },
]

// save your generated logo here
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo / About */}
        <div>
          <img
            src={Logo}
            alt="MFF Logo"
            className="h-14 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed border-y-1 border-double border-gray-800 ">
            Serving authentic Ghanaian dishes with love and passion.
            Fresh flavors, cozy vibes, and unforgettable dining experiences since 2021.
          </p>
        </div>

        {/* Quick Links */}
        <nav>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#cc3333]">Quick Links</h3>
          <ul className="space-y-2 ">

            {quickLinks.map((item) => (
              <li key={item.id} className="border-b-1 border-gray-700 rounded-br-2xl bg-gradient-to-r">
                <a href={item.link} className="hover:text-yellow-400 border-b-1 border-black">{item.text}</a>
              </li>
            ))}

          </ul>
        </nav>

        <article>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#cc3333]">Follow Us</h3>
          <ul className="flex flex-col space-y-3 w-max md:w-full ml-7 md:ml-0">
            {/* Socials */}
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className="border-b-1 border-gray-700 rounded-br-xs md:rounded-br-2xl">
                  <a href={item.link} className="flex items-center space-x-2 text-lg md:text-xl text-gray-300 hover:text-yellow-400">
                    <Icon />
                    <span className="hidden md:block">{item.text}</span></a>
                </li>
              )
            })
            }
          </ul>
        </article>
      </section>

      {/* Bottom Bar */}
      <p className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MFF. All rights reserved.
      </p>
    </footer>
  )
};

export default Footer;  