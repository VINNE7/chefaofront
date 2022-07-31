import imgVector from "../../assets/images/img-menu.png";

export function Item() {
  return (
    <>
      <button className="w-full h-[106px] bg-royaldark flex-row rounded-b-lg flex justify-between items-center hover:cursor-pointer ">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-white text-sm font-bold leading-[22px] ml-[8px]">
            Moda da Casa
          </h1>
          <h2 className="text-white text-sm leading-[24px] ml-[8px]">
            R$ 54,00
          </h2>
        </div>
        <div className="w-[97px] h-[74px] bg-grayDisabled rounded-[8px] mr-2 flex justify-center items-center">
          <img className="w-[46px] h-[46px]" src={imgVector} alt="" />
        </div>
      </button>
    </>
  );
}
