import Layout from "./layouts/Layout";


function Connect(){
    return(
        <>
            <Layout>

                <div className="mx-3 lg:mx-30">
                    <div className="p-3">
                        <h1 className="mt-20 text-2xl font-semibold text-stone-200">Contact</h1>
                        <div className="w-[30px] h-[3px] mx-1  rounded-2xl bg-purple-500"></div>
                    </div>
                   
                    <form action="https://formsubmit.co/hafeezofficial08@gmail.com" method="POST" className="flex flex-col gap-3  p-3">
                        <label htmlFor="" className="text-xl text-stone-300">Name</label>
                        <input type="text" name="name" className="bg-stone-500/30 text-stone-300 rounded-md p-1 focus:outline-0" />
                        <label htmlFor=""  className="text-xl text-stone-300">Email</label>
                        <input type="email" name="email" className="bg-stone-500/30 text-stone-300 rounded-md p-1 focus:outline-0" />
                        <label htmlFor="" className="text-xl text-stone-300">Message</label>
                        <textarea type="text" name="message" className="bg-stone-500/30 text-stone-300 rounded-md p-1 focus:outline-0"></textarea>
                        <div className="flex justify-end">
                            <input type="submit" className="px-10 py-1 font-semibold mt-2 rounded-md shadow-lg bg-stone-300 hover:bg-stone-300/80 text-stone-900" />

                        </div>
                    </form>

                </div>

            </Layout>
        </>
    )
}

export default Connect;