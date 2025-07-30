function EduCard(props){
    return(
        <>
             <div className="border p-4 rounded-xl border-stone-500">
                         <div className="flex mt-2 justify-between text-stone-500">
                            <p className="font-semibold text-stone-100">{props.degree}</p>
                            <p className="text-stone-400">{props.year}</p>
                        </div>
                        <p className="mt-2 text-stone-400">{props.institute}</p>
            </div>
        </>

    )
}

export default EduCard;