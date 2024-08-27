import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useIsDarkModeContext } from '../providers/ThemeProvider';
import { useIsLanguagePtContext } from '../providers/LanguageProvider';

export const MainHeader = () => {

    const {isDarkMode, setDarkMode} = useIsDarkModeContext() as any
    const {setLanguagePt} = useIsLanguagePtContext() as any
    const[t, i18n] = useTranslation("global")

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    const toggleLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header className="flex items-center justify-between py-5">
            <div className="flex flex-col gap-2">
                <a className={`text-3xl font-black ${isDarkMode ? "text-[#16f2b3]" : "black"}`}>HENRIQUE SIQUEIRA</a>
                <div className='flex gap-2'>
                    <img src="/pt-br.png" className="w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("pt"); setLanguagePt(true)}}/>
                    <img src="/en-uk.png" className="w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("en"); setLanguagePt(false)}}/>
                </div>
            </div>

            <nav className="flex items-center gap-10">
                <a href="#about-section" className='navOption'>{t("header.a1")}</a>
                <a className='navOption'>{t("header.a2")}</a>
                <a className='navOption'>{t("header.a3")}</a>
                <a className='navOption'>{t("header.a4")}</a>
                <a className='navOption'>{t("header.a5")}</a>
                <a className='navOption'>{t("header.a6")}</a>
                <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={24} color='var(--primary-text-color)' className='-mt-1'/>
            </nav>
        </header>

    )
}