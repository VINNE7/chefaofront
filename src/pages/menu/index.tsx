import Item from "../../components/Item";
import imgPen from "../../assets/icons/pen.png";
import { SubCategory } from "../../components/Subcategory";
import Category from "../../components/Category";
import MenuHeader from "../../components/MenuHeader";
import { ButtonDelete } from "../../components/Delete";

export default function Menu() {
  return (
    <div className="grid gap-4 ">
      <MenuHeader />

      <div className="mx-8 ">

     
        <div className="flex justify-between items-center">

          <button>
            <img
              className="w-[21px] h-[18px]"
              src={imgPen}
              alt="icone para modificar pedido"
            />
          </button>
        </div>
        <Item name="" price="" />
        <div className="flex justify-center itemx-center ">
          <SubCategory />
        </div>
        <div className="my-10"></div>
        <ButtonDelete />
      </div>
    </div>
  );
}