import Centro from "./components/Centro"
import LateralEsq from "./components/LateralEsq"


function Dashboard(){
    return(
        <div className="flex">
            
           <LateralEsq/> 
           <Centro/>
        </div>
    )
}
export default Dashboard