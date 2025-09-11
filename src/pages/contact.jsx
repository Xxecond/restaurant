import { useState } from "react";

import contactImage from "../assets/contact.webp"
function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('contact submit', form);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', message: '' });
  };

    return(
       <section id="contact" className="relative">
      {/* Section heading */}
      <h1 className="absolute left-1/2 -translate-x-1/2 text-white text-base md:text-lg font-medium text-green-900 md:pt-8 pt-4 z-5">
        CONTACT US
      </h1>

      <main className="flex min-h-screen">
        {/* Left side image */}
        <aside className="hidden lg:block w-1/2">
          <img
            src={contactImage}
            alt="Contact background"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </aside>
        <section className="w-full lg:w-1/2 bg-gray-800 flex items-center text-white">
      {/* Background */}
      <div className="max-w-3xl mx-auto pt-10 px-6 w-full">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 shadow-xl">
          <p className="text-center text-gray-200 mb-8 text-sm md:text-base">
            We’d love to hear from you — questions, feedback or special requests.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 
                focus:outline-none focus:ring-2 focus:ring-[#cc3333] text-sm md:text-base"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 
                focus:outline-none focus:ring-2 focus:ring-[#cc3333] text-sm md:text-base"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 
                focus:outline-none focus:ring-2 focus:ring-[#cc3333] text-sm md:text-base"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full text-sma md:text-base py-3 bg-[#cc3333] rounded-lg  hover:bg-[#333] 
              hover:text-[#ffeb3b] transition cursor-pointer"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-center text-green-400 text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>

        </main>
        </section>
    )
}

export default Contact;