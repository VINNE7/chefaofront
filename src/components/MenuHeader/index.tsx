import { useState } from "react";

import Avatar from "../Avatar";
import { SubmitHandler, useForm} from "react-hook-form";

interface IMenuFormValues{
  establishmentName: string;
  address: string;
}

export default function MenuHeader() {
  const [establishmentAddress, setEstablishmentAddress] = useState("Rua, nº, Bairro, Cidade-UF");
  const [establishmentName, setEstablishmentName] = useState("Nome do estabelecimento");


  const [isEditable, setIsEditable] = useState(false);
  
  const { register, handleSubmit, formState:{errors}, watch } = useForm<IMenuFormValues>();
  const onSubmit: SubmitHandler<IMenuFormValues> = (data) => alert(JSON.stringify(data ));

  
  return (
    <>
      <div className="w-screen items-center ">
        <div className=" flex items-center flex-col bg-royaldark rounded-b-2xl shadow-md pt-4">                   
            
            <form action="" className="mt-2 text-center flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit(onSubmit)}>

              <Avatar />
              <input
                type="text"
                disabled={isEditable === false}
                className="text-xl px-2 py-1 rounded-lg font-bold text-center leading-[30px] disabled:bg-transparent disabled:border-none disabled:focus:outline-none disabled:text-semiwhite disabled:p-0 "
                value={establishmentName}
                {...register("establishmentName", {required: true, onChange:(e:any)=>setEstablishmentName(e.target.value)})}
                
              />

              
              <textarea
                className="text-sm resize-none px-2 py-1 mb-3 rounded-lg  disabled:bg-transparent disabled:border-none disabled:focus:outline-none disabled:text-semiwhite disabled:p-0 disabled:rounded-none"
                disabled={isEditable === false}
                value={establishmentAddress}
                {...register("address", {required: true, onChange:(e)=>setEstablishmentAddress(e.target.value)})}
              />

               {isEditable ? (
                <button type="button" className="text-sm font-bold text-green-400 border-b-2 leading-6  border-green-400 mb-4" onClick={()=>setIsEditable(!isEditable)} >

                  Salvar informações
                </button>
              ) : (
                <button  className="text-sm font-bold text-cyberyellow border-b-2 leading-6  border-cyberyellow mb-4" onClick={()=>setIsEditable(!isEditable)} >
                  Editar informações
                </button>
              )}
               
              
            </form>
             
        </div>
      </div>
    </>
  );
}