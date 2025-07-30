function ProjectCard(props){
    return(
        <>
            <a href={props.link}>
                <div className="border border-stone-500 shadow rounded-xl  hover:scale-101">
                        <img src={props.image} alt="" className="rounded-t-xl"/>
                        <div className="flex justify-center">
                            <h1 className="text-lg font-semibold text-stone-400 p-4">{props.title}</h1>
                        </div>
                </div>
            </a>
        </>
    )
}

export default ProjectCard;