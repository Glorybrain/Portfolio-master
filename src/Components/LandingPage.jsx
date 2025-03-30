import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { memo } from "react";
import { motion } from "framer-motion";
import {
  IconItem,
  Links,
  LongArrow,
  socialMedia,
} from "./subComponents/Components";
import ThemeToggle from "./subComponents/ThemeToggle";
import { profileImage } from "./subComponents/Components";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      offset: 50,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  const textVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    }),
  }), []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      transition: { duration: 1.8, staggerChildren: 0.3 },
    },
  }), []);

  const floatingAnimation = useMemo(() => ({
    y: [0, -6, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  }), []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-0 text-[#222222] dark:text-white relative"
    >
      <ThemeToggle />
      <div className="absolute bg-noise opacity-[0.058] inset-0 pointer-events-none"></div>

      <div className="min-h-[100dvh] flex flex-col md:w-3/6 mx-auto">
        <div className="flex flex-col-reverse gap-y-4 md:flex-row items-center justify-center md:justify-between pt-8 pb-4 md:py-16">
          <motion.div
            className="max-w-sm lg:max-w-md flex flex-col items-center text-center md:items-start md:text-start px-2"
            variants={textVariants}
            custom={0.2}
          >
            <h2 className="text-3xl font-semibold tracking-wide text-[#222222] dark:text-white">
              Adeniyi Richard
            </h2>
            <motion.span
              variants={textVariants}
              custom={0.4}
              className="text-sm md:text-[.95rem] mt-3 mb-3 tracking-wide opacity-80 px-4 md:px-0 text-[#222222] dark:text-white"
            >
              Fullstack Developer with a passion for crafting seamless user
              interfaces and building robust, scalable systems. Dedicated to
              delivering exceptional user experiences, ensuring cross-browser
              compatibility, and creating innovative, impactful solutions.
              Committed to continuous learning and leveraging technology to
              solve complex challenges. 🌟
            </motion.span>
          </motion.div>

          <motion.div
            className="overflow-hidden flex items-center justify-center rounded-full group max-w-[6rem] md:max-w-[10rem] select-none aspect-square"
            data-aos="zoom-in"
            animate={floatingAnimation}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.img
              src={profileImage}
              loading="lazy"
              alt="Vickkk's Profile Image"
              className="group-hover:scale-[1.09] h-full w-full object-cover"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        <div className="px-6 py-10 lg:p-10 flex-grow bg-gray-200 dark:bg-[#222222] rounded-t-3xl md:rounded-t-[20px]">
          <ul className="flex flex-col gap-y-6">
            {[...Links, ...socialMedia].map(({ link, linkname, icon }, index) => (
              <motion.li
                key={icon}
                variants={textVariants}
                custom={0.55 + index * 0.1}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  className="group text-gray-300 hover:text-white transition-[color] bg-[#E9ECEF] dark:bg-custom p-[.9rem_17px_.9rem_20px] rounded-[10px] w-full flex items-center justify-between text-wrap"
                  to={link}
                  target={
                    !["/portfolio", "/resume", "/cv"].includes(
                      link.toLowerCase()
                    )
                      ? "_blank"
                      : "_self"
                  }
                >
                  <div className="flex items-center gap-3">
                    <IconItem icon={icon} className="text-[1.6rem]" />
                    <span className="text-sm tracking-wide text-[#222222] dark:text-white">
                      {linkname}
                    </span>
                  </div>
                  <LongArrow className="opacity-0 translate-y-4 flex group-hover:translate-y-0 group-hover:opacity-100 w-8 h-8 fill-[#222222] dark:fill-[white]" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(LandingPage);
