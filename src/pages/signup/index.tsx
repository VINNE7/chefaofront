import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../components/button";

type FormValues = {
  firstName: string;
  email: string;
  password: string;
};

export default function Signup() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <div className="min-h-screen w-screen flex justify-center items-center flex-col  bg-semiwhitelate-800">
      <div className="min-h-screen min-w-full flex justify-start items-center flex-col mt-9 bg-semiwhite">
        <h1 className="raisinblack text-4xl leading-12 text-center font-bold w-4/5 mt-9 mb-6">
          Cadastro de Usuário
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full m-0 bg-semiwhite px-8 "
        >
          <div className="input-field">
            <label className="leading-6 text-left raisinblack text-base font-bold mb-2">
              Nome
            </label>
            <div className="">
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 mb-4 text-sm"
                placeholder="Digite seu nome"
                {...register("firstName")}
              />
            </div>
          </div>

          <div>
            <label
              className="leading-6 text-left raisinblack text-base font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>

            <div className="relative ">

              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 mb-4 text-sm"
                placeholder="Digite seu e-mail"
                {...register("email")}
              />
            </div>
          </div>

          <div>
            <label
              className="leading-6 text-left raisinblack text-base font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative ">

              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 mb-4 text-sm"
                placeholder="Digite sua senha"
                {...register("firstName")}
              />
            </div>
          </div>

          <div className="input-field">
            <label
              className="leading-6 text-left raisinblack text-base font-bold mb-2"
              htmlFor="password"
            >
              Confirmar Senha
            </label>
            <div className="relative ">


            <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 mb-4 text-sm"
                placeholder="Digite sua senha"
              type="email"
              {...register("email")}
            />
            </div>
          </div>
        </form>
        <input
          className="flex box-border rounded border-solid border-2 border-white py-2 px-4 text-sm raisinblack w-1/3 items-center justify-center text-center"
          type="submit"
        />
      </div>

      <div className="relative ">
        <i className="fa fa-key absolute top-1/2 -translate-y-1/2 right-2" />
        <input
          className="block box-border w-full rounded border-solid border-1 border-white py-2 pl-4 pr-6 mb-3  text-sm"
          {...register("firstName")}
        />
      </div>
      <FormButton buttonLabel="Enviar" />
    </div>
  );
}
