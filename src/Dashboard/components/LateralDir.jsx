import FotoPerfil from '../../assets/fotoperfil.svg'
import Fly from '../../assets/fly.svg'
import Pay from  '../../assets/pay.svg'
import Din from '../../assets/din.svg'
import Pontos from '../../assets/pontos.svg'

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

            <div className='w-[80%] m-auto mt-10 flex '>
                <h2 className='font-semibold text-lg '>Transações recentes</h2>
                <div>

                </div>
            </div>
        </div>
    )
}
export default LateralDir