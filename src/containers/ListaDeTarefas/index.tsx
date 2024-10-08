import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../Utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'estudar typescript',
    descricao: 'ver a aula 3 da ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta',
    descricao: 'baixar fatura',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'academia',
    descricao: 'treino b',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          ></Tarefa>
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
