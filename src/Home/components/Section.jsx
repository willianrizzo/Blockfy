import Triangulo from '../../assets/triangulos.png'
import Logo from '../../assets/logo.png'
import User from '../../assets/user.png'
import Phone from '../../assets/celular.png'
import Google from '../../assets/google.png'
import Apple from '../../assets/apple.png'
import Vector from '../../assets/Vector.png'
import Bolha from '../../assets/bolha.svg'

function Section(){
    return(
        <div>
            <div className='flex -mb-40'>
                <img src={Triangulo} alt="" />
                <div className=' '>
                    <div className='flex flex-col justify-center w-[100%] items-center mt-28 absolute z-10 top-32 right-40 bg- '>
                        <h2 className='w-[25%] text-5xl font-semibold'>Aproveite as vantagens da blockchain com a</h2>
                        <img className='w-[25%]' src={Logo} alt="" />
                        <button className='bg-[#FFAD0D] text-white flex p-4 rounded-sm mt-10 text-[15px] font-semibold gap-2'><img src={User}/>Cadastre-se Cadastre-se com E-mail ou Celular</button>
                        <span className='text-[#FFAD0D] mt-3'>Ou continue com</span>
                        <div className='flex gap-10 h-10 mt-3'>
                            <button className='bg-[#FFAD0D] text-white w-[170px] flex justify-center items-center gap-2 rounded-sm '><img src={Google} alt="" />Google</button>
                            <button className='bg-[#FFAD0D] text-white w-[170px] flex justify-center items-center gap-2 rounded-sm '><img src={Apple} alt="" />Apple</button>
                        </div>
                        
                    </div>
                    <img className='absolute z-10 top-36 right-80 w-[25%] ' src={Phone} alt="" />
                </div>

            </div>
            
            <div className='flex justify-center mt-8 m-auto w-[48%] gap-32 '>
                    <div className='w-[10%] bg'>
                        <p className='text-xl'>Bitcoin</p>
                        <h1 className='text-xl font-bold'>768.39$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>23.36%</p>
                        </div>
                    </div> 
                    <div className='w-[10%] bg'>
                        <p className='text-xl'>Etherium</p>
                        <h1 className='text-xl font-bold'>768.39$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>23.36%</p>
                        </div>
                    </div> 
                    <div className='w-[10%] bg'>
                        <p className='text-xl'>DogeCoin</p>
                        <h1 className='text-xl font-bold'>768.39$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>23.36%</p>
                        </div>
                    </div> 
                    <div className='w-[10%] bg'>
                        <p className='text-xl'>NFT</p>
                        <h1 className='text-xl font-bold'>768.39$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>23.36%</p>
                        </div>
                    </div> 
            </div>
            
            <img className='m-auto w-full mt-10' src={Bolha} alt="" />
        </div>
    )
}
export default Section