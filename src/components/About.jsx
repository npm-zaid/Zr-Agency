import SubTitle from "./SubTitle";
import { delay, motion } from "framer-motion"; 
import { Milestone } from 'lucide-react';
const About = () => {


  return (
    <div className="relative py-10 h-full overflow-hidden">
      {/* Enhanced background effect */}
       <div className="absolute inset-0">
      
       
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-[#61E4E]/80 via-[#61E4ED]/40 to-transparent rounded-full blur-3xl"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}D
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SubTitle title="About Us" />

        <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-6 font-bold text-center bg-gradient-to-b from-white via-gray-100 to-gray-400 text-transparent bg-clip-text mb-12 animate-fade-in">
          Who We Are
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full space-y-8">
            <div className="space-y-5 text-zinc-300">
              <p className=" text-lg leading-6 tracking-wide">
              We are a passionate team at <strong>DevCraft</strong>, dedicated to transforming your digital vision into reality. Our journey began with a simple goal: to create stunning, high-performance websites that captivate audiences and drive meaningful results.
              </p>
              <p className=" text-lg leading-6 tracking-wide">
                With expertise in full-stack development, UI/UX design, and API integration, we craft tailored solutions to meet your unique needs. Partner with us to bring your ideas to life with creativity, precision, and innovation.
              </p>
            </div>

            <div className="p-5 bg-zinc-900/60 border-zinc-700/30 rounded-xl backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3"> <Milestone className="  w-7 h-7 text-[#61E4ED] inline"/> <span>Our Mission</span></h3>
              <p className="text-gray-300 leading-relaxed tracking-wide">
                Our mission is to empower businesses with exceptional digital experiences, blending creativity and technology to deliver solutions that inspire and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;