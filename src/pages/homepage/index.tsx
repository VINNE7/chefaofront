import FormButton from "../../components/button";
import { useContext } from 'react';
import { AuthContext } from "../../contexts/Auth/AuthLogin/AuthContext";
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout(event:  React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    auth.signout();
    navigate('/login')
  }

  return (
    <div className="flex flex-col bg-slate-800">
      <div>
        <h1 className="text-4xl mb-7"
        > Olá {auth.user?.name}, Tudo bem?
        </h1>
      </div>
      <a href="/login">Login</a>
      <a href="/signup">Cadastro</a>
      <a href="/firstStablishmentSignup">Primeiro Cadastro de Estabelecimento</a>
      <a href="/secondStablishmentSignup">Segunda Página Cadastro de Estabelecimento</a>
      {auth.user && <button onClick={handleLogout}>Sair</button>}
      <FormButton buttonLabel="Enviar" />
    </div>
  )
}