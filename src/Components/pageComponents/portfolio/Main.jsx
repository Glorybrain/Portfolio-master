import { ExperiencesComponent } from "./Experiences";
import { TechnologiesComponent } from "./Technologies";
import { BannerComponent } from "./Banner";
import AboutComponent from "./About";
import { ProjectsComponent } from "./Projects";
import GalleryComponent from "./Gallery";
import Header from "../../subComponents/Header";
import TestimonialComponent from "./Testimonials";
import CertificatesComponent from "./Certificates";

const Main = () => {
	return (
		<div className="text-[#222222] dark:text-white">
			<Header />
			<section className="flex flex-col gap-y-8">
				<BannerComponent />
				<AboutComponent />
				<ExperiencesComponent />
				<TechnologiesComponent />
				<ProjectsComponent />
				<GalleryComponent />
        <TestimonialComponent />
        <CertificatesComponent />
			</section>
		</div>
	);
};

export default Main;
