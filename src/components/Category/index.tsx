import { useRef, useState } from "react";
import Edit from "../../assets/icons/pen.png";
import Editsub from "../../assets/icons/pen-white.png";
import Drop from "../../assets/icons/drop.png";
import Plus from "../../assets/icons/sum.png";
import trash from "../../assets/icons/trash-white.png"
import imgSum from "../../assets/icons/sum-yellowbig.png";
import imgSumy from "../../assets/icons/sum-yellow.png"

export default function Category() {
  const [cards, setCards] = useState(["Pizza"]);
  const [subcards, setSubcards] = useState([""]);
  const [isEditable, setIsEditable] = useState(false);
  const [establishmentName, setEstablishmentName] =
    useState("Nome da Categoria");
  const [establishmentSubcategory, setestablishmentSubcategory] = useState(
    "Nova subcategoria"
  );
  const [isActive, setIsActive] = useState(false);
  const onClik = () => setIsActive(!isActive);
  console.log(isActive);
  
  return (
    <>
      <div className="text-raisinblack text-xl font-bold my-4 ">
        <h3>Categorias</h3>
      </div>
      <div className="flex gap-4 overflow-x-auto scroll-smooth ">
        {cards.map((card) => (
          <button className="font-bold text-base leading-6 bg-cyberyellow p-[30px]  rounded-lg shadow-md w-full flex justify-center">
            {card}
          </button>
        ))}
        <button
          onClick={() => setCards((state) => [...state, "Nova categoria"])}
          className="bg-royalblue shadow-md flex w-full max-w-[160px] rounded-lg p-[30px] gap-1 items-center object-cover "
        >
          <span className="bg-royalblue shadow-md text-semiwhite">
            Adicionar Categorias{" "}
          </span>
          <img className="" src={Plus} alt="" />
        </button>
      </div>
      <div className="flex justify-center ">
        <input
          className="text-raisinblack text-xl font-bold leading-8 my-4"
          type="text"
          value={establishmentName}
          onChange={(e: any) => setEstablishmentName(e.target.value)}
          disabled={isEditable === false}
        />
        <button onClick={() => setIsEditable(!isEditable)}>
          <img src={Edit} alt="" />
        </button>
      </div>
      <div className="">
        {subcards.map((subcard) => (
          <div className="w-[320px] h-[48px] bg-royaldark flex-row flex justify-between items-center rounded-[5px] hover:cursor-pointer mb-3 ">
            <div className="ml-2 flex items-center gap-4">
              <input
                className="bg-oxfordblue font-bold text-base w-[158px] text-semiwhite "
                type="text"
                disabled={isEditable === false}
                value={establishmentSubcategory}
                onChange={(e: any) =>
                  setestablishmentSubcategory(e.target.value)
                }
              />
              <button  onClick={() => setIsEditable(!isEditable)} >
                <img className="w-[15px] h-[17px]" src={Editsub} alt="Botão editar" />
              </button>
              <button>
              <img className="w-[17px] h-[20px] " src={trash} alt="Botão excluir" />
              </button>
            </div>
            <div className="flex">
              <button onClick={onClik}>
                <img className="mr-2"src={Drop} alt="" />
              </button>
            </div>
          </div>
        ))}
        {isActive && (
      <div className="drop">
        <button className="w-full h-[82px] bg-royaldark flex-row rounded-b-lg flex justify-between items-center hover:cursor-pointer mb-4">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-semiwhite text-sm font-bold leading-[22px] ml-[8px]">
              Adicionar item
            </h1>
          </div>
          <img className="w-[40px] h-[40px] mr-4" src={imgSum}alt="" />
        </button>
      </div>
        )}
          <button
            onClick={() =>
              setSubcards((state) => [...state, "Nova Subcategoria"])
            }
            className="w-full h-[48px] bg-royaldark flex-row flex justify-between items-center rounded-[5px] hover:cursor-pointer  "
          >
            <span className="text-semiwhite text-sm font-bold leading-[22px] ml-[8px]">
              Adicionar subcategoria{" "}
            </span>
            <div className="text-right ">
            <img className ="w-[22px] h-[22px] mr-[13px] " src={imgSumy} alt="" />
            </div>
          </button>
      </div>
    </>
  );
}