import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { SiStyleshare } from "react-icons/si";
import { MdPlayLesson } from "react-icons/md";
import { useEffect, useRef } from "react";
import { useClickAway } from "react-use";
import { useTranslation } from "react-i18next";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const MobileMenu = ({darkMode, toggleDarkMode, setLanguagePt, toggleLanguage, setOpen, isOpen}: any) => {

    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));

    useEffect(() => {
        const backdrop = document.querySelector(".backdrop")
        const html = (document.querySelector("html") as HTMLElement)
        if(isOpen){
            html.style.overflow = "hidden"
            backdrop?.classList.add("backdrop-blur")
        } else{
            html.style.overflow = "auto"
            backdrop?.classList.remove("backdrop-blur")
        }
    })

    const[t] = useTranslation("global")


    return(
        <>
            <div className="lg:hidden blur-except flex items-center flex-col">
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="shadow-4xl right-0 top-0 dark:bg-[#0d1224] bg-white text-black dark:text-white w-[72%] min-h-full fixed pl-1">
                        <div className="flex z-[9] relative top-6 pl-3 justify-between items-center border-b-2 pb-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-xl lg:text-3xl font-black text-black dark:text-[#16f2b3] lg:w-auto">Henrique Siqueira</span>
                                <div className='flex gap-2 items-center'>
                                    <img src="/pt-br.png" className="min-w-9 max-w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("pt"); setLanguagePt(true)}}/>
                                    <img src="/en-uk.png" className="min-w-9 max-w-9 hover:opacity-[.9] cursor-pointer" onClick={() => {toggleLanguage("en"); setLanguagePt(false)}}/>
                                    <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} className="text-black dark:text-white size-8 lg:size-6 lg:-mt-1 ml-2 lg:ml-0"/>
                                </div>
                            </div>
                        </div>
                            
                            
                            <nav className="flex flex-col *:pl-1 *:text-[1.375rem] *:flex *:items-center gap-4 mt-12">
                                <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.1}} className="w-auto p-[0.08rem] rounded-xl ml-2 gap-3">
                                    <FaHome color="#DD710F"/>
                                    <a href="#about-section">{t("header.a1")}</a>
                                </motion.li>

                                <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.2}} className="w-auto p-[0.08rem] rounded-xl ml-2 flex items-center gap-3">
                                    <SiStyleshare color="#DD710F"/>
                                    <a href="#experience-section">{t("header.a2")}</a>
                                </motion.li>

                                <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.3}} className="w-auto p-[0.08rem] rounded-xl ml-2 gap-3">
                                    <FaBook color="#DD710F"/>
                                    <a href="#skills-section">{t("header.a3")}</a>
                                </motion.li>

                                <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.3}} className="w-auto p-[0.08rem] rounded-xl ml-2 gap-3">
                                    <FaBook color="#DD710F"/>
                                    <a href="#projects-section">{t("header.a4")}</a>
                                </motion.li>

                                <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.3}} className="w-auto p-[0.08rem] rounded-xl ml-2 gap-3">
                                    <FaBook color="#DD710F"/>
                                    <a href="#testimony-section">{t("header.a5")}</a>
                                </motion.li>


                                <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.4}} className="w-[90%] p-[0.08rem] rounded-xl ml-2 bg-[linear-gradient(90deg,_hsla(29,_87%,_46%,_1)_5%,_hsla(0,_0%,_100%,_1)_100%)] gap-3">
                                    <MdPlayLesson color="white"/>
                                    <a href="#contact-section">{t("header.a6")}</a>
                                </motion.li>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}