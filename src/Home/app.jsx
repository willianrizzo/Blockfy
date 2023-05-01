import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Section from "./components/Section"
import Suporte from "./components/Suporte"
import Header from "./components/header"

function Home(){
    return(
        <>
            <Header/>
            <Section/>
            <Cards/>
            <Suporte/>
            <Footer/>
        </>
    )
}
export default Home