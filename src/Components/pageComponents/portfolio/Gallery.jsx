import { useState } from "react";
import { PersonalProjects } from "../../subComponents/Components";
import ImageModal from "../../subComponents/ImageModal";

export default function GalleryComponent() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (mediaSrc, mediaType, title) => {
    setSelectedMedia({ mediaSrc, mediaType, title });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section>
      <header className="pb-5 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-7">
        <h3 className="text-xl lg:text-lg text-[#222222] dark:text-white">Project Gallery</h3>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PersonalProjects.map((project, index) => (
          <div
            key={index}
            className="block rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => openModal(project.videoSrc || project.imageSrc, project.videoSrc ? "video" : "image", project.projectTitle)}
          >
            <img
              src={project.imageSrc}
              alt={project.projectTitle}
              className="w-full aspect-[16/10] object-cover rounded-lg"
              loading="lazy"
              aria-label={`View ${project.projectTitle} media`}
            />
            <div className="mt-2 text-[.86rem] text-[#222222] dark:text-white text-center">
              {project.projectTitle}
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        mediaSrc={selectedMedia?.mediaSrc}
        mediaType={selectedMedia?.mediaType}
        title={selectedMedia?.title}
      />
    </section>
  );
}
