// import { motion } from "framer-motion";
// import { Certificates } from "../../subComponents/Components";

// const CertificatesComponent = () => {
//   return (
//     <section>
//       <motion.header
//         className="pb-5 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">
//           Certifications
//         </h3>
//       </motion.header>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {Certificates.map((cert, index) => (
//           <a
//             key={index}
//             href={cert.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
//           >
//             <img
//               src={cert.imageSrc}
//               alt={cert.title}
//               className="w-full aspect-[16/10] object-cover rounded-lg"
//             />

//             <div className="mt-2 text-[.86rem] text-[#222222] dark:text-white text-center">
//               {cert.title}
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CertificatesComponent;

import { motion } from "framer-motion";
import { Certificates } from "../../subComponents/Components";

const CertificatesComponent = () => {
  return (
    <section>
      <motion.header
        className="pb-5 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">
          Certifications
        </h3>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
          >
            <img
              src={cert.imageSrc}
              alt={cert.title}
              className="w-full aspect-[20/10] object-cover rounded-lg"
            />

            <div className="mt-3">
              <h6 className="text-[1rem] font-semibold text-[#222222] dark:text-white">
                {cert.title}
              </h6>
              <p className="text-[.75rem] text-gray-500 dark:text-gray-400">
                {cert.issuer} • {cert.date}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificatesComponent;
