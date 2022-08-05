
import MenuHeader from "../../components/MenuHeader";
import Category from "../../components/Category";

export default function MenuPage() {
  return (
    <div className="grid gap-4 ">
      <MenuHeader />
      <div className="mx-8 ">
        <Category />
      </div>
    </div>
  );
}