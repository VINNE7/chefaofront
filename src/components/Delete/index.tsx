import { useState } from "react";
import { Link } from "react-router-dom";
import imgTrash from "../../assets/icons/trash.png";

export function ButtonDelete() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="w-full h-[36px] flex flex-row justify-between items-center border-solid border-b-2 border-royaldark">
        <h2 className="text-royaldark text-sm font-bold ">Excluir Categoria</h2>
        <img
          className="w-[20px] h-[24px]"
          src={imgTrash}
          alt="icone para deletar"
          onClick={() => setShowModal(true)}
        />

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[314px] h-[152px] my-6 mx-auto max-w-sm">
                <div className="border-0 rounded-[12px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative mx-6 flex-auto">
                    <p className="mt-6 mb-12 text-raisinblack text-[16px] font-bold">
                      Tem certeza que deseja excluir?
                    </p>
                  </div>
                  <div className="flex justify-evenly mb-5">
                    <button
                      className="formButtonBackMin font-bold text-[16px]"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>
                    <Link to={"/menu"}>
                      <button
                        className="formButtonForwardMax font-bold text-[16px]"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Excluir
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </button>
    </>
  );
}
