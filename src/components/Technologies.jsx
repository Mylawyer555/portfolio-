import { FaCss3, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostgresql, SiPostman, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { GiTBrick } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { DiGithub, DiJavascript, DiJavascript1, DiRedis } from "react-icons/di";
import { CgVercel } from "react-icons/cg";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        TECHNOLOGIES
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
       
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiTypescript className="text-7xl text-blue-700 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)} 
            className="p-4"
        >
          <SiPostgresql className="text-7xl text-sky-800 " />
        </motion.div>
        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4.5)} 
            className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
        className="w-23 h-23 rounded-full bg-white flex items-center justify-center"
        >
          <SiExpress className="text-7xl text-black" />
        </motion.div>
      </motion.div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        TOOlS
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
       
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <DiGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <CgVercel className="text-7xl " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
        >
          <SiPostman className="text-7xl text-amber-500" />
        </motion.div>
        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)} 
            className="p-4"
        >
          <DiRedis className="text-7xl text-red-800 " />
        </motion.div>
       
      </motion.div>
      
    </div>
  );
};

export default Technologies;
