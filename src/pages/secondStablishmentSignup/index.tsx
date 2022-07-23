export default function SecondStablishmentSignup(){
  return(
    <div className="flex flex-col w-screen h-screen bg-slate-900">
      <div className="flex flex-col mx-auto gap-4">
      <h1 className="text-white text-4xl font-bold">Funcionamento</h1>

      <form action="" className="text-white mt-10">
        <div className="input-field flex flex-col">
          <label htmlFor="">Contato Whatsapp</label>
          <input type="text" placeholder="(XX) X XXXX-XXXX" className="h-10 p-2 text-black" />
        </div>
      </form>
      </div>

      <div className="flex flex-col mt-10 items-center text-white text-lg">
        <h2 className="my-2">Dias/horários de funcionamento</h2>
        <div className="w-[calc(100%-20px)] p-2 border border-white flex justify-end  gap-2">
          <button className=" flex gap-2 items-center"> <i className="fa fa-plus"></i> Adicionar</button>
        </div>
        <ul className="w-[calc(100%-20px)] h-80 border border-white">
          <li className="flex justify-between m-4 border-b border-white" tabIndex={0}>
            <span>SEG</span>
            <div className="flex gap-8 items-center"><span>8:00</span> <span>12:00</span> <button><i className="fa fa-trash"></i></button></div>
          </li>
        </ul>
      </div>
    </div>
  )
}