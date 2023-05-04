import Cards from "./Home/components/Cards"
import Footer from "./Home/components/Footer"
import Section from "./Home/components/Section"
import Suporte from "./Home/components/Suporte"
import Header from "./Home/components/Header"
import Sobre from "./Home/components/Sobre"

function Home(){
    return(
        <>
            <Header/>
            <Section/>
            <Cards/>
            <Sobre/>
            <Suporte/>
            <Footer/>
        </>
    )
}
export default Home