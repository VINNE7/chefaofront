
import Edit from "../../assets/icons/edit.png";
import Editsub from "../../assets/icons/editsub.png";
import Drop from "../../assets/icons/drop.png";
import Plus from "../../assets/icons/sum.png";
import trash from "../../assets/icons/trash-white.png";
import imgSum from "../../assets/icons/sum-yellowbig.png";
import imgSumy from "../../assets/icons/sum-yellow.png";
import Plus from "../../assets/icons/Vector.png";
import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NewItemModal from "../NewItemModal";

interface IFormValues {
  name: string;
  itemDescription: string;
  price: number;
  photoDescription: string;
}

export default function Category() {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState(["Pizza"]);
  const [subcards, setSubcards] = useState([""]);
  const [isEditable, setIsEditable] = useState(false);
  const [establishmentName, setEstablishmentName] =
    useState("Nome da Categoria");

  const [establishmentSubcategory, setestablishmentSubcategory] =
    useState("Nova subcategoria");
  const [isActive, setIsActive] = useState(false);
  const onClik = () => setIsActive(!isActive);

  console.log(isActive);

  const { register, handleSubmit } = useForm<IFormValues>();

  const submit: SubmitHandler<IFormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <>
      <div className="text-[#24252E] text-xl font-bold p-4">
        <h3>Categorias</h3>
      </div>
      <div className="flex  gap-4 overflow-x-auto scroll-smooth  p-4">
        {cards.map((card) => (
          <button className="font-bold text-base leading-6 bg-cyberyellow p-[30px]  rounded-lg shadow-md w-full max-w-[160px] flex justify-center">

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
                onChange={(e: any) =>
                  setestablishmentSubcategory(e.target.value)
                }
              />
              <button onClick={() => setIsEditable(!isEditable)}>
                <img
                  className="w-[15px] h-[17px]"
                  src={Editsub}
                  alt="Botão editar"
                />
              </button>
              <button>
                <img
                  className="w-[17px] h-[20px] "
                  src={trash}
                  alt="Botão excluir"
                />

              </button>
            </div>
            <div className="flex">
              <button onClick={onClik}>

                <img className="mr-2" src={Drop} alt="" />

              </button>
            </div>
          </div>
        ))}
        {isActive && (

          <div className="drop">
            <button className="w-full h-[82px] bg-royaldark flex-row rounded-b-lg flex justify-between items-center hover:cursor-pointer mb-4">
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-white text-sm font-bold leading-[22px] ml-[8px]">
                  Adicionar item
                </h1>
              </div>
              <img
                className="w-[40px] h-[40px] mr-4"
                src={imgSum}
                alt=""
                onClick={() => setShowModal(true)}
              />
              {showModal ? (
                <>  
                 < NewItemModal 
                 onClick={() => setShowModal(false)}/>
                </>
              ) : null}

            </button>
          </div>
        )}

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

            <img
              className="w-[22px] h-[22px] mr-[13px] "
              src={imgSumy}
              alt=""
            />
          </div>
        </button>
      </div>
    </>
  );
}
