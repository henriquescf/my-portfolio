import { useTranslation } from "react-i18next";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";

export const MainFooter = () => {

    const [ t ] = useTranslation("global")

    return (
        <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
            <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
                <div className="flex justify-center -z-40">
                    <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
                <p className="text-sm">{t('footer.description')} <a target="_blank" href="https://www.linkedin.com/in/henrique-siqueira-9ba862186/" className="text-[#16f2b3]">Henrique Siqueira</a>
                </p>
                <div className="flex items-center gap-5">
                    <a
                    target="_blank"
                    href="https://github.com/henriquescf"
                    className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
                    >
                    <IoLogoGithub size={20} />
                    </a>

                    <a
                    target="_blank"
                    href="https://www.linkedin.com/in/henrique-siqueira-9ba862186/"
                    className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
                    >
                    <BiLogoLinkedin size={20} />
                    </a>

                    <a
                    target="_blank"
                    href="https://www.instagram.com/h_siq/"
                    className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
                    >
                    <AiFillInstagram />
                    </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}