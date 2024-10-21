import { AboutSection } from "../components/HomePage/AboutSection"
import { BannerSection } from "../components/HomePage/BannerSection"
import { ContactSection } from "../components/HomePage/ContactSection"
import { ExperienceSection } from "../components/HomePage/ExperienceSection"
import { ProjectsSection } from "../components/HomePage/ProjectsSection/TestSwp"
import { SkillsSection } from "../components/HomePage/SkillsSection"
import { TestimonySection } from "../components/HomePage/TestimonySection/TestimonySection"
import ScrollToTop from "../extra/ScrollToTop"

export const HomePage = () => {

    return(
        <main>
            <BannerSection/>
            <AboutSection/>
            <ExperienceSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <TestimonySection/>
            <ContactSection/>
            <ScrollToTop/>
        </main>
    )
}