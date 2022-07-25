
import { FormButtonBack } from "../../components/buttonBack";

export default function Home(){
  return(
    <div className="flex flex-col bg-slate-800">
    <a href="/login">Login</a>
    <a href="/signup">Cadastro</a>
    <a href="/firstStablishmentSignup">Primeiro Cadastro de Estabelecimento</a>
    <a href="/secondStablishmentSignup">Segunda Página Cadastro de Estabelecimento</a> 
    <FormButtonBack buttonLabel="Enviar"/>
    </div>
  )
}