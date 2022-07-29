
import Plus from "../../assets/icons/Vector.png";
import { useState } from "react";


export default function Category(){
    const[cards, setcards] = useState(["pizzas"])
    const [isEditable, setIsEditable] = useState(false)
    return(
        <>
            <div className="text-[#24252E] text-xl font-bold p-4">
                <h3>Categorias</h3>
            </div>
            <div className="flex  gap-4 overflow-x-auto scroll-smooth  p-4">
                {cards.map(card => (
                    <div className="bg-cyberyellow p-6  rounded-lg shadow-md w-36 flex justify-center">
                        <h3 className="font-bold text-base leading-6">{card}</h3>
                    </div>
                ))}
                <button 
                    onClick={()=> setcards(state => ([...state,"Nova categoria"]))}
                    className="bg-[#001B42] shadow-md flex w-36 rounded-lg p-4 gap-1 items-center object-cover ">
                    <span className="bg-[#001B42] shadow-md text-[#FAFAFA]">
                    Adicionar Categorias{" "}
                    </span>
                    <img className="" src={Plus} alt="" />
                </button>
            </div>
            <div className="flex  justify-center">
            <input 
                className="text-raisinblack text-xl font-bold leading-8"
                type="text" 
                value={establishmentName}
                onChange={(e:any)=>setEstablishmentName(e.target.value)}
                disabled={isEditable === false}
            />
            <button onClick={() =>setIsEditable(!isEditable)}
            >
            <img src={Edit} alt="" />
            </button>
           
        </div>
        </>

    )
}

