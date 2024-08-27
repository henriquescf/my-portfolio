import { FaArrowRight } from "react-icons/fa6";

export const ProjectsCard = (props: any) => {
    return (
        <li key={props.index} className="flex flex-col gap-3 w-[21.0625rem] bg-[#11152c] rounded-[1rem] border-solid border-[0.0625rem] border-[rgba(0,0,0,.1)] mx-5 mt-10 h-[23.4375rem]">
            <img src={props.item.image} alt="card-image" className="max-h-[14.0625rem] w-full h-[14.0625rem] rounded-t-[1rem] mb-[0.625rem]"/>
            <h3 className="font-semibold px-[1.25rem] text-[#16f2b3]">{props.item.title}</h3>
            <p className="px-[1.25rem]">{props.item.description}</p>
            <a href={props.item.link} target="_blank" className="flex items-center gap-3 project__button text-[0.875rem] px-[1.25rem] mb-10">Demo <FaArrowRight size={12} className="project__button-icon" /></a>
        </li>
    )
}