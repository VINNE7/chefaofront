import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  empresa: string;
  segmento: string;
  cep: string;
  estado: string;
  cidade: string;
  endereco: string;
  numero: string;
  bairro: string;
};

export default function FirstStablishmentSignup() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <div className="min-h-screen w-screen flex justify-center items-center flex-col  bg-slate-800">
      <h1 className="text-white text-2xl text-center font-bold">
        Dados do Estabelecimento
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 m-0 bg-slate-800 p-3 "
      >
        <div className="">
          <label className="leading-3 text-left block mb-3 mt-5 text-white text-sm font-extralight">
            Nome da Empresa
          </label>
          <input
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            placeholder="Nome da empresa"
            {...register("empresa")}
          />
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            Segmento
          </label>

          <select
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            {...register("segmento")}
          >
            <option value="disable">Escolha aqui</option>
            <option value="pizzaria">Pizzaria</option>
            <option value="lanchonete">Lanchonente</option>
            <option value="comida boteco">Comida de Buteco</option>
          </select>
        </div>

        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            CEP
          </label>
          <input
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            placeholder="00000-000"
            {...register("cep")}
          />
        </div>

        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            Estado
          </label>

          <select
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            {...register("estado")}
          >
            <option value="disable">UF</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espirito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernanbumco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            Cidade
          </label>
          <input
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            placeholder="Digite sua Cidade"
            {...register("cidade")}
          />
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            Endereço da empresa
          </label>
          <input
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            placeholder="Rua..."
            {...register("endereco")}
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
              Numero
            </label>

            <input
              className=" box-border w-28 rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
              placeholder="Numero"
              {...register("numero")}
            />
          </div>
          <div className="flex flex-col">
            <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
              Bairro
            </label>
            <input
              className=" box-border w-28 rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
              placeholder="Bairro"
              {...register("bairro")}
            />
          </div>
        </div>
      </form>
      <button
        className="box-border rounded border-solid border-2 border-white py-2 px-4 text-sm text-white w-1/4 items-center justify-center text-center"
        type="submit"
      >
        Avançar
      </button>
    </div>
  );
}
