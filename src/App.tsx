import ListaDeTarefas from './containers/BarraDeTarefas'
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
