import Plus from "../../assets/icons/Vector.png";
import { useState } from "react";

export default function AddCategory() {
  function addCateg() {
    setaddSubcategory([...addSubcategory, addSubcategory]);
  }

  const [addSubcategory, setaddSubcategory] = useState([{}]);

  return (
    <>
      <button
        onClick={addCateg}
        className="bg-[#001B42] shadow-md flex w-36 rounded-lg p-4 gap-1 items-center object-cover "
      >
        <span className="bg-[#001B42] shadow-md text-[#FAFAFA]">
          Adicionar Categorias{" "}
        </span>
        <img className="" src={Plus} alt="" />
      </button>
    </>
  );
}
