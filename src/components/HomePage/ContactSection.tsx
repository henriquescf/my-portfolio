import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RiErrorWarningFill } from "react-icons/ri";
import { toast } from "react-toastify"
import { contactUsSheet } from "../../services/contactUsSheet.tsx";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaStackOverflow } from "react-icons/fa";
import { TbMailForward } from "react-icons/tb";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { personalData } from "../../data/personalData.ts";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {

    const contactSchema = z.object({
        name: z.string().min(1, "Por favor, preencha o campo."),
        email: z.string().email("Por favor, insira um endereço de email válido."),
        message: z.string().min(1, "Por favor, preencha o campo.")
    })

    const {register, reset, handleSubmit, formState: {errors}}: any = useForm({resolver: zodResolver(contactSchema)})

    const contactSubmit = (data: any) => {
        contactUsSheet(data)
        reset()
        toast.success("Sua mensagem foi enviada com sucesso!")
    }

    const [ t ] = useTranslation("global")

    return (
        <section id="contact-section">
            <p className="font-medium inline-block bg-clip-text text-transparent bg-[linear-gradient(266.11deg,_#ec4899_32.06%,_#7c3aed_63.03%)] dark:text-white text-xl uppercase w-full text-center lg:text-start">{t('home.contactSection.title')}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-6 lg:my-16 relative items-center">
                <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                    <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">CONTACT</span>
                    <span className="h-36 w-[2px] bg-[#1a1443]"></span>
                </div>

                <div className="flex gap-[2.8125rem] justify-center lg:justify-normal border border-white p-5 md:p-3 lg:p-5 rounded-lg">

                    {/* Left Side*/}
                    <form className="flex flex-col w-[80vw] lg:w-[50vw] gap-[2.4375rem] justify-center items-center lg:items-stretch" onSubmit={handleSubmit(contactSubmit)} id="contactForm">
                        <div className="relative">
                            <input type="text" id="name_input" className="px-3.5 pb-2.5 pt-6 w-[80vw] lg:w-full text-xl text-[rgba(73,_73,_73,_1)] bg-white rounded-lg border-[0.125rem] border-[rgba(208,_214,_221,_1)] appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " {...register("name")}/>

                            <label htmlFor="name_input" className="absolute text-sm text-[rgba(158,_158,_158,_1)] duration-300 transform -translate-y-4 scale-75 top-2 z-10 left-3 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-100 start-1 text-[1.875rem] peer-focus:cursor-default cursor-text">{t('home.contactSection.i1')}</label>
                        </div>
                        {errors.name &&
                        <div className="mt-[-1.25rem] flex gap-2 items-center">
                            <RiErrorWarningFill size={24} color="#e97b19"/>
                            <span className="text-[rgba(67,_67,_67,_1)] dark:text-white">{errors.name.message}</span>
                        </div>
                        }

                        <div className="relative">
                            <input type="text" id="email_input" className="px-3.5 pb-2.5 pt-6 w-[80vw] lg:w-full text-xl text-[rgba(73,_73,_73,_1)] bg-white rounded-lg border-[0.125rem] border-[rgba(208,_214,_221,_1)] appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " {...register("email")}/>

                            <label htmlFor="email_input" className="absolute text-sm text-[rgba(158,_158,_158,_1)] duration-300 transform -translate-y-4 scale-75 top-2 z-10 left-3 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-100 start-1 text-[1.875rem] peer-focus:cursor-default cursor-text">{t('home.contactSection.i2')}</label>
                        </div>
                        {errors.email &&
                        <div className="mt-[-1.25rem] flex gap-2 items-center">
                            <RiErrorWarningFill size={24} color="#e97b19"/>
                            <span className="text-[rgba(67,_67,_67,_1)] dark:text-white">{errors.email.message}</span>
                        </div>
                        }

                        <div className="relative">
                            <textarea rows={window.innerWidth <= 768 ? 4 : 10} id="message_input" className="px-3.5 pb-2.5 pt-6 w-[80vw] lg:w-full text-xl text-[rgba(73,_73,_73,_1)] bg-white rounded-lg border-[0.125rem] border-[rgba(208,_214,_221,_1)] appearance-none focus:outline-none focus:ring-0 peer resize-none" placeholder=" " {...register("message")}/>

                            <label htmlFor="message_input" className="absolute text-sm text-[rgba(158,_158,_158,_1)] duration-300 transform -translate-y-4 scale-75 top-2 z-10 left-3 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-10 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-100 start-1 text-[1.875rem] peer-focus:cursor-default cursor-text">{t('home.contactSection.i3')}</label>
                        </div>
                        {errors.message &&
                        <div className="mt-[-1.25rem] flex gap-2 items-center">
                            <RiErrorWarningFill size={24} color="#e97b19"/>
                            <span className="text-[rgba(67,_67,_67,_1)] dark:text-white">{errors.message.message}</span>
                        </div>
                        }

                        <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 lg:px-12 py-2.5 lg:py-3 text-center text-xs lg:text-sm font-medium uppercase tracking-wider text-white no-underline hover:text-white hover:no-underline lg:font-semibold w-fit hover:opacity-[.9]">
                            <span>{t('home.contactSection.b1')}</span>
                            <TbMailForward className="mt-[0.1875rem]" size={18} />
                        </button>
                    </form>
                </div>

                {/* Right Side */}
                <div className="lg:w-3/4 text-black dark:text-white">
                    <div className="flex flex-col gap-5 lg:gap-9">
                        <p className="text-sm lg:text-xl flex items-center gap-3">
                        <MdAlternateEmail
                            className="bg-[#8b98a5] p-2 rounded-full hover:bg-opacity-[.7] dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                            size={36}
                        />
                        <span>{personalData.email}</span>
                        </p>
                        <p className="text-sm lg:text-xl flex items-center gap-3">
                        <IoMdCall
                            className="bg-[#8b98a5] p-2 rounded-full hover:bg-opacity-[.7] dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                            size={36}
                        />
                        <span>
                            {personalData.phone}
                        </span>
                        </p>
                        <p className="text-sm lg:text-xl flex items-center gap-3">
                        <CiLocationOn
                            className="bg-[#8b98a5] p-2 rounded-full hover:bg-opacity-[.7] dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                            size={36}
                        />
                        <span>
                            {personalData.address}
                        </span>
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                        <a target="_blank" href={personalData.github}>
                        <IoLogoGithub
                            className="bg-[#8b98a5] p-3 rounded-full hover:bg-opacity-[.7] dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                            size={48}
                        />
                        </a>
                        <a target="_blank" href={personalData.linkedIn}>
                        <BiLogoLinkedin
                            className="bg-[#8b98a5] p-3 rounded-full hover:bg-opacity-[.7] dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                            size={48}
                        />
                        </a>
                        <a target="_blank" href={personalData.stackOverflow}>
                        <FaStackOverflow
                            className="bg-[#8b98a5] p-3 rounded-full hover:bg-opacity-[.7] dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                            size={48}
                        />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}