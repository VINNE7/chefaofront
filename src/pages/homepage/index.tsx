import FormButton from "../../components/button";

export default function Home(){
  return(
    <div className="flex flex-col bg-slate-800">
    <a href="/login">Login</a>
    <a href="/signup">Cadastro</a>
    <a href="/firstStablishmentSignup">Primeiro Cadastro de Estabelecimento</a>
    <a href="/secondStablishmentSignup">Segunda Página Cadastro de Estabelecimento</a> 
    <FormButton buttonLabel="Enviar"/>
    </div>
  )
}