import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(){
    
    const [open, setOpen] = useState(false);

    const location = useLocation();

   
    const toggleMenu = () => setOpen(prev => !prev);

    return (
        <>
            <div className="mx-3 lg:mx-30 mt-5 bg-gradient-to-br from-violet-800 via-stone-950 shadow-lg to-violet-700 p-[1px] rounded-xl  ">
                <div className="bg-stone-800 rounded-xl p-3 flex items-center justify-between">
                    <Link to='/'><h1 className="font-semibold text-stone-100">Profound X Engineer</h1></Link>
                    <div className="hidden lg:flex gap-3 text-stone-200 flex-1 justify-center">
                        <Link to='/' className={(location.pathname ==='/'? "text-purple-800" : "text-stone-200") +  " hover:text-purple-800"}>Home</Link>
                        <Link to='/about' className={(location.pathname ==='/about'? "text-purple-800" : "text-stone-200") +  " hover:text-purple-800"}>About</Link>
                        <Link to='/portfolio' className={(location.pathname ==='/portfolio'? "text-purple-800" : "text-stone-200") +  " hover:text-purple-800"}>Portfolio</Link>
                        <Link to='/education' className={(location.pathname ==='/education'? "text-purple-800" : "text-stone-200") +  " hover:text-purple-800"}>Education</Link>
                        <Link to='/certifications' className={(location.pathname ==='/certification'? "text-purple-800" : "text-stone-200") +  " hover:text-purple-800"}>Certifications</Link>
                    </div>
                    <Link to='/connect'  className={(location.pathname ==='/connect'? "" : "") +  ""}>
                        <div className="group hidden text-stone-200 rounded-xl bg-purple-900  px-3 py-1 lg:flex items-center justify-center">
                        <p>Connect</p>
                        <span class="material-symbols-outlined group-hover:translate-x-2 transition">arrow_right</span>
                        </div>
                    </Link>
                    <span onClick={toggleMenu} class="text-stone-100 material-symbols-outlined transform scale-x-[-1] lg:hidden"><span className="lg:hidden">{open? 'close': 'sort'}</span></span>
                </div>
            </div>


            { open &&
            
            <div className="mx-3 mt-2 bg-gradient-to-br from-violet-800 via-stone-950 shadow-lg to-violet-700 p-[1px] rounded-lg  ">
                <div className="bg-stone-800 rounded-lg shadow text-stone-200 p-2 flex flex-col gap-1">
                    <Link to='/' className={(location.pathname==='/'? "bg-stone-950/50  p-2 block" : "")+"p-2 block rounded-lg hover:bg-stone-950/50"}>Home</Link>
                    <Link to='/about' className={(location.pathname==='/about'? "bg-stone-950/50  p-2 block" : "")+"p-2 block rounded-lg hover:bg-stone-950/50"}>About</Link>
                    <Link to='/portfolio' className={(location.pathname==='/portfolio'? "bg-stone-950/50  p-2 block" : "")+"p-2 block rounded-lg hover:bg-stone-950/50"}>Portfolio</Link>
                    <Link to='/education' className={(location.pathname==='/education'? "bg-stone-950/50  p-2 block" : "")+"p-2 block rounded-lg hover:bg-stone-950/50"}>Education</Link>
                    <Link to='/certifications' className={(location.pathname==='/certifications'? "bg-stone-950/50  p-2 block" : "")+"p-2 block rounded-lg hover:bg-stone-950/50"}>Certifications</Link>
                    <hr className="text-stone-600 my-2 "/>
                    <Link to='/connect' className={(location.pathname==='/connect'? "bg-stone-950/50  p-2 block" : "")+"p-2 block rounded-lg hover:bg-stone-950/50"}>Connect</Link>
                    
                </div>
            </div>
            }
            

        </>
    )
}

export default Header;