import { useTranslation } from "react-i18next"
import { DarkModeSwitch } from "react-toggle-dark-mode"

export const DesktopMenu = ({darkMode, toggleDarkMode}: any) => {

    const[t] = useTranslation("global")
    return(
        <>
        <nav className="hidden lg:flex items-center gap-10 text-black dark:text-white desktop__nav">
            <a href="#about-section" className='navOption'>{t("header.a1")}</a>
            <a href="#experience-section" className='navOption'>{t("header.a2")}</a>
            <a href="#skills-section" className='navOption'>{t("header.a3")}</a>
            <a href="#projects-section" className='navOption'>{t("header.a4")}</a>
            <a href="#testimony-section" className='navOption'>{t("header.a5")}</a>
            <a href="#contact-section" className='navOption'>{t("header.a6")}</a>
            <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} className="text-black dark:text-white size-8 lg:size-6 lg:-mt-1 ml-2 lg:ml-0 hidden lg:flex"/>
        </nav>
        </>
    )
}