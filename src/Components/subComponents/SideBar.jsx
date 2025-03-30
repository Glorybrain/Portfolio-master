import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { IconItem, Links, socialMedia } from "./Components";
import { StateContext } from "../../App";
import { motion } from "framer-motion";

const linkHoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const SideBar = () => {
  const user = useContext(StateContext);
  const { setUserData } = user;

  function handleSideBarAction() {
    setUserData((prev) => {
      return {
        ...prev,
        isSideBarOpen: false,
      };
    });
  }

  return (
    <aside className="h-full lg:border-r lg:border-solid flex flex-col gap-y-1 border-r-zinc-300 dark:border-r-zinc-700 bg-[#F2F2F2] dark:bg-custom">
      <div className="px-5 pt-4 flex items-center justify-between">
        <h2 className="text-[#222222] dark:text-white text-2xl font-bold opacity-80 tracking-wide">
          Vickkk
        </h2>
        <button
          type="button"
          className="flex lg:hidden items-center justify-center rounded-full p-2 bg-transparent text-white hover:bg-zinc-600/50"
          onClick={handleSideBarAction}
        >
          <IconItem
            icon={"line-md:close"}
            className={"text-[1.5rem]"}
          ></IconItem>
        </button>
      </div>
      <ul className="w-full flex flex-col px-2 mt-3">
        {[...Links, ...socialMedia].map((eachLink, index) => {
          const { link, linkname, icon, otherName } = eachLink;
          return (
            <Fragment
              key={index}
            >
              <motion.div whileHover={linkHoverEffect} >
                <Link
                  to={link}
                  target={
                    link.toLowerCase() === "/portfolio" ? "_self" : "_blank"
                  }
                  className="flex items-center gap-x-3 text-[#222222] dark:text-white  py-3 opacity-70 hover:opacity-95 bg-transparent hover:bg-[#E0E0E0] dark:hover:bg-zinc-900 rounded-md ps-4 text-sm"
                >
                  <i>
                    <IconItem icon={icon} className={`text-[1.25rem]`} />
                  </i>
                  <span className="tracking-wide">{otherName ?? linkname}</span>
                </Link>
              </motion.div>
            </Fragment>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
