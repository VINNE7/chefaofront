import imgSumyellow from '../../assets/icons/sum-yellow.png'


export function SubCategory () {
  return (
    <>
    <button className="w-full h-[48px] bg-royaldark flex-row flex justify-between items-center rounded-[5px] hover:cursor-pointer ">
      <h1 className="text-white text-sm font-bold leading-[22px] ml-[8px]">Adicionar subcategoria</h1>
      <img className ="w-[22px] h-[22px] mr-[13px] " src={imgSumyellow} alt="" />

    </button>
    </>
  )
}