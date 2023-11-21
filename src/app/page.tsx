import Image from 'next/image'
import fundo from "../img/imagem.png" 
export default function Home() {
  return (
    <>
    <div className="bg-gray-800 w-full h-screen flex items-center	justify-center ">
      
      <div className='flex items-center justify-center '>
      <Image src={fundo} className= "w-60 h-96"/>
      <div className='bg-white w-72 h-96 p-3	pt-9'>
        <h1 className=" text-slate-600 font-bold text-3xl">Hotspot</h1>
        <div className=' flex items-start flex-col mt-40 gap-3		'>
        <span className='text-slate-600 font-medium	text-sm	'>Insira seu código de ativação</span>
        <input type="" className='text-slate-400 border	border-solid	rounded w-64 h-9 	'
        placeholder='*************'
        />
        <button className='bg-red-700 border	border-solid	rounded w-64 h-9 	'>Conectar</button>
        </div>
      </div>
     
      </div>
    </div>
    </>
  )
}
