import { TestimonyStars } from "./TestimonyStars"

export const TestimonyCard = ({description, author, job, image}: any) => {
    return (
        <div className="flex flex-col overflow-hidden shadow-xl">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                    <TestimonyStars/>
                    <blockquote className="flex-1 mt-8">
                        <p className="text-sm lg:text-lg leading-relaxed text-gray-900">{description}</p>
                    </blockquote>
                </div>

                <div className="flex items-center mt-8">
                    <img className="object-cover rounded-full w-11 h-11" src={image} alt="author-img" />
                    <div className="ml-4">
                        <p className="text-sm lg:text-base font-bold text-gray-900">{author}</p>
                        <p className="mt-0.5 text-xs lg:text-sm text-gray-600">{job}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}