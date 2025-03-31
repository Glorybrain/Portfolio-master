import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonials } from "../../subComponents/Components";

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mx-auto ">
      <motion.header
        className="flex align-middle justify-between pb-5 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">
          Testimonials
        </h3>
        <div className="flex gap-4">
          <button
            onClick={prevTestimonial}
            className="p-1 bg-gray-100 dark:bg-zinc-800 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <ChevronLeft className="text-gray-600 dark:text-white" size={20} />
          </button>

          <button
            onClick={nextTestimonial}
            className="p-1 bg-gray-100 dark:bg-zinc-800 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <ChevronRight className="text-gray-600 dark:text-white" size={20} />
          </button>
        </div>
      </motion.header>

      <div className="relative">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 text-center "
        >
          <p className="text-gray-600 mb-4 dark:text-white">
            "{Testimonials[currentIndex].testimonial}"
          </p>
          <div className="flex flex-col items-center">
            {Testimonials[currentIndex].image && (
              <img
                src={Testimonials[currentIndex].image}
                alt={Testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
            )}
            <h4 className="font-semibold text-lg text-gray-500 dark:text-white">{Testimonials[currentIndex].name}</h4>
            <p className="text-sm text-gray-500 dark:text-white">
              {Testimonials[currentIndex].title}, {Testimonials[currentIndex].company}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TestimonialComponent;

