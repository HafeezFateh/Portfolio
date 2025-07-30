import Header from "../components/header";
import Footer from "../components/Footer";

function Layout({children}){
    return(
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 lg:mx-30">
                    {children}
                </main>
                <Footer />
                
            </div>
        </>
    )

}

export default Layout;