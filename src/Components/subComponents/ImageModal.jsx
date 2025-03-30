import { motion, AnimatePresence } from "framer-motion";
import { IconItem } from "./Components";

export default function ImageModal({ isOpen, onClose, mediaSrc, mediaType, title }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-70 flex items-center justify-center z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg max-w-3xl"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-[#222222] dark:text-white text-xs bg-[#f2f2f2] dark:bg-black rounded-full p-1 
              hover:bg-gray-300 dark:hover:bg-zinc-800 transition-colors duration-200 z-10"
              onClick={onClose}
            >
              <IconItem icon={"si:close-line"} className={"text-[1.8rem]"} />
            </button>

            {mediaType === "video" ? (
              <video controls className="max-w-full max-h-[80vh] object-contain rounded-lg">
                <source src={mediaSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={mediaSrc} alt={title} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
            )}

            <div className="text-center mt-2 text-lg font-semibold text-[#222222] dark:text-white">{title}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
