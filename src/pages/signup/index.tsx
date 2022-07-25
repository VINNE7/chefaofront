import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormButtonBack } from "../../components/button/buttonBack";
import FormButtonForward from "../../components/button/buttonForward";

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
    <div className="min-h-screen w-screen flex bg-semiwhite justify-center items-center flex-col ">
      <div className="min-h-screen min-w-full flex justify-start items-center flex-col  bg-semiwhite">
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
            <div className="">
              <input
                className="block box-border w-full rounded-md border-solid border border-royalblue py-2 px-2 mb-4 text-sm"
                placeholder="Digite sua senha"
                type="email"
                {...register("email")}
              />
            </div>
          </div>
          <div className="text-center raisinblack text-base font-bold flex-row flex justify-between">
          <Link to={'/login'}>
          <FormButtonBack buttonLabel="Voltar" />
          </Link>
          <Link to={'/firstStablishmentSignup'}>
          <FormButtonForward buttonLabel="Avançar" />
          </Link>

          </div>
        </form>
      </div>
    </div>
  );
}
