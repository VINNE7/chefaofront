import imgCard from "../../assets/icons/img-vector.png";
import imgEdit from "../../assets/icons/img-edit.png";
import imgSum from "../../assets/icons/+.png";

export default function MenuHeader() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center ">
        <div className="w-screen flex items-center flex-col ">
          <div className="relative w-screen flex items-center flex-col bg-royaldark rounded-b-2xl shadow-md">
            <div className="mt-[50px] absolute ">
              <img src={imgCard} className=" " />
            </div>

            <p className="bg-white p-14 rounded-full mt-[18px]">
              <div
                className="flex justify-center items-center bg-semiwhite rounded-full
              w-10 h-10 absolute bottom-0 top-0 translate-y-[88px] translate-x-[14px]"
              >
                <img src={imgEdit} className="" />
                <img
                  src={imgSum}
                  className="absolute translate-y-[10px] translate-x-[8px]"
                />
              </div>
            </p>
            <h1 className="text-xl font-bold text-semiwhite leading-[30px] ">
              Nome Lanchonete
            </h1>
            <p className="text-sm text-semiwhite mb-3">
              Nome da rua, nº, bairro, Cidade-UF
            </p>

            <button className="text-sm font-bold text-cyberyellow border-b-2 leading-6  border-cyberyellow mb-4 ">
              Editar informações
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
