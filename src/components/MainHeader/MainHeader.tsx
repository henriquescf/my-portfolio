import { useIsDarkModeContext } from '../../providers/ThemeProvider';
import { useIsLanguagePtContext } from '../../providers/LanguageProvider';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const MainHeader = () => {

    const {darkMode, toggleDarkMode} = useIsDarkModeContext() as any
    const {setLanguagePt, toggleLanguage} = useIsLanguagePtContext() as any

    if(darkMode){
      document.body.classList.add("dark")
    }

    return (
        <>
        <header className="flex items-center justify-between py-5 relative flex-wrap gap-5">
            <img src="main.svg" className="absolute top-[0rem] -z-10"/>
            <div className="flex gap-10 lg:gap-5 items-center justify-start">
                <span className="text-xl lg:text-3xl font-black text-black dark:text-[#16f2b3] w-min lg:w-auto">HENRIQUE SIQUEIRA</span>
                <div className='flex gap-2 items-center'>
                    <img src="/pt-br.png" className="min-w-9 max-w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("pt"); setLanguagePt(true)}}/>
                    <img src="/en-uk.png" className="min-w-9 max-w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("en"); setLanguagePt(false)}}/>
                </div>
            </div>

            <div className='flex items-center lg:gap-10 justify-between flex-1 lg:flex-initial'>
                <DesktopMenu/>
                <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} className="text-black dark:text-white size-8 lg:size-6 lg:-mt-1 ml-2 lg:ml-0"/>
                <MobileMenu {...{darkMode}}/>
            </div>
        </header>
        <div className="backdrop"></div>
        </>

    )
}