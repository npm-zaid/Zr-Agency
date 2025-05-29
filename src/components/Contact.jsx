import { motion } from "framer-motion";
import { Mail, MessageSquare, User, Sparkles } from "lucide-react";
import Button from "./Button";
import SubTitle from "./SubTitle";

const Contact = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for the ping animation
  const pingVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.4, 0.2, 0.4],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Variants for the floating icon
  const floatVariants = {
    animate: {
      y: [-10, 10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/60 rounded-full blur-3xl"
          variants={pingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#61E4ED]/80 via-zinc-900/50 to-transparent rounded-full blur-3xl"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <motion.div className="container flex  text-center relative z-10" variants={childVariants}>
       
        <div className="mx-auto flex flex-col gap-8">
          {/* Badge */}
          <motion.div
            className="flex mb-2 justify-center items-center text-sm bg-gradient-to-r from-[#61E4ED] via-zinc-900/50 to-zinc-900/50 w-fit m-auto p-[1.5px] rounded-full"
            variants={childVariants}
          >
            <div className="z-10 relative overflow-hidden bg-zinc-900/80 text-white font-bold p-2 px-4 rounded-full">
              <span className="bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
                <Sparkles className="inline-block w-4 h-4 mr-2 text-[#61E4ED]" />
                Get in Touch
              </span>
              <div className="bg-gradient-to-r from-[#61E4ED]/30 via-transparent to-transparent absolute top-0 right-0 inset-0 z-0"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-[4vw] max-w-2xl  font-bold leading-[4.5vw]"
            variants={childVariants}
          >
            <span className="bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
              Let's Create Something
            </span>
            <span className="bg-gradient-to-b from-[#64E3FA] to-[#64E3FA]/50 text-transparent bg-clip-text p-4">
              Amazing
            </span>
          </motion.h2>

         

          {/* Contact Form */}
          <motion.div
            className="mt-8 glass-card p-8 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
            variants={childVariants}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#61E4ED]/50" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#61E4ED]/50"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#61E4ED]/50" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#61E4ED]/50"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#61E4ED]/50" />
                  <textarea
                    placeholder="Your Message"
                    className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#61E4ED]/50 resize-none h-32"
                  ></textarea>
                </div>
              </div>
              <Button title="Send" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Message Icon */}
      <motion.div
        className="absolute bottom-10 right-10"
        variants={floatVariants}
        animate="animate"
      >
        <MessageSquare className="w-8 h-8 text-blue-400/50" />
      </motion.div>
    </motion.section>
  );
};

export default Contact;