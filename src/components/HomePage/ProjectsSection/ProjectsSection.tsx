import { projectsData } from "../../../data/projects-data"
import { ProjectsCard } from "./ProjectsCard"

export const ProjectsSection = () => {
    return (
        <section id="projects-section" className="relative z-50 border-t my-12 lg:my-24">
            <div>
                <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
                <div className="flex items-center justify-start relative">
                    <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">PROJECTS</span>
                    <span className="w-full h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <ul className="mt-[3.125rem] flex flex-wrap items-center">
                {projectsData.map((item, index) => {
                    return (
                        <ProjectsCard {...{item}} {...{index}}/>
                    )
                })}
            </ul>
        </section>
    )
}