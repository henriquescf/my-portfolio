import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { useIsDarkModeContext } from "../../providers/ThemeProvider"
import { useIsLanguagePtContext } from "../../providers/LanguageProvider"
import Hamburger from 'hamburger-react';
import { useState } from 'react';

export const MainHeader = () => {

    const {darkMode, toggleDarkMode} = useIsDarkModeContext() as any
    const {setLanguagePt, toggleLanguage} = useIsLanguagePtContext() as any
    const [isOpen, setOpen] = useState(false)

    if(darkMode){
      document.body.classList.add("dark")
    }

    return (
        <>
        <header className="flex items-center justify-between py-5 relative flex-wrap gap-5">
            <img src="main.svg" className="absolute top-[0rem] -z-10"/>
            <div className="flex gap-10 lg:gap-5 items-center justify-start">
                <span className="text-xl lg:text-3xl font-black text-black dark:text-[#16f2b3] lg:w-auto">HENRIQUE SIQUEIRA</span>
                <div className='hidden lg:flex gap-2 items-center'>
                    <img src="/pt-br.png" className="min-w-9 max-w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("pt"); setLanguagePt(true)}}/>
                    <img src="/en-uk.png" className="min-w-9 max-w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("en"); setLanguagePt(false)}}/>
                </div>
            </div>

            <DesktopMenu {...{darkMode, toggleDarkMode}}/>
            <MobileMenu {...{darkMode, toggleDarkMode, setLanguagePt, toggleLanguage, isOpen, setOpen}}/>

            <div className='flex lg:hidden z-[9999]'>
                <Hamburger toggled={isOpen} toggle={setOpen} size={32} color={darkMode ? "white" : "black"}/>
            </div>
        </header>
        <div className="backdrop"></div>
        </>

    )
}