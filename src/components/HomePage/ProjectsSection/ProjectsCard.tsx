export const ProjectsCard = (props: any) => {

    return (

        <li className="flex flex-col overflow-hidden max-w-sm bg-[#11152c] border-[0.0625rem] border-[rgba(0,0,0,.1)] rounded-lg shadow relative">
            <div className="flex flex-col flex-1">
                <img className="rounded-t-lg w-[23.875rem] h-[14.625rem]" src={props.project.image} alt="project-img" />
                <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#16f2b3] px-3 mt-3">{props.project.title}</h3>
                <p className="mb-3 font-normal text-white px-3 mt-3">{props.project.description}</p>
            </div>

            <div className="flex items-center mt-8 p-3">
                <a href={props.project.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#11152c] bg-[#16f2b3] rounded-lg hover:opacity-[.9] focus:outline-none">
                    {props.t('home.projectsSection.b1')}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </li>
    )
}