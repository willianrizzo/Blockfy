import Centro from "./components/Centro"
import LateralDir from "./components/LateralDir"
import LateralEsq from "./components/LateralEsq"


function Dashboard(){
    return(
        <div className="flex">
            
           <LateralEsq/> 
           <Centro/>
           <LateralDir/>
        </div>
    )
}
export default Dashboard