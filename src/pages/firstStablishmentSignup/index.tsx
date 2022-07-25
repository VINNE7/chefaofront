import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../components/button";
import { States, Types } from "./Object";

type FormValues = {
  empresa: string;
  segmento: string;
  cep: string;
  estado: string;
  cidade: string;
  endereco: string;
  numero: string;
  bairro: string;
  contato: string;
};

export default function FirstStablishmentSignup() {
  const { register, handleSubmit, setValue, setFocus } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  const checkCep = (e: { target: { value: string } }) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setValue("estado", data.uf);
        setValue("cidade", data.localidade);
        setValue("endereco", data.logradouro);
        setValue("bairro", data.bairro);
        setFocus("numero");
      });
  };


  return (
    <div className="min-h-screen w-screen flex justify-center items-center flex-col  bg-white">
      <div className="">
        <h1 className=" text-[#000000] text-2xl text-center font-bold ">
          Dados do Estabelecimento
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 m-0  p-3 "
      >
        <div className="">
          <label className="leading-3 text-left block mb-3 mt-5 text-[#24252E] text-base font-bold  ">
            Nome da Empresa
          </label>
          <input
            className="block box-border w-full rounded border-solid border border-[#001B42] py-2 px-4 mb-3 text-sm "
            placeholder="Digite o nome do estabelecimento"
            type="text"
            {...register("empresa", { required: true })}
          />
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-[#24252E] text-base font-bold">
            Segmento
          </label>

          <select
            className="block box-border w-full rounded border-solid border border-[#001B42] py-2 px-4 mb-3 text-sm"
            required
            {...register("segmento", { required: true })}
          >
            {Types.map(
              (type) =>(
                <option value={type.value}>{type.type}</option>
              )
            )}
           
          </select>
        </div>

        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-[#24252E] text-base font-bold">
            CEP
          </label>
          <input
            className="block box-border w-full rounded border-solid border border-[#001B42] py-2 px-4 mb-3 text-sm"
            placeholder="Digite o CEP do estabelecimento"
            id="cep"
            type="text"
            {...(register("cep"), { required: true })}
            onBlur={checkCep}
          />
        </div>

        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-[#24252E] text-base font-bold">
            Estado
          </label>

          <select
            className="block box-border w-full rounded border-solid border border-[#001B42] py-2 px-4 mb-3 text-sm"
            required
            {...register("estado")}
          
          >
            {States.map( 
              (state) => (
                <option value={state.value}>{state.state}</option>
              )
            )}
          </select>
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-[#24252E] text-base font-bold">
            Cidade
          </label>
          <input
            className="block box-border w-full rounded border-solid border border-[#001B42] py-2 px-4 mb-3 text-sm"
            placeholder="Digite o nome da cidade"
            required
            {...register("cidade")}
          />
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5  text-[#24252E] text-base font-bold">
            Endereço da empresa
          </label>
          <input
            className="block box-border w-full rounded border-solid border border-[#001B42] py-2 px-4 mb-3 text-sm"
            placeholder="Digite o nome da rua"
            required
            {...register("endereco")}
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <label className="leading-3 text-left block mb-3 mt-5 text-[#24252E] text-base font-bold">
              Numero
            </label>

            <input
              className=" box-border w-28 rounded border-solid border border-[#001B42] py-2 px-1 mb-3 text-sm"
              placeholder="Digite o número"
              required
              {...register("numero")}
            />
          </div>
          <div className="flex flex-col">
            <label className="leading-3 text-left block mb-3 mt-5 text-[#24252E] text-base font-bold">
              Bairro
            </label>
            <input
              className=" box-border w-28 rounded border-solid border border-[#001B42] py-2 px-2 mb-3 text-sm"
              placeholder="Digite o bairro"
              required
              {...register("bairro")}
            />
          </div>
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-[#24252E] text-base font-bold">
            Contato ou whatsapp
          </label>
          <input
            className="block box-border w-full rounded border-solid border border-[#001B42] py-2 px-4 mb-3 text-sm"
            placeholder="Digite o nome da cidade"
            required
            {...register("contato")}
          />
        </div>
      </form>
      <FormButton buttonLabel="Avançar" />
    </div>
  );
}
