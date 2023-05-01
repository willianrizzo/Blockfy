import Model from '../../assets/model.png'
import Cartao from '../../assets/card.png'

function Cards(){
    return(
        <div className=" w-[70%] m-auto mt-20 flex flex-col gap-20">
            <div className="bg-black bg-opacity-80 flex items-center gap-28 rounded-xl">
                <div className="w-[50%] p-10">
                    <h3 className="text-white text-4xl">Compre <span className="text-[#FFAD0D]">Bitcoin</span> com confiança! A sua plataforma de <span className="text-[#FFAD0D]">investimento segura e transparente!</span></h3>
                    <button className='bg-[#FFAD0D] text-xl p-3 text-white mt-12 rounded-sm hover:bg-white hover:text-[#FFAD0D] transition-all duration-200'>Abra sua conta!</button>
                </div>
                <img className='w-[30%] h-[30%] ' src={Model} alt="" />
            </div>
            <div className="bg-black bg-opacity-80 flex items-center gap-48 rounded-xl">
                <img className='w-[32%] h-[32%] ml-10 ' src={Cartao} alt="" />
                <div className="w-[45%] p-10 text-right ">
                    <h3 className="text-white text-4xl">Transações em <span className="text-[#FFAD0D]">tempo real</span> de suas<span className="text-[#FFAD0D]"> criptomoedas</span> para qualquer<span className="text-[#FFAD0D]"> moeda!</span></h3>
                    <button className='bg-[#FFAD0D] text-xl p-3 text-white mt-12 rounded-sm hover:bg-white hover:text-[#FFAD0D] transition-all duration-200'>Peça seu cartão!</button>
                </div>
            </div>
        </div>
    )
}
export default Cards