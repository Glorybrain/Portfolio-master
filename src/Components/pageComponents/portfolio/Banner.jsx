import { Link } from "react-router-dom";
import { useCallback, useMemo, useContext } from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/media/images/Code_Image_1.jpg";
import {
  IconItem,
  MyCV,
  profileImage,
  socialMedia,
} from "../../subComponents/Components";
import { StateContext } from "../../../App";

export const BannerComponent = () => {
  const { setUserData } = useContext(StateContext);

  const handleToggleModal = useCallback((e) => {
    e.stopPropagation();
    setUserData((prev) => ({
      ...prev,
      isModalOpen: true,
    }));
  }, [setUserData]);

  const memoizedSocialMedia = useMemo(() => socialMedia, []);
  const memoizedMyCV = useMemo(() => MyCV, []);

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const floatAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  return (
    <div className="flex flex-col">
      {/* Banner Image */}
      <motion.section
        role="presentation"
        className="md:h-48 h-36 rounded-lg overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <img
          src={image1}
          loading="lazy"
          alt={image1}
          className="h-full w-full object-cover object-center"
        />
      </motion.section>

      {/* Profile & Content */}
      <section className="-mt-8 flex flex-col md:flex-row gap-x-6 items-center justify-between">
        {/* Profile Image */}
        <motion.figure
          className="w-36 min-w-[9rem] h-36 rounded-full flex overflow-hidden items-center border-4 border-solid border-[#F2F2F2] dark:border-custom"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.img
            loading="lazy"
            src={profileImage}
            alt={profileImage}
            className="w-full h-full object-cover object-center"
            animate={floatAnimation}
          />
        </motion.figure>

        {/* Text Content */}
        <motion.div
          className="flex flex-col gap-y-6 gap-x-6 mt-3 md:flex-row items-center justify-between md:flex-grow md:mt-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex items-center md:items-start flex-col gap-y-1 text-center md:text-start md:mt-8">
            <h4 className="text-3xl font-semibold text-[#222222] dark:text-white">
              Adeniyi Richard Adedokun.
            </h4>
            <span className="text-[.89rem] font-light opacity-70 text-[#222222] dark:text-white">
              I am a Software Engineer based in Winnipeg, Canada.
            </span>
            <ul className="flex items-center gap-x-2 mt-4">
              {memoizedSocialMedia.map((social, key) => (
                <motion.li key={key} whileHover={{ scale: 1.1 }}>
                  <Link
                    title={social.otherName}
                    to={social.link}
                    className="text-slate-400 hover:text-slate-50 hover:opacity-100 opacity-80"
                  >
                    <IconItem className="text-[1.25rem]" icon={social.icon} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex md:flex-col gap-y-3 gap-x-2 md:mt-8">
            <motion.button
              type="button"
              onClick={handleToggleModal}
              className="rounded-lg flex items-center gap-x-2 
                border border-zinc-300 dark:border-zinc-800 
                hover:border-zinc-500 dark:hover:border-zinc-600 
                text-[0.9rem] px-3 
                bg-slate-100/40 dark:bg-slate-600/20 
                hover:bg-slate-200/60 dark:hover:bg-slate-600/40 
                py-2 text-[#222222] dark:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconItem
                icon="ph:chat-circle-dots-bold"
                className="text-[1.25rem] opacity-80"
              />
              <span>Contact</span>
            </motion.button>

            <motion.a
              href={memoizedMyCV}
              rel="noreferrer"
              target="_blank"
              className="rounded-lg flex items-center gap-x-2 
                border border-zinc-300 dark:border-zinc-800 
                hover:border-zinc-500 dark:hover:border-zinc-600 
                text-[0.9rem] px-3 
                bg-slate-100/40 dark:bg-slate-600/20 
                hover:bg-slate-200/60 dark:hover:bg-slate-600/40 
                py-2 text-[#222222] dark:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconItem
                icon="gg:file-document"
                className="text-[1.25rem] opacity-80"
              />
              <span>Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
