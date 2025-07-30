import Layout from "./layouts/Layout";

function Home(){
    return(
        <>
            <Layout>
            <div id="hero" className="mx-3 mt-10  p-2 flex flex-col gap-2">
                <h1 className=" text-4xl  bg-gradient-to-br from-stone-100 to-stone-700 text-transparent bg-clip-text">Hi, I'm Hafeez ur Rahman</h1>
                <p className="text-stone-600 text-xl ">I am a Full Stack Web Developer bringing ideas into reality  thereby building responsive, user-focused web applications using modern technologies like React, Node.js, Express, and PostgreSQL. I enjoy turning complex problems into elegant solutions and continuously improving my craft.</p>
            </div>

            <div id="main" className="mx-3 mt-2 p-2 flex flex-col gap-4">
                <h1 className="text-2xl text-stone-300">My Expertise</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="mt-5 mx-5 p-5 border border-stone-700  rounded-xl flex flex-col items-center justify-center">
                        <img src="./images/site.svg" alt="WebApp" className="w-[150px] h-[150px]"/>
                        <h1 className="text-stone-300">Websites</h1>
                    </div>
                    <div className="mt-5 mx-5 p-5 border border-stone-700  rounded-xl flex flex-col items-center justify-center">
                        <img src="./images/app.svg" alt="WebApp" className="w-[150px] h-[150px]"/>
                        <h1 className="text-stone-300">Web Apps</h1>
                    </div>

                     <div className="mt-5 mx-5 p-5 border border-stone-700  rounded-xl flex flex-col items-center justify-center">
                        <img src="./images/ai.svg" alt="WebApp" className="w-[150px] h-[150px]"/>
                        <h1 className="text-stone-300">Aritificial Intelligence</h1>
                    </div>
                </div>
            </div>

            </Layout>

        </>
    )
}

export default Home;