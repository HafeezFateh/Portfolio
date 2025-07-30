import ProjectCard from "./components/ProjectCard";
import Layout from "./layouts/Layout";

function Portfolio(){
    return(
        <>
            <Layout>
                
                <div className="mx-5 mt-10 flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold text-stone-200">Projects</h1>
                    <div className="mx-5 mt-3 grid gap-5 grid-cols-1 lg:grid-cols-3">
                       
                       <ProjectCard
                        image="./images/eruditex.png"
                        title="Erudite-X website"
                        link="https://erudite-x-static-website.vercel.app/"
                       />
                       <ProjectCard
                        image="./images/townora.png"
                        title="Townora - Web app"
                        link="https://visharam-app.vercel.app/"
                       />
                       <ProjectCard
                        image="./images/cahcet.png"
                        title="CAHCET - Official college website"
                        link="https://cahcet.in/"
                       />
                       <ProjectCard
                        image="./images/stufotech.png"
                        title="StuFoTech - College web app"
                        link="#"
                       />
                       <ProjectCard
                        image="./images/xameedar.png"
                        title="Xameedar - Land buy & sell website"
                        link="https://xameedar-i1kz.vercel.app/"
                       />
                       <ProjectCard
                        image="./images/falah.png"
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