import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../components/button";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Signup() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <div className="min-h-screen w-screen flexitems-center flex-col bg-white">
      <div className="min-h-screen min-w-full flex justify-start items-center flex-col mt-10 bg-white">
        <h1 className="flex leading-12 text-raisinblack text-4xl text-center mb-6 font-bold mx-10">
          Cadastro de Usuário
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  bg-white p-3 px-8"
        >
          <div className="input-field">
            <label className="leading-6 text-left text-raisinblack text-base font-bold mb-2 mt-4">
              Nome
            </label>
            <div className="">
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue pl-2 mb-3 h-10 text-sm"
                placeholder="Digite seu nome"
                {...register("firstName")}
              />
            </div>
          </div>

          <div>
            <label
              className="leading-6 text-left text-Raisin-Black text-base font-bold mb-2 mt-4"
              htmlFor="email"
            >
              E-mail
            </label>

            <div className="relative ">
              <i className="fa fa-envelope absolute top-1/2 -translate-y-1/2 right-2" />
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 pl-4 pr-6 mb-3 h-10 text-sm"
                {...register("email")}
              />
            </div>
          </div>

          <div>
            <label
              className="leading-6 text-left text-Raisin-Black text-base font-bold mb-2 mt-4"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative ">
              <i className="fa fa-key absolute top-1/2 -translate-y-1/2 right-2" />
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 pl-4 pr-6 mb-3 h-10 text-sm"
                type="password"
                {...register("password")}
              />
            </div>
          </div>

          <div className="input-field">
            <label
              className="leading-6 text-left text-Raisin-Black text-base font-bold mb-2 mt-4"
              htmlFor="password"
            >
              Confirmar Senha
            </label>
            <div className="relative ">
              <i className="fa fa-key absolute top-1/2 -translate-y-1/2 right-2" />

              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 pl-4 pr-6 mb-3 h-10 text-sm"
                type="password"
                {...register("password")}
              />
            </div>
          </div>
        </form>
        <FormButton buttonLabel="Enviar" />
      </div>
    </div>
  );
}