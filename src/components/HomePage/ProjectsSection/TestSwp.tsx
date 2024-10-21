import { Navigation, Pagination, Keyboard} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectsCard } from './ProjectsCard';
import { useTranslation } from 'react-i18next';

export const ProjectsSection = () => {

  const [ t ] = useTranslation("global")
  const projects = t('home.projectsSection.projectsData', {returnObjects: true})

  return (
    <section id="projects-section" className="relative">
      <div>
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-[3%] -translate-x-1/2 filter blur-3xl opacity-30"></div>
          <div className="flex items-center justify-start relative">
              <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">{t('home.projectsSection.title')}</span>
              <span className="w-full h-[2px] bg-[#1a1443]"></span>
          </div>
      </div>

      <ul className="gap-10 mt-12 lg:mt-24">
        <Swiper navigation={true} pagination={{clickable: true}} keyboard={true} modules={[Navigation, Pagination, Keyboard]}>
          {
          // @ts-ignore
          projects.map((project, index) => {
              return (
                  <SwiperSlide key={index}>
                    <ProjectsCard {...{project}} {...{index}} {...{t}}/>
                  </SwiperSlide>
                )
              })}
        </Swiper>
      </ul>
  </section>
  )
}