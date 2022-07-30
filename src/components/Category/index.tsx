import Edit from "../../assets/icons/edit.png";
import Editsub from "../../assets/icons/editsub.png";
import Drop from "../../assets/icons/drop.png";
import Plus from "../../assets/icons/Vector.png";
import { useState } from "react";

export default function Category() {
  const [cards, setCards] = useState(["pizzas"]);
  const [subcards, setSubcards] = useState(["Tradicionais"]);
  const [isEditable, setIsEditable] = useState(false);
  const [establishmentName, setEstablishmentName] =
    useState("Nome da Categoria");
  return (
    <>
      <div className="text-[#24252E] text-xl font-bold p-4">
        <h3>Categorias</h3>
      </div>
      <div className="flex  gap-4 overflow-x-auto scroll-smooth  p-4">
        {cards.map((card) => (
          <div className="bg-cyberyellow p-6  rounded-lg shadow-md w-36 flex justify-center">
            <h3 className="font-bold text-base leading-6">{card}</h3>
          </div>
        ))}
        <button
          onClick={() => setCards((state) => [...state, "Nova categoria"])}
          className="bg-[#001B42] shadow-md flex w-36 rounded-lg p-4 gap-1 items-center object-cover "
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
          <div className="bg-oxfordblue p-6  rounded-lg shadow-md w-80 flex text-center mb-1 ">
            <div className="text-left ">
              <input
                className="bg-oxfordblue font-bold w-36 text-base   leading-6 text-semiwhite"
                type="text"
                disabled={isEditable === false}
                value={subcard}
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
