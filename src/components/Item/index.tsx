
import { useState } from "react";
import EditImgItem from "../../assets/images/edit-img-item.png";

interface IpropsItem {
  name: string;
  price: string;
}

export default function Item(props: IpropsItem) {

  return (
    <>
      {/* <div className="flex justify-center items-center space-x-16 px-2 bg-royalblue border-b-[0.5px] border-semiwhite min-w-[316px] w-[316px] h-[106px] mx-auto">
        <div className="flex flex-col space-y-6 text-semiwhite ">
          <h4 className="font-bold w-[140px]">Moda da Casa</h4>
          <p>R$54,00</p>
        </div>
        <div className="w-[94px] h-[74px] bg-grayDisabled rounded-lg">
          <img src={EditImgItem} alt="Imagem generica" className="p-auto" />
        </div>
      // </div> exemplo estático só pra visualizar como vai ficar*/}
      <div className="flex justify-center items-center space-x-16 px-2 bg-royalblue border-b-[0.5px] border-semiwhite min-w-[316px] w-[316px] h-[106px] mx-auto">
        <div className="flex flex-col space-y-6 text-semiwhite ">
          <h4 className="font-bold w-[140px]">{props.name}</h4>
          <p>R${props.price}</p>
        </div>
        <img src={EditImgItem} alt="Imagem generica" />
 
        </div>

 
 
    </>
  );
}