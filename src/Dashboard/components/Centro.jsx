import Notification from '../../assets/notifications.png'
import Cartao1 from '../../assets/cartao1.svg'
import Cartao2 from '../../assets/cartao2.svg'
import Plus from '../../assets/plus.svg'
import Stats from '../../assets/stats.png'


function Centro(){
    return(
        <div className="w-[50%] bg-gray-100 ">
            <div className=" flex p-10 gap-12 items-center mt-0">
                <div>
                    <h1 className='text-xl text-[#FFAD0D] font-semibold'>Bem vindo de volta!</h1>
                    <p className='text-3xl font-bold'>Willian!</p>
                </div>
               
                <input placeholder='Pesquisar' className='w-[50%] rounded-full p-2' type="search" />
                <img className=' rounded-full' src={Notification} alt="" />
            </div>

            <div className='w-[100%] flex items-center -mb-7'>
                <img src={Cartao1} alt="" />
                <img src={Cartao2} alt="" />
                <img className='mb-12' src={Plus} alt="" />
            </div>
            <div className='flex items-center justify-center w-[100%]'>
                <img className='w-[720px] h-[380px]' src={Stats} alt="" />
            </div>
           
        </div>
    )
}
export default Centro