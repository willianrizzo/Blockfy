import Logo from '../../assets/logo.png'
import Modo from '../../assets/mode.png'

function Header(){
    return(
        <div >
            <div className=" w-full bg-gray-200 flex">
                <img className='p-4 ml-10' src={Logo} alt="" />
                <div className='flex gap-10 items-center'>
                    <p className='text-lg text-[#FFAD0D] hover:text-black transition-all hover:scale-110 duration-200'>Compre Cripto</p>
                    <p className='text-lg text-[#FFAD0D] hover:text-black transition-all hover:scale-110 duration-200'>Mercado</p>
                    <p className='text-lg text-[#FFAD0D] hover:text-black transition-all hover:scale-110 duration-200'>NFT</p>
                </div>

                <div className='flex gap-10 items-center ml-auto mr-10'>
                    <button className='text-lg text-[#FFAD0D] hover:text-black transition-all hover:scale-110 duration-200'>Entrar</button>
                    <button className='text-lg text-[#FFAD0D] bg-[#111111] bg-opacity-80 p-2 rounded-md hover:bg-[#FFAD0D] hover:text-white transition-all hover:scale-110 duration-200' >Abra sua conta</button>
                    <img src={Modo} alt="" />
                </div>
            </div>
            
            <div className='w-full bg-[#111111] bg-opacity-80'>
                <p className='text-center text-[#FFAD0D] opacity-80 text-sm p-1.5' >Registre-se agora — Ganhe até 100 USDT de desconto na taxa de trading (para usuários verificados) - <span className='border-b-2 border-[#FFAD0D] hover:text-white transition-all duration-200'>Saiba Mais!</span></p>
                
            </div>
        </div>
    )
}
export default Header