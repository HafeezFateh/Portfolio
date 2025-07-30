function Footer(){
    return(
        <>
            <div className="flex flex-col gap-3 justify-center  items-center p-10  lg:mx-30 mt-20 lg:mt-20  lg:rounded-xl lg:my-3 bg-stone-800">
                <h1 className="text-stone-400 font-semibold">Profound <span className="font-semibold">X</span> Engineer</h1>
                <div className="flex gap-3">
                    <a href=""><img src="/instagram.png" alt="" className="w-[25px] h-[25px]  invert brightness-0" style={{filter: 'brightness(0) saturate(100%) invert(92%) sepia(6%) saturate(205%) hue-rotate(186deg) brightness(96%) contrast(92%)' }}/></a>
                    <a href=""><img src="/linkedin.png" alt="" className="w-[25px] h-[25px]  invert brightness-0" style={{filter: 'brightness(0) saturate(100%) invert(92%) sepia(6%) saturate(205%) hue-rotate(186deg) brightness(96%) contrast(92%)' }}/></a>
                    <a href=""><img src="/github.png" alt="" className="w-[25px] h-[25px]  invert brightness-0" style={{filter: 'brightness(0) saturate(100%) invert(92%) sepia(6%) saturate(205%) hue-rotate(186deg) brightness(96%) contrast(92%)' }}/></a>
                </div>
            </div>
        </>
    )
}

export default Footer;