import Item from "../../components/Item";

export default function MenuPage() {
  return (
    <div className="flex w-[316px] mx-auto">
      <div>
        <h1 className="text-raisinblack text-2xl font-bold">Categorias</h1>
        <Item name="Linguiça" price="47,99"></Item>
      </div>
    </div>
  );
}
