import { Link } from "react-router-dom";
import Img from "../../assets/images/registerOk.png";

export default function SuccessfulRegistration() {
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
        <div className="flex justify-center items-center w-5/6 mx-auto mb-[197px] space-x-5">
          <Link to={""} className="box-border border border-cyberyellow py-2 px-4 rounded-[10px] w-[146px]  items-center justify-center text-center">
            Sair
          </Link>
          <Link to={"/login"} className="bg-cyberyellow  border border-cyberyellow py-2 px-4  rounded-[10px] w-[146px] items-center  justify-center text-center">
            Começar
          </Link>
        </div>
      </main>
    </>
  );
}
