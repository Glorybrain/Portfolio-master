import { motion } from "framer-motion";
import { MyStacks } from "../../subComponents/Components";

export const TechnologiesComponent = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {/* Section Header */}
      <motion.header 
        className="pb-5 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">
          Technologies and Tools
        </h3>
      </motion.header>

      {/* Technology Grid */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-7 text-center place-content-center justify-center">
        {MyStacks.map((eachStack, index) => {
          const { name, image } = eachStack;

          return (
            <motion.div
              key={index}
              title={name}
              role="img"
              className={`m-auto lg:me-auto lg:ms-0 item _ relative justify-center w-12 lg:w-14 h-12 lg:h-14 bg-contain bg-no-repeat bg-center after:content-[''] after:z-[-1] after:blur-[15px] dark:after:blur-[10px] after:opacity-30 dark:after:opacity-60 after:absolute after:inset-0 after:bg-center after:scale-[1.45] after:bg-cover duration-300`}
              style={{ backgroundImage: `url(${image})`, backgroundPosition: "center center" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
          );
        })}
      </div>
    </motion.section>
  );
};
