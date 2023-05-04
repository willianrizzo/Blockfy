import FotoSobre from '../../assets/sobre_foto.jpg'


function Sobre(){
    return(
        <div className="w-[75%] h-[700px]  m-auto mt-20 flex justify-center items-center ">
            <div className="w-[35%] pt-10">
                <h2 className="text-center text-5xl text-[#FFAD0D]">Sobre a Blockfy</h2>
                <br />

                <p className="text-lg ml-10 ">Fundada em 2018, a Blockfy tem crescido rapidamente em popularidade devido ao seu compromisso em fornecer soluções de investimento acessíveis e de qualidade. Através de sua plataforma de investimento, os usuários podem facilmente investir em criptomoedas, ações e outros ativos financeiros</p>

                <br />
                <p className="text-lg ml-10">Somos uma das maiores plataformas de serviços financeiros digitais no mundo, servindo 80 milhões de clientes no Brasil, México e Colômbia. Tudo que entregamos é simples, intuitivo, conveniente, de baixo custo, empoderador e humano. Guiando-nos sempre por nossa missão, estamos contribuindo para aumentar o acesso financeiro na América Latina.</p>
            </div>
            <img className='h-[340px] flex justify-center items-center' src={FotoSobre} alt="" />
        </div>
    )
}
export default Sobre