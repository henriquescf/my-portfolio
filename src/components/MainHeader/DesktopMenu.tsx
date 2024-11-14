import { useTranslation } from "react-i18next"

export const DesktopMenu = () => {
    const[t] = useTranslation("global")
    return(
        <nav className="hidden lg:flex items-center gap-10 text-black dark:text-white desktop__nav">
            <a href="#about-section" className='navOption'>{t("header.a1")}</a>
            <a href="#experience-section" className='navOption'>{t("header.a2")}</a>
            <a href="#skills-section" className='navOption'>{t("header.a3")}</a>
            <a href="#projects-section" className='navOption'>{t("header.a4")}</a>
            <a href="#testimony-section" className='navOption'>{t("header.a5")}</a>
            <a href="#contact-section" className='navOption'>{t("header.a6")}</a>
        </nav>
    )
}