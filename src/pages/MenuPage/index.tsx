import MenuHeader from "../../components/MenuHeader";
import imgPen from "../../assets/icons/pen.png";
import { SubCategory } from "../../components/Subcategory";
import { ButtonDelete } from "../../components/Delete";
import { Item } from "../../components/Item";
import { ButtonPublish } from "../../components/button/buttonPublish";


export default function MenuPage() {
  return (
    <div className="grid gap-4 ">
      <MenuHeader />

      <div className="mx-8 ">
        <h2 className="text-raisinblack text-xl font-bold my-4 ">Categorias</h2>

        <div className="flex justify-between items-center">
          <h2 className="text-raisinblack text-xl font-bold my-10">
            Nome da Categoria
          </h2>
          <button>    
            <img
              className="w-[21px] h-[18px]"
              src={imgPen}
              alt="icone para modificar pedido"
            />
          </button>
        </div>

        <div>
          <Item />
        </div>

        <div className="flex justify-center itemx-center ">
          <SubCategory />
        </div>

        <div className="my-10">
          <ButtonDelete />
        </div>

        <div>
        <ButtonPublish />
        </div>
      </div>
    </div>
  );
}
