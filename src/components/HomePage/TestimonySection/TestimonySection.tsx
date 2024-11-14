import { TestimonyCard } from "./TestimonyCard"
import { useTranslation } from "react-i18next"

export const TestimonySection = () => {

    const[ t ] = useTranslation("global")

    const testimonies = t('home.testimonySection.testimonyData', {returnObjects: true})

    return (
        <section className="py-12 sm:py-16 lg:py-20 mb-12 lg:mb-16" id="testimony-section">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <h2 className="mt-4 text-3xl font-bold text-black dark:text-white sm:text-4xl xl:text-5xl font-pj">{t('home.testimonySection.title')}</h2>
                    </div>

                    <div className="relative mt-10 lg:mt-24 lg:order-2 ">
                        <div className="absolute -inset-x-1 inset-y-16 lg:-inset-x-2 lg:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto lg:max-w-none lg:gap-10 lg:grid-cols-3">
                            {
                            // @ts-ignore
                            testimonies.map(testimony => (
                                <TestimonyCard description={testimony.description} author={testimony.author} job={testimony.job} image={testimony.image} key={testimony.id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}