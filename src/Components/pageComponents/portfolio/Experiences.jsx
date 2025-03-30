import React from "react";
import { motion } from "framer-motion";
import { WorkExperiences, MyCV, IconItem } from "../../subComponents/Components";

export const ExperiencesComponent = () => {
  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section initial="hidden" animate="visible" variants={fadeIn}>
      <header className="pb-5 border-b border-b-zinc-300 dark:border-b-zinc-800">
        <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">Experience</h3>
      </header>

      <div className="group/list flex flex-col">
        {WorkExperiences &&
          [...WorkExperiences.slice(0, 6)].map((each, index) => {
            return (
              <motion.section
                key={index}
                className="pt-5 pb-6 lg:ps-4 grid lg:grid-cols-7 
                  border-b border-b-gray-300 dark:border-b-zinc-700 border-solid transition-colors duration-300 
                  lg:hover:!bg-gray-100 dark:lg:hover:!bg-black/50 
                  border-t border-t-transparent dark:border-t-transparent 
                  lg:hover:!border-t-gray-400/40 dark:lg:hover:!border-t-slate-300/40 
                  lg:hover:!opacity-100 lg:group-hover/list:opacity-40 overflow-hidden relative 
                  before:absolute before:top-0 before:content-[''] before:w-full before:h-10 
                  before:!bg-[linear-gradient(to_bottom,white,#ddd,transparent)] 
                  dark:before:!bg-[linear-gradient(to_bottom,#fff3,#000,transparent)] 
                  before:-z-[1] isolate before:!opacity-0 lg:hover:before:!opacity-100 before:left-0 last:border-b-0"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <aside className="col-span-2 h-full flex flex-wrap gap-y-2 mb-2 sm:mb-0 justify-between">
                  <div className="h-full flex flex-wrap lg:flex-col gap-y-2 mb-2 sm:mb-0 justify-between">
                    <small className="uppercase text-[.8rem] opacity-70 text-[#222222] dark:text-white">
                      {each.yearDuration}
                    </small>
                  </div>
                </aside>

                <aside className="col-span-5">
                  <motion.div className="flex flex-col gap-y-3" variants={fadeIn}>
                    <h2 className="text-base text-[#222222] dark:text-white">
                      {each.position} <span className="mx-1">•</span> {each.company}
                    </h2>
                    <span className="opacity-80 text-[.86rem] block text-[#222222] dark:text-white">
                      {each.description}
                    </span>
                    {each.achievements && each.achievements.length && (
                      <ul>
                        {each.achievements.map((achievement, childIndex) => {
                          return (
                            <motion.li
                              key={childIndex}
                              className="before:h-0.5 before:w-2 before:bg-[#222222] dark:before:bg-white/80 before:rounded-full 
                              before:aspect-square before:top-2 before:translate-x-0 before:absolute before:left-0 
                              before:translate-y-1/2 ps-6 relative text-[.8rem] opacity-80 font-light text-[#222222] dark:text-white"
                              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                              {achievement}
                            </motion.li>
                          );
                        })}
                      </ul>
                    )}
                  </motion.div>
                </aside>
              </motion.section>
            );
          })}
      </div>

      <div className="flex items-center justify-end mt-4">
        <motion.a
          href={MyCV}
          target="_blank"
          className="underline underline-offset-4 opacity-70 hover:opacity-100 flex items-center gap-x-3 text-[#222222] dark:text-white"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm">View Full Résumé</span>
          <IconItem icon={"lucide:arrow-up-right"} className={"text-lg"} />
        </motion.a>
      </div>
    </motion.section>
  );
};
