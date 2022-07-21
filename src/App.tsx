import { BrowserRouter } from 'react-router-dom'
import Cadastro from './page/Cadastro'
import RoutesComponent from './routes'
import './styles/global.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Cadastro />
        <RoutesComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
