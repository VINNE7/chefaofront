import { Category } from "../../components/Category";
import MenuHeader from "../../components/MenuHeader";
import imgPen from "../../assets/icons/pen.png";

export default function MenuPage() {
  return (
    <div className="grid gap-4 ">
      <MenuHeader />

      <div className="mx-8 ">
        <h2 className="text-raisinblack text-2xl font-bold">Categorias</h2>
        --
        <div className="flex justify-between items-center">
          <h2 className="text-raisinblack text-2xl font-bold my-10">
            Nome da Categoria
          </h2>
          <img
            className="w-[21px] h-[18px]"
            src={imgPen}
            alt="icone para modificar pedido"
          />
        </div>
        <div className="flex justify-center itemx-center ">
          <Category />
        </div>
      </div>
    </div>
  );
}
