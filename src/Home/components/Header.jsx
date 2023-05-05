import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Modo from '../../assets/mode.png'

function Header(){
    return(
        <div >
            <div className=" w-full bg-gray-200 flex">
                <img className='p-4 ml-10' src={Logo} alt="" />
                <div className='flex gap-10 items-center'>
                    <Link className='text-lg text-[#FFAD0D] hover:text-black transition-all hover:scale-110 duration-200'>Compre Cripto</Link>
                    <Link className='text-lg text-[#FFAD0D] hover:text-black transition-all hover:scale-110 duration-200'>Mercado</Link>
                    <Link className='text-lg text-[#FFAD0D] hover:text-black transition-all hover:scale-110 duration-200'>NFT</Link>
                </div>

                <div className='flex gap-10 items-center ml-auto mr-10'>
                    <Link to='/login' className='text-lg text-[#FFAD0D] hover:text-black transition-all hover:scale-110 duration-200'>Entrar</Link>
                    <Link to='/cadastro' className='text-lg text-[#FFAD0D] bg-[#111111] bg-opacity-80 p-2 rounded-md hover:bg-[#FFAD0D] hover:text-white transition-all hover:scale-110 duration-200' >Abra sua conta</Link>
                    <img src={Modo} alt="" />
                </div>
            </div>
            
            <div className='w-full bg-[#111111] bg-opacity-80'>
                <p className='text-center text-[#FFAD0D] opacity-80 text-sm p-1.5' >Registre-se agora — Ganhe até 100 USDT de desconto na taxa de trading (para usuários verificados) - <span className='border-b-2 border-[#FFAD0D] hover:text-white transition-all duration-200 hover:border-white'>Saiba Mais!</span></p>
                
            </div>
        </div>
    )
}
export default Header