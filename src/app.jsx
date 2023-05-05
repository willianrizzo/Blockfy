import Cards from "./Home/components/Cards"
import Footer from "./Home/components/Footer"
import Section from "./Home/components/Section"
import Suporte from "./Home/components/Suporte"
import Header from "./Home/components/Header"
import Sobre from "./Home/components/Sobre"



function Home(){
    

    return(
        <div className="dark:bg-black dark:bg-opacity-75 dark:text-white">
            <Header/>
            <Section/>
            <Cards/>
            <Sobre/>
            <Suporte/>
            <Footer/>
        </div>
    )
}
export default Home