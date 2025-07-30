import Layout from "./layouts/Layout";

function Home(){
    return(
        <>
            <Layout>
            <div id="hero" className="mx-3 lg:mx-30 mt-20  p-2 flex flex-col lg:items-center gap-2">
                <h1 className=" text-4xl  bg-gradient-to-br from-stone-100 to-stone-600 text-transparent bg-clip-text">Hi, I'm Hafeez ur Rahman</h1>
                <p className="text-stone-600 text-xl lg:text-center max-w-[1000px]">I am a Full Stack Web Developer bringing ideas into reality  thereby building responsive, user-focused web applications using modern technologies like React, Node.js, Express, and PostgreSQL. I enjoy turning complex problems into elegant solutions and continuously improving my craft.</p>
            </div>
            <div className="h-[70px] bg-gradient-to-b from-stone-900 to-stone-950/50"></div>
            <div id="main" className="p-2 flex flex-col gap-4 bg-stone-950/50">
                <h1 className="mx-3 lg:mx-30 text-2xl text-stone-300">My Expertise</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:mx-30">
                    <div className="mt-5 mx-5 p-5 border border-stone-700 bg-stone-800/30  rounded-xl flex flex-col items-center justify-center">
                        <img src="/site.svg" alt="WebApp" className="w-[150px] h-[150px]"/>
                        <h1 className="font-semibold text-stone-300">Websites</h1>
                    </div>
                    <div className="mt-5 mx-5 p-5 border border-stone-700 bg-stone-800/30 rounded-xl flex flex-col items-center justify-center">
                        <img src="/app.svg" alt="WebApp" className="w-[150px] h-[150px]"/>
                        <h1 className="font-semibold text-stone-300">Web Apps</h1>
                    </div>

                     <div className="mt-5 mx-5 p-5 border border-stone-700 bg-stone-800/30 rounded-xl flex flex-col items-center justify-center">
                        <img src="/ai.svg" alt="WebApp" className="w-[150px] h-[150px]"/>
                        <h1 className="font-semibold text-stone-300">Aritificial Intelligence</h1>
                    </div>
                </div>
                
            </div>
            <div className="bg-gradient-to-b from-stone-950/50 to-stone-900 h-[100px]"></div>

            </Layout>

        </>
    )
}

export default Home;