import Atendente from '../../assets/atendente.png'
import Chat from '../../assets/chat.png'
import Jornal from '../../assets/jornal.png'


function Suporte(){
    return(
        <div className=" m-auto w-[70%] mt-20">
            <h3 className="text-2xl font-semibold">Precisa de ajuda?</h3>
            
            <div className='flex gap-6'>
                <div className='mt-12 flex gap-6'>
                    <img className='w-[25%] h-[30%]' src={Atendente} alt="" />
                    <div className=''>
                        <h3 className='font-semibold'>Suporte ao Cliente 24/7</h3>
                        <p className='w-[90%]'>Obtenha suporte via chat 24 horas por dia, 7 dias da semana por semana, com nossos agentes de atendimento ao cliente</p>
                        <button className='mt-2 text-[#FFAD0D]'>Iniciar Chat</button>
                    </div>
                </div>

                <div className='mt-12 flex gap-6'>
                    <img className='w-[25%] h-[30%]' src={Chat} alt="" />
                    <div className=''>
                        <h3 className='font-semibold'>Perguntas Frequentes (FAQ)</h3>
                        <p className='w-[95%]'>Consulte as perguntas frequentes (FAQ) para obter instruções detalhadas sobre recursos específicos.</p>
                        <button className='mt-2 text-[#FFAD0D]'>Saiba mais</button>
                    </div>
                </div>

                <div className='mt-12 flex gap-6'>
                    <img className='w-[25%] h-[30%]' src={Jornal} alt="" />
                    <div className=''>
                        <h3 className='font-semibold'>Blog</h3>
                        <p className='w-[100%]'>Mantenha-se atualizado sobre as últimas notícias e comentários</p>
                        <button className='mt-2 text-[#FFAD0D]'>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Suporte