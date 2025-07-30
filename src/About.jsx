import Layout from "./layouts/Layout";

function About(){
    return(
        <>
            <Layout>
                <div className="mx-3 lg:mx-30 mt-20">
                    <div className="p-3 flex flex-col gap-3">
                        <div>
                            <h1 className=" text-2xl pb-1 font-semibold text-stone-300 ">About</h1>
                            <div className="w-[25px] h-[2px] rounded-2xl bg-purple-800 "></div>
                        </div>
                        <p className="text-stone-500 text-justify">Hi, I’m Hafeez — a passionate and detail-oriented Software Engineer with a strong foundation in Full Stack Web Development using technologies like React, Node.js, Express, and PostgreSQL. I enjoy turning ideas into real-world applications and thrive in building clean, efficient, and user-focused solutions. Over time, I’ve worked on projects ranging from student management systems to land listing platforms, combining technical skill with creativity and a problem-solving mindset. I'm currently expanding my expertise into Data Science and backend architecture, aiming to build smarter, scalable systems.I believe in continuous learning, writing clean code, and building products that not only work but create meaningful experiences. When I’m not coding, I’m exploring new tech, improving my logic skills, or working on side projects that solve real-world problems.</p>
                    </div>

                    <div className="p-2">
                        <div>
                            <h1 className=" text-xl pb-1 font-semibold text-stone-300 ">Skills</h1>
                            <div className="w-[25px] h-[2px] rounded-2xl bg-purple-800 "></div>
                        </div>
                        <div className="flex lg:justify-center flex-wrap gap-2 text-stone-400 mt-5">
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">Java</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">Python</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">JavaScript</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">HTML</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">CSS</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">TailwindCSS</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">Bootstrap</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">React.js</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">GSAP</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">Node.js</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">Express.js</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">EJS</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">PostgreSQL</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">Authentication</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">Wordpress</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">Git</span>
                            <span className="shadow-lg hover:bg-purple-800/30 bg-purple-500/30 px-2 py-1 rounded-lg">GitHub</span>
                            


                        </div>


                    </div>
                </div>

            </Layout>
        </>
    )
}

export default About;