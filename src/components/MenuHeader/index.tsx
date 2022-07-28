import imgCard from "../../assets/icons/img-vector.png";
import imgEdit from "../../assets/icons/img-edit.png";
import imgSum from "../../assets/icons/+.png";
import { useState } from "react";
import Avatar from "../avatar";


export default function MenuHeader() {
  const [establishmentAddress, setEstablishmentAddress] = useState("Rua, nº, Bairro, Cidade-UF");

  const [establishmentName, setEstablishmentName] = useState("Nome do estabelecimento");

  const [isEditable, setIsEditable] = useState(false)


  
  return (
    <>
      <div className="w-screen items-center ">
        <div className=" flex items-center flex-col bg-royaldark rounded-b-2xl shadow-md pt-4">                   
           
            <Avatar/>
            
            <form action="" className="mt-2 text-center flex flex-col justify-center items-center gap-2">
              <input
                type="text"
                disabled={isEditable === false}
                className="text-xl px-2 py-1 rounded-lg font-bold text-center leading-[30px] disabled:bg-transparent disabled:border-none disabled:focus:outline-none disabled:text-semiwhite disabled:p-0 "
                value={establishmentName}
                onChange={(e:any)=>setEstablishmentName(e.target.value)}
              />
              
              <input 
                className="text-sm px-2 py-1 mb-3 rounded-lg  disabled:bg-transparent disabled:border-none disabled:focus:outline-none disabled:text-semiwhite disabled:p-0"
                disabled={isEditable === false}
                value={establishmentAddress}
                onChange={(e)=>setEstablishmentAddress(e.target.value)}
                />
               
              
            </form>
              {isEditable ? (
                <button className="text-sm font-bold text-green-400 border-b-2 leading-6  border-green-400 mb-4" onClick={()=>setIsEditable(!isEditable)} >
                  Salvar informações
                </button>
              ) : (
                <button className="text-sm font-bold text-cyberyellow border-b-2 leading-6  border-cyberyellow mb-4" onClick={()=>setIsEditable(!isEditable)} >
                  Editar informações
                </button>
              )}
        </div>
      </div>
    </>
  );
}
