import { AboutSection } from "../components/HomePage/AboutSection"
import { BannerSection } from "../components/HomePage/BannerSection"
import { ContactSection } from "../components/HomePage/ContactSection"
import { ProjectsSection } from "../components/HomePage/ProjectsSection/ProjectsSection"
import { SkillsSection } from "../components/HomePage/SkillsSection"
import ScrollToTop from "../extra/ScrollToTop"

export const HomePage = () => {
    return(
        <main>
            <BannerSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
            <ScrollToTop/>
        </main>
    )
}