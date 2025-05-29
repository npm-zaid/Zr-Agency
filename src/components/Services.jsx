import { Code, Palette, Server } from "lucide-react";
import SubTitle from "./SubTitle";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";


const Services = () => {


  return (
    <div className="relative h-full py-10">
      {/* Background Effects */}
        <motion.div
                 className="absolute -bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#61E4ED]/80 via-zinc-900/50 to-transparent rounded-full blur-3xl"
                 initial={{ opacity: 0.3, scale: 0.8 }}
                 animate={{ opacity: 0.5, scale: 1 }}
                 transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
               /> 
               
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <SubTitle title="Our Services" />
        <h2 className="text-4xl md:text-5xl mt-4 font-bold bg-gradient-to-b from-white via-white to-zinc-400 text-transparent bg-clip-text mb-12">
          Solutions We Provide
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Card 1: Full-Stack Development */}
          <div>
            <SpotlightCard className="bg-zinc-800/50 sm:h-[50vh] backdrop-blur-sm border-zinc-700/50" spotlightColor="rgba(97, 228, 237, 0.25)">
              <Code className="w-12 h-12 text-[#61E4ED] mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-white mb-2">Full-Stack Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Craft robust, scalable web applications with seamless front-end and back-end integration using modern frameworks and technologies.
              </p>
            </SpotlightCard>
          </div>

          {/* Service Card 2: UI/UX Design */}
          <div>
            <SpotlightCard className="bg-zinc-800/50 sm:h-[50vh] backdrop-blur-sm border-zinc-700/50" spotlightColor="rgba(97, 228, 237, 0.25)">
              <Palette className="w-12 h-12 text-[#61E4ED] mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Design intuitive, visually stunning interfaces that prioritize user experience and engagement across all devices.
              </p>
            </SpotlightCard>
          </div>

          {/* Service Card 3: API Development */}
          <div>
            <SpotlightCard className="bg-zinc-800/50 sm:h-[50vh] backdrop-blur-sm border-zinc-700/50" spotlightColor="rgba(97, 228, 237, 0.25)">
              <Server className="w-12 h-12 text-[#61E4ED] mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-white mb-2">API Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Build secure, efficient APIs to power your applications, enabling seamless data integration and functionality.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;