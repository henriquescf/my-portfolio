import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useIsDarkModeContext } from '../providers/ThemeProvider';
import { useIsLanguagePtContext } from '../providers/LanguageProvider';

export const MainHeader = () => {

    const {darkMode, toggleDarkMode} = useIsDarkModeContext() as any
    const {setLanguagePt, toggleLanguage} = useIsLanguagePtContext() as any
    const[t] = useTranslation("global")

    if(darkMode){
      document.body.classList.add("dark")
    }

    return (
        <header className="flex items-center justify-between py-5">
            <div className="flex gap-5">
                <a className="text-3xl font-black text-black dark:text-[#16f2b3]">HENRIQUE SIQUEIRA</a>
                <div className='flex gap-2 items-center'>
                    <img src="/pt-br.png" className="w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("pt"); setLanguagePt(true)}}/>
                    <img src="/en-uk.png" className="w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("en"); setLanguagePt(false)}}/>
                </div>
            </div>

            <nav className="flex items-center gap-10 text-black dark:text-white">
                <a href="#about-section" className='navOption'>{t("header.a1")}</a>
                <a href="#experience-section" className='navOption'>{t("header.a2")}</a>
                <a href="#skills-section" className='navOption'>{t("header.a3")}</a>
                <a href="#projects-section" className='navOption'>{t("header.a4")}</a>
                <a href="#testimony-section" className='navOption'>{t("header.a5")}</a>
                <a href="#contact-section" className='navOption'>{t("header.a6")}</a>
                <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={24} className="text-black dark:text-white"/>
            </nav>
        </header>

    )
}