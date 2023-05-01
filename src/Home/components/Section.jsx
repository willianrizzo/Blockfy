import Triangulo from '../../assets/triangulos.png'
import Logo from '../../assets/logo.png'
import User from '../../assets/user.png'
import Phone from '../../assets/celular.png'

function Section(){
    return(
        <div>
            <img src={Triangulo} alt="" />
            <div className='flex justify-center '>
                <div className='flex flex-col justify-center w-[100%] items-center mt-40 absolute z-10 top-32 right-10 bg- '>
                    <h2 className='w-[25%] text-5xl font-semibold'>Aproveite as vantagens da blockchain com a</h2>
                    <img className='w-[25%]' src={Logo} alt="" />
                    <button className='bg-[#FFAD0D] text-white flex p-4 rounded-sm mt-10 text-[15px] font-semibold gap-2'><img src={User}/>Cadastre-se Cadastre-se com E-mail ou Celular</button>
                </div>
                <img src={Phone} alt="" />
            </div>
            
        </div>
    )
}
export default Section