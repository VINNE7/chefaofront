import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../components/button";

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
    <div className="min-h-screen w-screen flex justify-center items-center flex-col  bg-slate-800">
      <h1 className=" text-white text-2xl text-center font-bold">
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
            placeholder="Digite o nome do estabelecimento"
            type="text"
            {...register("empresa", { required: true })}
          />
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            Segmento
          </label>

          <select
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            required
            {...register("segmento", { required: true })}
          >
            <option value="disable">Selecione um Segmento</option>
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
            placeholder="Digite o CEP do estabelecimento"
            id="cep"
            type="text"
            {...(register("cep"), { required: true })}
            onBlur={checkCep}
          />
        </div>

        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            Estado
          </label>

          <select
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            required
            {...register("estado")}
          >
            <option value="disable">Selecione um estado</option>
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
            placeholder="Digite o nome da cidade"
            required
            {...register("cidade")}
          />
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            Endereço da empresa
          </label>
          <input
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
            placeholder="Digite o nome da rua"
            required
            {...register("endereco")}
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
              Numero
            </label>

            <input
              className=" box-border w-28 rounded border-solid border-1 border-white py-2 px-1 mb-3 text-sm"
              placeholder="Digite o número"
              required
              {...register("numero")}
            />
          </div>
          <div className="flex flex-col">
            <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
              Bairro
            </label>
            <input
              className=" box-border w-28 rounded border-solid border-1 border-white py-2 px-2 mb-3 text-sm"
              placeholder="Digite o bairro"
              required
              {...register("bairro")}
            />
          </div>
        </div>
        <div>
          <label className="leading-3 text-left block mb-3 mt-5 text-white tex-sm font-extralight">
            Contato ou whatsapp
          </label>
          <input
            className="block box-border w-full rounded border-solid border-1 border-white py-2 px-4 mb-3 text-sm"
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
