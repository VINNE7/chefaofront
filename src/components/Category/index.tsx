import Edit from "../../assets/icons/edit.png";
import Editsub from "../../assets/icons/editsub.png";
import Drop from "../../assets/icons/drop.png";
import Plus from "../../assets/icons/Vector.png";
import { useState } from "react";
import AddCardIcon from "../icons/editIcon/addCardIcon";

interface Newcard{
  id: number
  title: string
}


interface ICategoryCard{
  name: string
  id: number
}

export default function Category() {
  const [categories, setCategories] = useState<ICategoryCard[]>([{name: "Pizza", id: 1}]);
  const [selectedCategoryNumber, setSelectedCategoryNumber] = useState(1);
  const [subCategories, setSubCategories] = useState([{categoryId: selectedCategoryNumber, name: "Nova subcategoria", items: [{name:"moda da casa", image: [], price: 0}]  }]);
  const [isEditable, setIsEditable] = useState(false);
  const [editable, setEditable] = useState(false);
  const [establishmentName, setEstablishmentName] =
    useState("Nome da Categoria");
  const [establishmentSubcategory, setestablishmentSubcategory] =
    useState([{title: "Nova Subcategoria", id: Math.random()}]);
  const [establishmentSubcategoryTitle, setestablishmentSubcategoryTitle] =
    useState("Nome da Subcategoria");

  


  function createSubcategorycard(){
    if(!establishmentSubcategoryTitle) return //impedindo que uma pessoa crie um card sem nome
    const newSubcard = {
      id: Math.random(),
      title: establishmentSubcategoryTitle
    }
    setestablishmentSubcategory([...establishmentSubcategory,newSubcard]) //chamando todos cards e add um novo card sem interferencia
  }

  function editSubcategory(id: number){
    const filteredSubcategories = establishmentSubcategory.filter((eSubcategory) => eSubcategory.id != id)
    setestablishmentSubcategory(filteredSubcategories) //filtrando as subcategories que possuem um id diferente da que vc clicou
  }

  
  return (
    <>
      <div className="text-[#24252E] text-xl  font-bold p-4">
        <h3>Categorias</h3>
      </div>
      <div className="flex  gap-4 overflow-x-auto scroll-smooth  p-4">
        {categories.map((category) => (
            <button 
              onClick={()=>setSelectedCategoryNumber(category.id)}
              key={category.id}
              className="font-bold  px-12 py-4 text-base leading-6 text-white bg-royalblue  rounded-lg shadow-md  flex justify-center items-center focus:bg-cyberyellow focus:text-royalblue">
              {category.name} 
            </button>
        ))}
        <button
          onClick={() => setCategories((state) => [...state, {name: "Nova Categoria", id: state.length + 1 } ])}
          className="bg-royalblue shadow-md  rounded-lg p-4 flex items-center text-white font-bold  "
        >
            Adicionar Categorias
          <AddCardIcon/>
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

        {subCategories.map((subCategory, i)=>
          subCategory.categoryId == selectedCategoryNumber ? (
          <div className="bg-oxfordblue p-6 justify-between  rounded-lg shadow-md w-80 flex text-center mb-1 ">
            <div className="text-left flex gap-4 ">
              <input
                className="bg-oxfordblue font-bold w-[150px] text-base   leading-6 text-semiwhite"
                type="text"
                disabled={editable === false}
                value={subCategory.name}
                onChange={(e: any) => setestablishmentSubcategory(e.target.value)}
              />
              <button >
                <img className="" src={Editsub} alt="teste" />
              </button>
            </div>
            <div className="flex">
              <button>
                <img className="" src={Drop} alt="" />
              </button>
            </div>
          </div>
          ) : (
            <></>
          ) 
        )}

        {/* {subcards.map((subcard: Newcard ) => (
          <div className="bg-oxfordblue p-6 justify-between  rounded-lg shadow-md w-80 flex text-center mb-1 ">
            <div className="text-left ">
              <input
                className="bg-oxfordblue font-bold w-36 text-base   leading-6 text-semiwhite"
                type="text"
                disabled={editable === false}
                value={establishmentSubcategoryTitle}
                onChange={(e: any) => setestablishmentSubcategory(e.target.value)}
              />
              <button onClick={() =>editSubcategory(subcard.id)}>
                <img className="" src={Editsub} alt="teste" />
              </button>
            </div>
            <div className="flex">
              <button>
                <img className="" src={Drop} alt="" />
              </button>
            </div>
          </div>
        ))} */}
        <button
          onClick={ () => createSubcategorycard()}
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
