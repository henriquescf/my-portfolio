export const ProjectsCard = (props: any) => {

    return (

        <li className="flex overflow-hidden max-w-[60rem] rounded-lg items-center m-auto gap-12">
            <img className="rounded-t-lg w-[23.875rem] h-[14.625rem]" src={props.project.image} alt="project-img" />

            {/* Right Side */}
            <div className="flex flex-col gap-2">
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-black dark:text-[#16f2b3]">{props.project.title}</h3>
                <p className="mb-3 font-normal text-black dark:text-white mt-3">{props.project.description}</p>
                <a href={props.project.link} className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6507f9] rounded-lg hover:opacity-[.9] focus:outline-none">
                    {props.t('home.projectsSection.b1')}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </li>
    )
}