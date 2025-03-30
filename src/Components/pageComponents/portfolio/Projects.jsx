import React from "react";
import { motion } from "framer-motion";
import { IconItem, PersonalProjects } from "../../subComponents/Components";
import { Link } from "react-router-dom";

export const ProjectsComponent = () => {
  const handleSendEmail = async () => { };
  
  const hoverEffect = {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section>
      <header className="pb-5 mt-2 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7">
        <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">
          Personal Projects
        </h3>
      </header>
      <div className="group/list flex flex-col">
        {PersonalProjects &&
          PersonalProjects.map((each, index) => {
            return (
              <React.Fragment key={index}>
                <motion.section
                  className="pt-5 pb-6 lg:ps-4 gap-y-4 gap-x-6 
                  flex flex-col-reverse sm:flex-row 
                  border-b border-b-gray-300 dark:border-b-zinc-700 border-solid 
                  transition-colors duration-300 
                  lg:hover:!bg-gray-100 dark:lg:hover:!bg-black/50 
                  border-t border-t-transparent dark:border-t-transparent 
                  lg:hover:!border-t-gray-400/40 dark:lg:hover:!border-t-slate-300/40 
                  lg:hover:!opacity-100 lg:group-hover/list:opacity-40 
                  overflow-hidden relative 
                  before:absolute before:top-0 before:content-[''] before:w-full before:h-10 
                  before:!bg-[linear-gradient(to_bottom,white,#ddd,transparent)] 
                  dark:before:!bg-[linear-gradient(to_bottom,#fff3,#000,transparent)] 
                  before:-z-[1] isolate before:!opacity-0 lg:hover:before:!opacity-100 
                  before:left-0 last:border-b-0"
                  whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                >
                  <aside className="w-4/6 sm:w-2/6 h-full flex flex-wrap gap-y-2 mb-2 sm:mb-0 justify-between">
                    <motion.figure
                      role="img"
                      className="rounded-lg overflow-hidden flex items-center justify-center aspect-video w-full sm:h-40 lg:h-28 h-28"
                      variants={hoverEffect}
                      whileHover="hover"
                    >
                      <img
                        src={each.imageSrc}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </motion.figure>
                  </aside>
                  <aside className="w-full">
                    <div className="flex flex-col gap-y-3">
                      <Link
                        to={each.projectLink}
                        target="_blank"
                        className="group/link text-base flex items-center gap-x-2 text-[#222222] dark:text-white"
                      >
                        <span className="text-[#222222] dark:text-white">
                          {each.projectTitle}
                        </span>
                        <IconItem
                          icon={`lucide:arrow-up-right`}
                          className={"group-hover/link:ms-1 text-lg opacity-80"}
                        />
                      </Link>
                      <span className="opacity-80 text-[.86rem] block text-[#222222] dark:text-white">
                        {each.description}
                      </span>
                      {each.stacks && each.stacks.length && (
                        <ul className="flex flex-wrap items-stretch gap-2 mt-2">
                          {each.stacks.map((_, childIndex) => {
                            return (
                              <React.Fragment key={childIndex}>
                                <li
                                  className="relative text-[.8rem] opacity-80 font-light 
                                  rounded-full py-2 px-5 border 
                                  border-slate-300 dark:border-slate-600 
                                  bg-slate-100/50 dark:bg-slate-800/50 text-[#222222] dark:text-white"
                                >
                                  {_}
                                </li>
                              </React.Fragment>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </aside>
                </motion.section>
              </React.Fragment>
            );
          })}
      </div>
      {/* <button type="button" onClick={handleSendEmail}>
				Send Test
			</button> */}
    </section>
  );
};
