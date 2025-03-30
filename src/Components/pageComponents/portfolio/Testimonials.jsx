import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonials } from "../../subComponents/Components";

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 relative ">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-6 text-center "
      >
        <p className="text-gray-600 italic mb-4">
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
          <h4 className="font-semibold text-lg">{Testimonials[currentIndex].name}</h4>
          <p className="text-sm text-gray-500">
            {Testimonials[currentIndex].title}, {Testimonials[currentIndex].company}
          </p>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default TestimonialComponent;

// import { motion } from "framer-motion";
// import { useState } from "react";

// const projects = [
//   {
//     id: 1,
//     title: "Résumé.me",
//     description: "A digital portfolio and résumé builder platform.",
//     image: "/resume-me.jpg",
//     testimonial: {
//       text: "This platform saved me hours! So intuitive and well-designed.",
//       name: "John Doe",
//       title: "Senior Developer",
//       company: "TechCorp",
//     },
//   },
//   {
//     id: 2,
//     title: "PGTARIANS",
//     description: "A learning dashboard platform for students.",
//     image: "/pgtarians.jpg",
//     testimonial: {
//       text: "Amazing user experience. It made communication seamless.",
//       name: "Jane Smith",
//       title: "Product Manager",
//       company: "EduTech",
//     },
//   },
// ];

// export default function ProjectGallery() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {projects.map((project) => (
//         <div key={project.id} className="relative group">
//           {/* Project Image */}
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-64 object-cover rounded-lg shadow-lg"
//           />

//           {/* Overlay on Hover */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileHover={{ opacity: 1, y: 0 }}
//             className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
//           >
//             <p className="text-lg italic">"{project.testimonial.text}"</p>
//             <p className="mt-2 font-bold">{project.testimonial.name}</p>
//             <p className="text-sm">{project.testimonial.title}, {project.testimonial.company}</p>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// }
