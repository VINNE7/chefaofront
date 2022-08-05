import DateRow from "../../components/DateRow";
import Modal from "react-modal";
import { useState } from "react";
import ReactModal from "react-modal";
import { DataCheckbox } from "./data";

Modal.setAppElement("#root");

export default function SecondStablishmentSignup() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="w-screen h-screen bg-semiwhite font-tahoma">
      <div className="flex flex-col py-10 max-w-xs mx-auto">
        <h1 className="text-2xl font-bold text-center mb-10">
          Horário de Funcionamento
        </h1>
        <div className="mb-8">
          <DateRow dayText="Segunda" />
          <DateRow dayText="Terça" />
          <DateRow dayText="Quarta" />
          <DateRow dayText="Quinta" />
          <DateRow dayText="Sexta" />
          <DateRow dayText="Sábado" />
          <DateRow dayText="Domingo" />
        </div>
        <button
          className="text-sm text-royalblue font-bold border-b border-royalblue self-center mb-8"
          onClick={openModal}
        >
          Editar Todos os Horários
        </button>
        <div className="flex items-center justify-center gap-5 mx-8">
          <button className=" flex-1 border-2 rounded-2xl border-cyberyellow  py-2 hover:border-darkgolden hover:bg-yellowcrayolla transition-colors">
            Voltar
          </button>
          <button className=" flex-1 border-2 rounded-2xl border-ghostwhite bg-ghostwhite text-grayDisabled py-2 ">
            Salvar
          </button>
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Caixa para edição de horário de funcionamento"
          overlayClassName="modal-overlay"
          className="modal-content  w-[316px] h-[600px] bg-white rounded-lg"
        >
          <div className="flex flex-col bg-white pt-4 pb-6 rounded-lg ">
            <h1 className="font-bold text-black text-base text-center  ">
              Selecione os dias e horários
            </h1>
            <form action="">
              <div className="flex px-2  justify-between ">
                {DataCheckbox.map(({ name, label }, index) => (
                  <label className="relative" key={index}>
                    <input
                      type="checkbox"
                      className="appearance-none absolute inset-0 cursor-pointer peer"
                      name={name}
                    />
                    <span className="text-grayDisabled border rounded-md justify-center text-sm peer-checked:bg-raisinblack peer-checked:text-cyberyellow px-[6px] py-0.5">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
              <div></div>
            </form>
          </div>
        </ReactModal>
      </div>
    </div>
  );
}
