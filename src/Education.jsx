import EduCard from "./components/EduCard";
import Layout from "./layouts/Layout";

function Education(){
    return (
        <>
            <Layout>
                <div className="mx-5 lg:mx-30 mt-20 flex flex-col gap-7">
                    <div className="">
                        <h1 className=" text-xl pb-1 font-semibold text-stone-300 ">Education</h1>
                        <div className="w-[25px] h-[2px] rounded-2xl bg-purple-800 mx-1"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                    <EduCard 
                     degree="B.E - Computer Science and Engineering"
                     year="2020 - 2024"
                     institute="C.Abdul Hakeem college of Engineering and Technology  (Affiliated to Anna University)"
                    />
                    <EduCard
                     degree="Higher Secondary (HSC)"
                     year="2018 - 2020"
                     institute="K.H. Matriculation Boys Higher Secondary School"
                    />
                    <EduCard
                     degree="Secondary (SSLC)"
                     year="2017 - 2018"
                     institute="K.H. Matriculation Boys Higher Secondary School"
                    />
                    <EduCard
                     degree="Primary Education"
                     year="2006 - 2017"
                     institute="K.H. Matriculation Boys Higher Secondary School"
                    />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Education;