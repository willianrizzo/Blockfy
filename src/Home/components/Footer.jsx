import Logo from '../../assets/logo.png'
import Bitcoin from '../../assets/bitcoin.png'
import Face from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Disord from '../../assets/discord.png'
import Insta from '../../assets/instagram.png'


function Footer(){
    return(
        <div className="bg-gray-200 w-[100%] bg-opacity-60 mt-14 ">
            <div className='w-[35%]  flex m-auto items-center mb-5'>
                <img className='ml-52 p-2'  src={Logo} alt="" />
            </div>
            

            <div className='w-[60%] m-auto flex gap-10  justify-center'>
                <img className='w-[45px] h-[45px]' src={Bitcoin} alt="" />
                <div className='gap-10 flex justify-center '>
                   
                    <button className='text-lg text-[#FFAD0D]'>Compre Cripto</button>
                    <button className='text-lg text-[#FFAD0D]'>Mercado</button>
                    <button className='text-lg text-[#FFAD0D]'>NFT</button>
                    <button className='text-lg text-[#FFAD0D]'>Acesse sua conta</button>
                    <button className='text-lg text-[#FFAD0D]'>Peça seu cartão</button>
                    
                </div>
                
                <img className='w-[45px] h-[45px]' src={Bitcoin} alt="" />
            </div>

            <div className=' w-[25%] flex gap-14  m-auto mt-10 pb-8  justify-center'>
                <img src={Face} alt="" />
                <img src={Twitter} alt="" />
                <img src={Disord} alt="" />
                <img src={Insta} alt="" />
            </div>
            
        </div>
    )
}
export default Footer