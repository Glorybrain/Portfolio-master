// import { motion } from "framer-motion";
// import { Certificates } from "../../subComponents/Components";

// const CertificatesComponent = () => {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-12">
//       <header className="pb-5 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7">
//         <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">Certifications</h3>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {Certificates.map((cert, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
//           >
//             {cert.image && (
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="w-20 h-20 mx-auto mb-4 object-contain"
//               />
//             )}
//             <h4 className="font-semibold text-lg">{cert.title}</h4>
//             <p className="text-sm text-gray-500">{cert.issuer}</p>
//             <p className="text-xs text-gray-400">{cert.date}</p>
//             {cert.link && (
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-2 inline-block text-blue-600 text-sm font-medium"
//               >
//                 Verify Certificate →
//               </a>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CertificatesComponent;

import { useState } from "react";
import { motion } from "framer-motion";
import { Certificates } from "../../subComponents/Components";

const CertificatesComponent = () => {
  const [view, setView] = useState("grid"); // Toggle between grid and list views

  return (
    <section className="">
      <header className="pb-5 flex justify-between items-center border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7">
        <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">Certifications</h3>
        <button
          onClick={() => setView(view === "grid" ? "list" : "grid")}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md text-sm"
        >
          {view === "grid" ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </header>

      <div className={`grid ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}>
        {Certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition"
          >
            {cert.image && (
              <img src={cert.image} alt={cert.title} className="w-16 h-16 object-contain rounded-md" />
            )}
            <div>
              <h4 className="font-semibold text-lg">{cert.title}</h4>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
              <p className="text-xs text-gray-400">{cert.date}</p>

              <div className="flex items-center gap-2 mt-2">
                {cert.verified && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">Verified</span>
                )}
                {cert.techStack?.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-600 text-sm font-medium"
                >
                  View Certificate →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesComponent;
