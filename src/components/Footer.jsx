function Footer(){
    return(
        <>
            <div className="flex flex-col gap-3 justify-center  items-center p-10  lg:mx-30 mt-20 lg:mt-20  lg:rounded-xl lg:my-3 bg-stone-800">
                <h1 className="text-stone-400 font-semibold">Profound <span className="font-semibold">X</span> Engineer</h1>
                <div className="flex gap-3">
                    <a href="https://www.instagram.com/hafeezfateh08/"><img src="/instagram.png" alt="" className="w-[25px] h-[25px]  invert brightness-0" style={{filter: 'brightness(0) saturate(100%) invert(92%) sepia(6%) saturate(205%) hue-rotate(186deg) brightness(96%) contrast(92%)' }}/></a>
                    <a href="https://www.linkedin.com/in/%F0%9D%90%87%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E%F0%9D%90%9E%F0%9D%90%B3%F0%9D%90%AE%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9A%F0%9D%90%A1%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%A7-18843b1b2/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BaDGzElQ%2BR9%2BflZCJBZppmw%3D%3D"><img src="/linkedin.png" alt="" className="w-[25px] h-[25px]  invert brightness-0" style={{filter: 'brightness(0) saturate(100%) invert(92%) sepia(6%) saturate(205%) hue-rotate(186deg) brightness(96%) contrast(92%)' }}/></a>
                    <a href="https://github.com/HafeezFateh"><img src="/github.png" alt="" className="w-[25px] h-[25px]  invert brightness-0" style={{filter: 'brightness(0) saturate(100%) invert(92%) sepia(6%) saturate(205%) hue-rotate(186deg) brightness(96%) contrast(92%)' }}/></a>
                </div>
            </div>
        </>
    )
}

export default Footer;