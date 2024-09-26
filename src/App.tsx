import ListaDeTarefas from './containers/ListaDeTarefas'
import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral></BarraLateral>
        <ListaDeTarefas></ListaDeTarefas>
      </Container>
    </>
  )
}

export default App
