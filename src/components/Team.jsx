import { motion } from "framer-motion";
import SubTitle from "./SubTitle";

// Animation variants for container
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

const Team = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Lead Developer",
      image: "https://picsum.photos/200",
    },
    {
      name: "John Smith",
      role: "UI/UX Designer",
      image: "https://picsum.photos/200",
    },
    {
      name: "Emily Brown",
      role: "Project Manager",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <motion.section
      id="team"
      className="py-20 bg-zinc-900 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={childVariants}>
          <SubTitle title="Our Team" />
        </motion.div>
        <motion.h2
          className="sm:text-5xl text-3xl font-bold text-center text-white mb-12"
          variants={childVariants}
        >
          <span className="bg-gradient-to-b from-white via-white to-zinc-500 text-transparent bg-clip-text">
            Meet the Experts
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-lg text-center hover:bg-zinc-800/50 transition-all duration-300"
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;