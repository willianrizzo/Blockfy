import FotoPerfil from '../../assets/fotoperfil.svg'
import Fly from '../../assets/fly.svg'
import Pay from  '../../assets/pay.svg'
import Din from '../../assets/din.svg'
import Pontos from '../../assets/pontos.svg'
import Nft from '../../assets/nft.svg'
import Blocks from '../../assets/blocks.svg'

function LateralDir(){
    return(
        <div className="w-[30%] h-[100vh] ">
            <div className="w-[100%] p-5  m-auto flex flex-col items-center mt-6">
                <img src={FotoPerfil} alt="" />
                <p className='text-xl font-bold mt-3'>Willian</p>
            </div>
            <div className='w-[80%] flex m-auto gap-10'>
                <div className='flex flex-col items-center'>
                    <img className='bg-gray-100 w-[65px] h-[65px] bg-opacity-60 rounded-xl p-5' src={Fly} alt="" />
                    <p className='mt-2 font-semibold'>Enviar</p>
                </div>

                <div className='flex flex-col items-center'>
                    <img className='bg-gray-100 w-[65px] h-[65px] bg-opacity-60 rounded-xl p-5' src={Pay} alt="" />
                    <p className='mt-2 font-semibold'>Requerir</p>
                </div>

                <div className='flex flex-col items-center'>
                    <img className='bg-gray-100 w-[65px] h-[65px] bg-opacity-60 rounded-xl p-5' src={Din} alt="" />
                    <p className='mt-2 font-semibold'>Pagar</p>
                </div>

                <div className='flex flex-col items-center'>
                    <img className='bg-gray-100 w-[65px] h-[65px] bg-opacity-60 rounded-xl p-5' src={Pontos} alt="" />
                    <p className='mt-2 font-semibold'>Mais</p>
                </div>
            </div>

            <div className='w-[80%] m-auto mt-10 flex flex-col gap-10 '>
                <h2 className='font-semibold text-lg text-[#FFAD0D]'>Transações recentes</h2>
                <div className='flex items-center gap-10'>
                    <img className='p-3 bg-gray-100 bg-opacity-60 rounded-xl' src={Nft} alt="" />
                    <div className=''>
                        <h3 className='text-lg font-semibold'>Venda de NFT</h3>
                        <p>28 Nov 2021 • 12:01 am </p>
                    </div>
                    <p className='text-[#32BE4B] font-semibold'>+ R$212</p>
                </div>

                <div className='flex items-center gap-10'>
                    <img className='p-3 bg-gray-100 bg-opacity-60 rounded-xl' src={Blocks} alt="" />
                    <div className=''>
                        <h3 className='text-lg font-semibold'>Compra de DogeCoin</h3>
                        <p>28 Nov 2021 • 12:01 am </p>
                    </div>
                    <p className='text-[#EB5757] font-semibold'>- R$212</p>
                </div>

                <div className='flex items-center gap-10'>
                    <img className='p-3 bg-gray-100 bg-opacity-60 rounded-xl' src={Blocks} alt="" />
                    <div className=''>
                        <h3 className='text-lg font-semibold'>Venda de Etherium</h3>
                        <p>28 Nov 2021 • 12:01 am </p>
                    </div>
                    <p className='text-[#EB5757] font-semibold'>+ R$67</p>
                </div>
            </div>
            <p className='text-[#FFAD0D] text-center mt-6'>Ver mais</p>
        </div>
    )
}
export default LateralDir