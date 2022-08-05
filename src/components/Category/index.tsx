
import Edit from "../../assets/icons/edit.png";
import Editsub from "../../assets/icons/editsub.png";
import Drop from "../../assets/icons/drop.png";
import Plus from "../../assets/icons/sum.png";
import trash from "../../assets/icons/trash-white.png"
import imgSum from "../../assets/icons/sum-yellowbig.png";
import imgSumy from "../../assets/icons/sum-yellow.png"
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";




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
  const [establishmentSubcategory, setestablishmentSubcategory] = useState(

    "Nome da Subcategoria"
  );

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
      <div className="flex gap-4 overflow-x-auto scroll-smooth  p-4">
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
                <img className="" src={Editsub} alt="teste" />
              </button>
            </div>
            <div className="flex">
              <button onClick={onClik}>
                <img className="" src={Drop} alt="" />
              </button>
            </div>
          </div>
        ))}
        {isActive && (

          <div className="drop">
      <button className="w-full h-[82px] bg-royaldark flex-row rounded-b-lg flex justify-between items-center hover:cursor-pointer mb-4">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-white text-sm font-bold leading-[22px] ml-2">
            Adicionar item
          </h1>
        </div>
        <img className="w-[40px] h-[40px] mr-4" src={imgSum}alt=""
                  onClick={() => setShowModal(true)}
        />


        {showModal ? (
          <>
          <div className="h-[520px] w-[314px] bg-semiwhite rounded-xl pt-4 pb-5 px-4 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="min-w-[50%] flex flex-col items-center">
        <h1 className="raisinblack leading-6 text-center font-bold w-4/5 mb-4">
          Cadastrar novo item
        </h1>
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full bg-semiwhite flex flex-col gap-2"
        >
          <div className="flex flex-col gap-2">
            <label className="leading-6 text-left raisinblack" htmlFor="name">
              Nome do Item
            </label>
            <div>
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                placeholder="Escreva o nome do item"
                type="text"
                id="name"
                required
                {...register("name")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="leading-6 text-left raisinblack"
              htmlFor="item-description"
            >
              Descrição (opcional)
            </label>
            <div>
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                placeholder="Escreva a descrição do item"
                type="text"
                id="item-description"
                {...register("itemDescription")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="leading-6 text-left raisinblack" htmlFor="price">
              Preço
            </label>
            <div>
              <input
                className="block box-border w-3/6 rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                placeholder="R$ 00,00"
                type="number"
                step="0.01"
                min="0.01"
                id="price"
                required
                {...register("price")}
              />
            </div>
          </div>

          <button className="formButtonBack !w-full font-bold">
    
            Adicionar foto do item
          </button>

          <div className="flex flex-col gap-2">
            <label
              className="leading-6 text-left raisinblack"
              htmlFor="photo-decription"
            >
              Descrição da foto
            </label>
            <div>
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                placeholder="Escreva a descrição da foto que adicionou"
                type="text"
                id="photo-decription"
                required
                {...register("photoDescription")}
              />
            </div>
          </div>

          <div className="font-bold flex-row flex justify-around mt-5">
          <button
                      className="formButtonBackMin font-bold text-[16px]"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>

            <input
              type="submit"
              className="formButtonForwardMax hover:cursor-pointer"
              value="Salvar"
            />
          </div>
        </form>
      </div>
    </div>
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
            <img className="flex items-end" src={Plus} alt="" />
          </div>
        </button>
      </div>
    </>
  );
}

