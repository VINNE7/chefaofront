import Edit from "../../assets/icons/edit.png";
import Editsub from "../../assets/icons/editsub.png";
import Drop from "../../assets/icons/drop.png";
import Plus from "../../assets/icons/Vector.png";
import { useState } from "react";

export default function Category() {
  const [cards, setCards] = useState(["Pizza"]);
  const [subcards, setSubcards] = useState([""]);
  const [isEditable, setIsEditable] = useState(false);
  const [establishmentName, setEstablishmentName] =
    useState("Nome da Categoria");
    const [establishmentSubcategory, setestablishmentSubcategory] =
    useState("Nome da Subcategoria");
  return (
    <>
      <div className="text-[#24252E] text-xl font-bold p-4">
        <h3>Categorias</h3>
      </div>
      <div className="flex  gap-4 overflow-x-auto scroll-smooth  p-4">
        {cards.map((card) => (
            <button 
              className="font-bold text-base leading-6 bg-cyberyellow p-[30px]  rounded-lg shadow-md w-full max-w-[160px] flex justify-center">
              {card}
            </button>
        ))}
        <button
          onClick={() => setCards((state) => [...state, "Nova categoria"])}
          className="bg-[#001B42] shadow-md flex w-full max-w-[160px] rounded-lg p-[30px] gap-1 items-center object-cover "
        >
          <span className="bg-[#001B42] shadow-md text-[#FAFAFA]">
            Adicionar Categorias{" "}
          </span>
          <img className="" src={Plus} alt="" />
        </button>
      </div>
      <div className="flex  justify-center ">
        <input
          className="text-raisinblack text-xl font-bold leading-8 "
          type="text"
          value={establishmentName}
          onChange={(e: any) => setEstablishmentName(e.target.value)}
          disabled={isEditable === false}
        />
        <button onClick={() => setIsEditable(!isEditable)}>
          <img src={Edit} alt="" />
        </button>
      </div>
      <div className="pl-4">
        {subcards.map((subcard) => (
          <div className="bg-oxfordblue p-6 justify-between  rounded-lg shadow-md w-80 flex text-center mb-1 ">
            <div className="text-left ">
              <input
                className="bg-oxfordblue font-bold w-36 text-base   leading-6 text-semiwhite"
                type="text"
                disabled={isEditable === false}
                value={establishmentSubcategory}
                onChange={(e: any) => setestablishmentSubcategory(e.target.value)}
              />
              <button onClick={() => setIsEditable(!isEditable)}>
                <img className="" src={Editsub} alt="teste" />
              </button>
            </div>
            <div className="flex">
              <button>
                <img className="" src={Drop} alt="" />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={() =>
            setSubcards((state) => [...state, "Nova Subcategoria"])
          }
          className="bg-[#001B42] shadow-md flex w-80 rounded-lg p-4 gap-1 items-center object-cover mt-6 "
        >
          <span className="bg-[#001B42] shadow-md text-[#FAFAFA] ">
            Adicionar subcategoria{" "}
          </span>
          <div className="text-right ">
            <img className="flex items-end" src={Plus} alt="" />
          </div>
        </button>
      </div>
    </>
  );
}
