import { useForm, SubmitHandler } from "react-hook-form";

interface IFormValues {
    name: string;
    itemDescription: string;
    price: number;
    photoDescription: string;
  }
  
  export default function NewItemModal(props: any) {
    const { register, handleSubmit } = useForm<IFormValues>();
  
    const submit: SubmitHandler<IFormValues> = (data) =>
      alert(JSON.stringify(data));
  
    return (
      <div className="h-[520px] w-[314px] bg-semiwhite rounded-xl pt-4 pb-5 px-4 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="min-w-[50%] flex flex-col items-center">
          <h1 className="raisinblack leading-6 text-center font-bold w-4/5 mb-4">
            Cadastrar novo item
          </h1>
          <form
            onSubmit={handleSubmit(submit)}
            className="w-full bg-semiwhite flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <label className="leading-6 text-left raisinblack" htmlFor="name">
                Nome do Item
              </label>
              <div>
                <input
                  className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                  placeholder="Escreva o nome do item"
                  type="text"
                  id="name"
                  required
                  {...register("name")}
                />
              </div>
            </div>
  
            <div className="flex flex-col gap-2">
              <label
                className="leading-6 text-left raisinblack"
                htmlFor="item-description"
              >
                Descrição (opcional)
              </label>
              <div>
                <input
                  className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                  placeholder="Escreva a descrição do item"
                  type="text"
                  id="item-description"
                  {...register("itemDescription")}
                />
              </div>
            </div>
  
            <div className="flex flex-col gap-2">
              <label className="leading-6 text-left raisinblack" htmlFor="price">
                Preço
              </label>
              <div>
                <input
                  className="block box-border w-3/6 rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                  placeholder="R$ 00,00"
                  type="number"
                  step="0.01"
                  min="0.01"
                  id="price"
                  required
                  {...register("price")}
                />
              </div>
            </div>
  
            <button className="formButtonBack !w-full font-bold">
              Adicionar foto do item
            </button>
  
            <div className="flex flex-col gap-2">
              <label
                className="leading-6 text-left raisinblack"
                htmlFor="photo-decription"
              >
                Descrição da foto
              </label>
              <div>
                <input
                  className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 text-sm"
                  placeholder="Escreva a descrição da foto que adicionou"
                  type="text"
                  id="photo-decription"
                  required
                  {...register("photoDescription")}
                />
              </div>
            </div>
  
            <div className="font-bold flex-row flex justify-around mt-5">
              <button onClick={props.onClick} className="formButtonBackMin bg-semiwhite">
                Cancelar
              </button>
  
              <input
                type="submit"
                className="formButtonForwardMax hover:cursor-pointer"
                value="Salvar"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }