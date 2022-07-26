import React from "react";
import FormButton from "../../components/button";
import Img from "../../assets/images/registerOk.png";

export default function SuccessfulRegistration() {
  // const { register, handleSubmit } = useForm<FormValues>();
  // const onSubmit: SubmitHandler<FormValues> = (data) =>
  //   alert(JSON.stringify(data));

  return (
    <>
      <main className="min-w-[380px]">
        <h1 className="text-black text-center font-bold text-[32px] w-5/6 h-[72px] mx-auto mt-8 mb-16">
          Cadastro concluído com sucesso
        </h1>
        <img src={Img} alt="" className="mx-auto mb-16" />
        <p className="text-black text-center font-bold text-base w-5/6 h-[72px] leading-6 mx-auto mb-8">
          Você finalizou o seu cadastro, agora podemos começar a editar o
          cardápio
        </p>
        <FormButton buttonLabel="Sair" />
        <FormButton buttonLabel="Começar" />
      </main>
    </>
  );
}
