import ProjectCard from "./components/ProjectCard";
import Layout from "./layouts/Layout";

function Portfolio(){
    return(
        <>
            <Layout>
                
                <div className="mx-5 lg:mx-30 mt-20 flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold text-stone-200">Projects</h1>
                    <div className="mx-5 mt-3 grid gap-5 grid-cols-1 lg:grid-cols-3">
                       
                       <ProjectCard
                        image="/eruditex.png"
                        title="Erudite-X website"
                        link="https://erudite-x-static-website.vercel.app/"
                       />
                       <ProjectCard
                        image="/townora.png"
                        title="Townora - Web app"
                        link="https://visharam-app.vercel.app/"
                       />
                       <ProjectCard
                        image="/cahcet.png"
                        title="CAHCET - Official college website"
                        link="https://cahcet.in/"
                       />
                       <ProjectCard
                        image="/stufotech.png"
                        title="StuFoTech - College web app"
                        link="#"
                       />
                       <ProjectCard
                        image="/xameedar.png"
                        title="Xameedar - Land buy & sell website"
                        link="https://xameedar-i1kz.vercel.app/"
                       />
                       <ProjectCard
                        image="/falah.png"
                        title="Al Falah - NGO website"
                        link="https://al-falah-foundation-f6fv.vercel.app/"
                       />
                     
                       
                       

                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Portfolio;