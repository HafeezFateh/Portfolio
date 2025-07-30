import Layout from "./layouts/Layout";

function Certifications(){
    return(
        <>
            <Layout>
                <div className="mx-3 mt-20 lg:mx-30">
                    <div className="p-3">
                        <h1 className=" text-xl pb-1 font-semibold text-stone-300 ">Certifications</h1>
                        <div className="w-[30px] h-[2px] rounded-2xl bg-purple-800 mx-1"></div>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-5 lg:grid-cols-2 mx-5">
                        <div className="rounded-xl border border-stone-700 shadow-xl p-2">
                            <img src="/udemy.jpg" className="rounded-t-xl" alt="" />
                            <div className="p-1">
                                <h1 className="text-xl font-semibold text-stone-300">Full Stack Web development</h1>
                                <p className="text-stone-400">Completed a course in FSWD from Udemy</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-stone-700 shadow-xl p-2">
                            <img src="/datascience.png" className="rounded-t-xl" alt="" />
                            <div className="p-1 mt-2">
                                <h1 className="text-xl font-semibold text-stone-300">Data Science internship</h1>
                                <p className="text-stone-400">Completed internship in Data Science from Skill Vertex</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Certifications;