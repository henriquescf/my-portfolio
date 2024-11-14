import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { SiStyleshare } from "react-icons/si";
import { MdPlayLesson } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { useTranslation } from "react-i18next";

export const MobileMenu = ({darkMode}: any) => {

    const [isOpen, setOpen] = useState(false)
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
            <div className="lg:hidden blur-except flex items-center w-fit">
                {isOpen && (
                    <div className="flex items-center gap-[0.4375rem]">
                        <img src="/favicon.png" className="w-[100%] h-[2rem]" alt="logo"/>
                    </div>
                )}

                <Hamburger toggled={isOpen} toggle={setOpen} size={32} color={darkMode ? "white" : "black"}/>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="shadow-4xl right-0 top-[6rem] bg-white w-[72%] min-h-full absolute px-4">
                            <nav className="flex flex-col *:pl-[0.625rem] *:text-[1.375rem] *:flex *:items-center pt-4 gap-4">
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


                                <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.4}} className="w-auto p-[0.08rem] rounded-xl ml-2 bg-[linear-gradient(90deg,_hsla(29,_87%,_46%,_1)_5%,_hsla(0,_0%,_100%,_1)_100%)] gap-3">
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