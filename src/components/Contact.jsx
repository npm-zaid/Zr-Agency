import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react'; // Using lucide-react icons instead of Remix icons for consistency
import SubTitle from './SubTitle';
import Button from './Button';

const Contact = () => {
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '8639fe29-bc93-43d5-a66d-0b9244f8d10f');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully...');
      event.target.reset();
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative    py-10 flex flex-col justify-center overflow-hidden">
      {/* Enhanced background effect matching About section */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-[#61E4ED]/70 via-zinc-900/30 to-transparent rounded-lg blur-2xl"
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading matching About section */}
        <SubTitle title="Contact" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-b from-white via-gray-100 to-gray-400 text-transparent bg-clip-text my-4 mb-12 animate-fade-in">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <p className="text-lg leading-6 tracking-wide text-zinc-300">
              Looking to start a project or need consultation? Feel free to contact us. We're here to bring your ideas to life with creativity and precision.
            </p>
            <div className="p-5 bg-zinc-900/60 border border-zinc-700/30 rounded-xl backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="space-y-4 text-zinc-300">
                <div className="flex gap-3 items-center group cursor-pointer">
                  <MapPin className="w-6 h-6 text-[#61E4ED] group-hover:animate-bounce" />
                  <p className="group-hover:translate-x-2 transition-all duration-400">Agra, India</p>
                </div>
                <div className="flex gap-3 items-center group cursor-pointer">
                  <Mail className="w-6 h-6 text-[#61E4ED] group-hover:animate-bounce" />
                  <a
                    href="mailto:zaidcodes.404@gmail.com"
                    className="group-hover:translate-x-2 transition-all duration-400"
                  >
                    zaidcodes.404@gmail.com
                  </a>
                </div>
                <div className="flex gap-3 items-center group cursor-pointer">
                  <Phone className="w-6 h-6 text-[#61E4ED] group-hover:rotate-[30deg] transition-all duration-400" />
                  <a
                    href="tel:+919411903629"
                    className="group-hover:translate-x-2 transition-all duration-400"
                  >
                    +91 9411903629
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <form onSubmit={onSubmit} className="p-5 bg-zinc-900/60 border border-zinc-700/30 rounded-xl backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-zinc-800/50 border border-zinc-700/50 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[#61E4ED] transition-colors duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-zinc-800/50 border border-zinc-700/50 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[#61E4ED] transition-colors duration-300"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-zinc-800/50 border border-zinc-700/50 text-white px-4 py-2 rounded-lg mb-4 focus:outline-none focus:border-[#61E4ED] transition-colors duration-300"
                required
              ></textarea>
             <Button title="Send" />
              <p className="text-zinc-300 text-sm leading-4 mt-4">{result}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;