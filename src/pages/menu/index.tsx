import Plus from "../../assets/icons/Vector.png"

export default function MenuPage(){
    return(
        <>
            <div className="overflow-x-auto scroll-smooth flex">
                <button className="bg-[#001B42] shadow-md flex w-36 rounded-lg p-4 gap-1 items-center object-cover">
                    <span className="bg-[#001B42] shadow-md text-[#FAFAFA]">Adicionar Categorias </span>
                    <img className="" src={Plus} alt="" />
                </button>
                <button className="bg-[#001B42] shadow-md flex w-36 rounded-lg p-4 gap-1 items-center">
                    <span className="bg-[#001B42] shadow-md text-[#FAFAFA]">Adicionar Categorias </span>
                    <img className="" src={Plus} alt="" />
                </button>
                <button className="bg-[#001B42] shadow-md flex w-36 rounded-lg p-4 gap-1 items-center">
                    <span className="bg-[#001B42] shadow-md text-[#FAFAFA]">Adicionar Categorias </span>
                    <img className="" src={Plus} alt="" />
                </button>
                <button className="bg-[#001B42] shadow-md flex w-36 rounded-lg p-4 gap-1 items-center">
                    <span className="bg-[#001B42] shadow-md text-[#FAFAFA]">Adicionar Categorias </span>
                    <img className="" src={Plus} alt="" />
                </button>
            </div>
        </>
    )
}