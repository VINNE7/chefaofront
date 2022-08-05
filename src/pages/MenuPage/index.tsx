import Item from "../../components/Item";
import imgPen from "../../assets/icons/pen.png";
import { SubCategory } from "../../components/Subcategory";
import Category from "../../components/Category";
import MenuHeader from "../../components/MenuHeader";
import { ButtonDelete } from "../../components/Delete";
import AddCategory from "../../components/AddCategory";

export default function MenuPage() {
  return (
    <div className="grid gap-4 ">
      <MenuHeader />

      <div className="mx-8 ">
        <Category />

 

        <div className="my-10"></div>
        <ButtonDelete />
      </div>
    </div>
  );
}
