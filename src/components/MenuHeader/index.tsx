

export default function MenuHeader() {
  return (
    <>
      <div className='min-h-screen w-screen flex bg-semiwhite flex-col items-center'>
        <div className='w-screen flex items-center flex-col bg-cyberyellow '>
          <div className="relative w-screen flex items-center flex-col bg-cyberyellow ">
            <p className='absolute mt-[66px] text-sm text-raisinblack'>Editar foto </p>
            <p className='bg-white p-14 rounded-full mt-[18px]'></p>
            <h1 className="text-xl font-bold text-raisinblack leading-[30px]">Nome do estabelcimento</h1>
            <p className="text-sm text-raisinblack">Endereço completo com número cidade</p>
            <p className="text-sm text-raisinblack leading-6">+55 4499999999</p>
            <button className="text-sm font-bold text-royaldark border-b-2 leading-6 mb-0.5  border-royaldark">Editar informações</button>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 flex self-start mt-5 ml-5 text-oxfordblue absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" d="M4 6h21M4 12h21M4 18h21 " />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}