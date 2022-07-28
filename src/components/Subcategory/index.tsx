import imgSumyellow from '../../assets/icons/sum-yellow.png'


export function SubCategory () {
  return (
    <>
    <div className="w-[130px] h-[70px] bg-royaldark flex-row flex justify-between items-center rounded-[8px] ">
      <h1 className="text-white text-sm font-bold leading-[22px] ml-[8px]">Adicionar Categoria</h1>
      <img className ="w-[22px] h-[22px] mr-[13px] " src={imgSumyellow} alt="" />

    </div>
    </>
  )
}
