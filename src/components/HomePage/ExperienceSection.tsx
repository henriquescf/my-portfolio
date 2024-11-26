import { BsPersonWorkspace } from "react-icons/bs";
import { AnimationLottie } from "./../../extra/lottie/AnimationLottie.tsx";
import { GlowCard } from '../../extra/GlowCard.js';
import experience from './../../extra/lottie/code.json';
import { useTranslation } from "react-i18next";


export const ExperienceSection = () => {
  
  const[ t ] = useTranslation("global")

  const experiences = t('home.experienceSection.experienceData', { returnObjects: true })
  return (
    <section id="experience-section" className="relative z-50 md:border-t md:border-[#25213b] my-6 lg:my-12">
      <img
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">{t('home.experienceSection.title')}</span>
          <span className="w-24 h-[2px] bg-gradient-to-r from-violet-500 to-transparent"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
              // @ts-ignore
              experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative cursor-default">
                      <img
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};