import Logo from '../../assets/logo.svg'
import Casa from '../../assets/casa.png'
import Grafico from '../../assets/grafico.png'
import Carteira from '../../assets/carteira.png'
import Perfil from '../../assets/perfil.png'
import Config from '../../assets/config.png'
import Sair from '../../assets/sair.png'
import { Link } from 'react-router-dom'

function LateralEsq(){
    return(
        <div className='w-[20%] h-[100vh] '>
            <Link to='/'>
                <img className='w-[700px] pt-10 pl-14' src={Logo} alt="" />
            </Link>
           

            <div className='w-[80%] mt-[30%] flex flex-col gap-14 '>
                <Link className='w-[50%] e m-auto flex  gap-5'>
                    <img src={Casa} alt="" />
                    <p className='text-lg font-semibold'>Dashboard</p>
                </Link>

                <Link className='w-[50%] e m-auto flex  gap-5'>
                    <img src={Grafico} alt="" />
                    <p className='text-lg text-gray-500 hover:text-black duration-300'>Estatísticas</p>
                </Link>

                <Link className='w-[50%] e m-auto flex gap-5'>
                    <img src={Carteira} alt="" />
                    <p className='text-lg  text-gray-500 hover:text-black duration-300'>Carteira</p>
                </Link>

                <Link className='w-[50%] e m-auto flex gap-5 items-center'>
                    <img src={Perfil} alt="" />
                    <p className='text-lg  text-gray-500 hover:text-black duration-300'>Perfil</p>
                </Link>

                <div className='w-[100%] mt-[35%] flex flex-col gap-10 items-center '>
                    <Link className='w-[50%] e m-auto flex gap-5 items-center'>
                        <img src={Config} alt="" />
                        <p className='text-lg  text-gray-500 hover:text-black duration-300'>Configurações</p>
                    </Link>

                    <Link to='/' className='w-[50%] e m-auto flex gap-5 items-center hover:scale-110 duration-300'>
                        <img src={Sair} alt="" />
                        <p className='text-lg  text-gray-500 hover:text-[#EB5757] duration-300'>Sair</p>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}export default LateralEsq