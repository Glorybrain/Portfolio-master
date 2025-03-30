import { motion } from "framer-motion";
import { IconItem, NigerianFlag } from "../../subComponents/Components";

const AboutComponent = () => {
  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const floatAnimation = {
    y: [0, -3, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <aside>
        {/* Section Header */}
        <header className="pb-5 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7">
          <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">About Me</h3>
        </header>

        <div className="flex flex-col gap-10 md:flex-row">
          {/* About Text */}
          <motion.aside className="lg:w-5/6" variants={fadeIn}>
            <p className="text-[.9rem] opacity-85 lg:opacity-90 font-[450] text-[#222222] dark:text-white leading-relaxed">
              I'm a Software Engineer from Lagos, Nigeria, with five years of experience in full-stack development, specializing in PHP,
              OOP, React, Vue, and JavaScript. Passionate about building high-quality, scalable, and responsive web applications, I
              follow industry best practices to create seamless digital experiences.
              <br />
              <br />
              With a strong foundation in software engineering principles, I thrive in collaborative teams, solving complex problems,
              and optimizing user interactions. I particularly enjoy enhancing web applications with animations to create engaging,
              dynamic experiences. Always eager to innovate, I’m driven by the challenge of pushing the boundaries of modern web
              development.
            </p>
          </motion.aside>

          {/* Contact Information */}
          <aside className="w-2/6 flex flex-col gap-y-4 text-start">
            {/* Location */}
            <div className="flex flex-col gap-y-1 items-start">
              <h4 className="text-[.95rem] text-[#222222] dark:text-white">Location</h4>
              <div className="flex items-center gap-x-3">
                <span className="text-[.85rem] opacity-80 text-[#222222] dark:text-white">Lagos, NG</span>
                <motion.figure
                  className="rounded-full overflow-hidden flex items-center justify-center w-5 h-5"
                  animate={floatAnimation}
                >
                  <img src={NigerianFlag} alt="Nigerian Flag" className="w-full h-full object-cover" />
                </motion.figure>
              </div>
            </div>

            {/* Email */}
            <ContactItem
              title="Email"
              href="mailto:Adedokunrichard2@gmail.com"
              text="Adedokunrichard2@gmail.com"
              iconPath="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.67 2L12 10.75L5.67 6ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1"
            />

            {/* Phone */}
            <ContactItem
              title="Phone"
              href="tel: +1(431) 277 4465"
              text="+1(431) 277 44655"
              iconPath="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
            />
          </aside>
        </div>
      </aside>
    </motion.section>
  );
};

// 🔹 Extracted ContactItem for Reusability
const ContactItem = ({ title, href, text, iconPath }) => (
  <div className="flex flex-col gap-y-1 items-start">
    <h4 className="text-[.95rem] text-[#222222] dark:text-white">{title}</h4>
    <motion.a
      href={href}
      className="underline underline-offset-[3px] hover:underline-offset-2 text-[.86rem] text-[#222222] dark:text-white flex items-center gap-x-2 opacity-80"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-[0.85rem] text-[#222222] dark:text-white">{text}</span>
      <svg className="w-[1.3rem] h-[1.3rem] text-[#222222] dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d={iconPath}></path>
      </svg>
    </motion.a>
  </div>
);

export default AboutComponent;
