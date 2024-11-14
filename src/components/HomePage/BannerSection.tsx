import { useTranslation } from 'react-i18next';
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { ReactTyped } from 'react-typed';

export const BannerSection = () => {
    const[ t ] = useTranslation("global")

    return(
        <section className='grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 my-6 md:my-12 text-black dark:text-white'>
            <div className='order-2 lg:order-1 flex flex-col items-start justify-center p-0 md:p-2 pb-10 lg:pt-10 text-2xl lg:text-3xl gap-10'>
                <p className='font-extrabold'>
                    {t("home.bannerSection.welcome.introduction")}
                    <br/>
                    <ReactTyped
                        strings={[
                            'Full Stack Developer'
                        ]}
                        typeSpeed={100}
                        className='text-[#6507f9] dark:text-[#16f2b3]'
                    />
                </p>

                <p className='text-lg lg:text-xl'>{t("home.bannerSection.welcome.description")}</p>

                <div className="flex items-center gap-5">
                    <a className="px-3 lg:px-8 py-3 lg:py-4 text-center text-xs lg:text-sm font-medium uppercase tracking-wider text-white lg:font-semibold main-button flex gap-2" href="#contact-section">
                        <span>{t("home.bannerSection.welcome.b1")}</span>
                        <RiContactsFill size={16} className='mt-[0.125rem]'/>
                    </a>

                    <a className="px-3 lg:px-8 py-3 lg:py-4 text-center text-xs lg:text-sm font-medium uppercase tracking-wider text-white  lg:font-semibold main-button flex gap-2" href='/src/assets/files/curriculodev_henriquesiqueira.pdf' target='_blank'>
                        <span>{t("home.bannerSection.welcome.b2")}</span>
                        <MdDownload size={16} className='mt-[0.125rem]'/>
                    </a>
                </div>
            </div>

            <div className='order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]'>
                <div className='flex flex-row'>
                    <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600'></div>
                    <div className='h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent'></div>
                </div>

                <div className='px-4 lg:px-8 py-5'>
                    <div className='flex flex-row space-x-2'>
                        <div className='h-3 w-3 rounded-full bg-red-400'></div>
                        <div className='h-3 w-3 rounded-full bg-orange-400'></div>
                        <div className='h-3 w-3 rounded-full bg-green-400'></div>
                    </div>
                </div>

                <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8'>
                    <code className='font-mono text-xs lg:text-sm'>
                        <p>
                            <span className='mr-2 text-pink-500'>const</span>
                            <span className='mr-2 text-white'>coder</span>
                            <span className='mr-2 text-pink-500'>=</span>
                            <span className='text-gray-400'>{`{`}</span>
                        </p>

                        <p>
                            <span className='ml-4 lg:ml-8 mr-2 text-white'>{t("home.bannerSection.code.name")}:</span>
                            <span className='text-gray-400'>'</span>
                            <span className='text-amber-300'>Henrique Siqueira</span>
                            <span className='text-gray-400'>',</span>
                        </p>

                        <p className='ml-4 lg:ml-8 mr-2'>
                            <span className=" text-white">{t("home.bannerSection.code.skills")}:</span>
                            <span className="text-gray-400">{` ['`}</span>
                            <span className="text-amber-300">React</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">Javascript</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">Typescript</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">NextJS</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">Express</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">Prisma</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">PostgreSQL</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">Python</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">Django</span>
                            <span className="text-gray-400">', '</span>
                            <span className="text-amber-300">TailwindCSS</span>
                            <span className="text-gray-400">{`'],`}</span>
                        </p>

                        <p>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">{t("home.bannerSection.code.hardworker")}:</span>
                            <span className="text-orange-400">{t("home.bannerSection.code.true")}</span>
                            <span className="text-gray-400">,</span>
                        </p>

                        <p>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">{t("home.bannerSection.code.quicklearner")}:</span>
                            <span className="text-orange-400">{t("home.bannerSection.code.true")}</span>
                            <span className="text-gray-400">,</span>
                        </p>

                        <p>
                            <span className="ml-4 lg:ml-8 mr-2 text-white">{t("home.bannerSection.code.problemsolver")}:</span>
                            <span className="text-orange-400">{t("home.bannerSection.code.true")}</span>
                            <span className="text-gray-400">,</span>
                        </p>

                        <p>
                            <span className="ml-4 lg:ml-8 mr-2 text-green-400">{t("home.bannerSection.code.hireable")}:</span>
                            <span className="text-orange-400">function</span>
                            <span className="text-gray-400">{`() {`}</span>
                        </p>

                        <p>
                            <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                            <span className="text-gray-400">{`(`}</span>
                        </p>

                        <p>
                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                            <span className="mr-2 text-white">{t("home.bannerSection.code.hardworker")}</span>
                            <span className="text-amber-300">&amp;&amp;</span>
                        </p>

                        <p>
                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                            <span className="mr-2 text-white">{t("home.bannerSection.code.problemsolver")}</span>
                            <span className="text-amber-300">&amp;&amp;</span>
                        </p>
                        
                        <p>
                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                            <span className="mr-2 text-white">{t("home.bannerSection.code.skills")}.length</span>
                            <span className="mr-2 text-amber-300">&gt;=</span>
                            <span className="text-orange-400">5</span>
                        </p>

                        <p>
                            <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                        </p>

                        <p>
                            <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                        </p>

                        <p>
                            <span className="text-gray-400">{`};`}</span>
                        </p>
                    </code>
                </div>
            </div>
        </section>
    )
}