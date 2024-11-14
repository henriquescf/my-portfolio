import { useTranslation } from "react-i18next"

export const AboutSection = () => {

    const[ t ] = useTranslation("global")

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-6 lg:my-16 relative items-center mb-20 md:mb-0" id="about-section">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">{t('home.aboutSection.title2')}</span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>

            <div className="flex-col">
                <p className="font-medium mb-5 text-[#6507f9] dark:text-[#16f2b3] text-xl uppercase">{t('home.aboutSection.title')}</p>
                <p className="text-black dark:text-gray-200 text-sm lg:text-lg">{t('home.aboutSection.description')}</p>
            </div>

            <div className="profile_img"></div>
        </section>
    )
}