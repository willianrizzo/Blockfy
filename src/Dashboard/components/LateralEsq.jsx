import Logo from '../../assets/logo.png'
import Casa from '../../assets/casa.png'
import Grafico from '../../assets/grafico.png'
import Carteira from '../../assets/carteira.png'
import Perfil from '../../assets/perfil.png'

function LateralEsq(){
    return(
        <div className='w-[20%] h-[100vh] bg-gray-100'>
            <img className='w-[700px] pt-10 pl-14' src={Logo} alt="" />

            <div className='w-[80%] mt-[45%] flex flex-col gap-14'>
                <div className='w-[50%] e m-auto flex  gap-5'>
                    <img src={Casa} alt="" />
                    <p className='text-lg font-semibold'>Dashboard</p>
                </div>

                <div className='w-[50%] e m-auto flex  gap-5'>
                    <img src={Grafico} alt="" />
                    <p className='text-lg text-gray-700'>Estatísticas</p>
                </div>

                <div className='w-[50%] e m-auto flex gap-5'>
                    <img src={Carteira} alt="" />
                    <p className='text-lg font-semibold'>Carteira</p>
                </div>

                <div className='w-[50%] e m-auto flex gap-5 items-center'>
                    <img src={Perfil} alt="" />
                    <p className='text-lg font-semibold'>Perfil</p>
                </div>
            </div>
        </div>
        
    )
}export default LateralEsq