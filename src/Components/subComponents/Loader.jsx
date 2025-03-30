import React from "react";
import "../../assets/css/animations.css";
import { AnimatePresence, motion } from "framer-motion";

const Loader = () => {
	return (
		<AnimatePresence>
			<motion.div
				exit={{ opacity: 0 }}
				transition={{ duration: 2 }}
				className="w-full h-full fixed mx-auto flex items-center justify-center inset-0 bg-[#222]">
				<div className="loader w-12 h-12 scale-125"></div>;
			</motion.div>
		</AnimatePresence>
	);
};

export default Loader;
